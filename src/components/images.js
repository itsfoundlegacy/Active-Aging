function importAllImages(r) {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
}
  
const images = importAllImages(require.context('./Images', false, /\.(png|JPE?G|svg)$/));
export default images;