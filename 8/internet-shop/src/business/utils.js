export const getRandomImage = (imageList) => {
    const { length } = imageList;

    return imageList[Math.floor(Math.random() * length)];
};