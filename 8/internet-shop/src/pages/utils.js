export const extractTitle = (dataStructure, id) => {

    const product = dataStructure.find(item => item.uid === id);

    return product?.title || "";
};

const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

export const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    
    return `${day} ${months[month]} ${year}`;
};