import Mock from "mockjs";

function handleRandomImage(width = 50, height = 50) {
  return `https://picsum.photos/${width}/${height}?random=${Mock.Random.guid()}`;
}

export { handleRandomImage };
