export const preloadImage = (() => {
  const cachedImages = new Set();

  return (images: string[]) => {
    images.forEach((image) => {
      if (!cachedImages.has(image)) {
        const preLoadImg = new Image();
        preLoadImg.src = image;
        cachedImages.add(image);
      }
    });
  };
})();
