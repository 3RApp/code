export const useFetch = (url, cb) => {
    console.log("useFetch вызван для url: ", url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        cb && cb(data);
    });
};
