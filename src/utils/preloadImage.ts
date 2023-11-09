export const preloadImage = (images: string[]) => {
  images.forEach((image) => {
    const preLoadImg = new Image();
    preLoadImg.src = image;
  });
};
