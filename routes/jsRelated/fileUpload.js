import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import uploader from "express-fileupload";
import express from "express";

const router = express.Router();
const pipeStream = (path, writeStream) => {
  return new Promise((resolve) => {
    const readStream = fs.createReadStream(path);
    readStream.on("end", () => {
      // 删除 chunk 文件
      fs.unlinkSync(path);
      resolve();
    });
    // 读取流完毕，将数据交给写入流
    readStream.pipe(writeStream);
  });
};
/**
 * @returns:'@/public/files'
 */
const fileSavePath = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const path1 = path.resolve(__dirname, "../../", "public/files");
  return path1;
};

const UPLOAD_DIR = fileSavePath();
let chunksDir = "";

router.use(uploader());

router.post("/upload", (req, res) => {
  console.log(req.body);
  const { filename, hash } = req.body;
  const { chunk } = req.files;
  // 存放文件切片的目录：'@/public/files/${filename}'
  chunksDir = path.resolve(UPLOAD_DIR, `${filename}`);
  console.log("upload目录", chunksDir);
  // 不存在，则创建
  if (!fs.existsSync(chunksDir)) {
    fs.mkdirSync(chunksDir);
  }
  // 异步写入文件数据
  fs.writeFile(`${chunksDir}/${hash}`, chunk.data, (err) => {
    if (err) {
      throw err;
    }
    // 响应结果
    res.json({
      code: 2000,
      message: "文件切片上传成功",
    });
  });
});

router.post("/merge", async (req, res) => {
  const { filename, chunkSize, extension } = req.body;
  // 最终文件保存的父目录,其实就是文件切片的目录
  // 举例：'@/public/files/${filename}'
  chunksDir = path.resolve(UPLOAD_DIR, `${filename}`);
  // 最终文件保存的文件
  // 举例：'@/public/files/${filename}/${filename}.mp4'
  const filePath = path.resolve(chunksDir, `${filename}`) + "." + extension;
  // 读取存放文件切片的目录下的所有chunk，返回它们的相对路径
  const ChunkPathList = fs.readdirSync(chunksDir);
  // 对chunk进行排序，方便合并
  ChunkPathList.sort((a, b) => a.split("-")[1] - b.split("-")[1]);

  await Promise.all(
    // 流式读取与写入
    ChunkPathList.map((chunkPath, index) => {
      pipeStream(
        // '@/public/files/${filename}/${hash}'
        path.resolve(chunksDir, chunkPath),
        // '@/public/files/${filename}/${filename}.mp4'
        fs.createWriteStream(filePath, {
          start: index * chunkSize,
        })
      );
    })
  );

  // 响应结果
  res.json({
    code: 2000,
    message: "文件切片合成成功！！！",
    url: `http://backend.v2-admin.gulihanjiang.top/files/${filename}/${filename}.${extension}`,
  });
});

export default router;
