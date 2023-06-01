const dataSet = require("../processedImage.json");
const dummyUrl = "https://picsum.photos/id/";
const genRanHex = (size) =>
  [...Array(size)].map(() => Math.floor(Math.random() * 300));
const generateImages = (req, res) => {
  const query = req;
  const r_index = genRanHex(9);
  const dataSetLength = dataSet.length;
  const images = r_index.map((value) => {
    return { url: dummyUrl + value + "/500/400" };
  });

  res.send(images);
};

module.exports = {
  generateImages,
};
