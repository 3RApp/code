import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    
    console.log("useFetch вызван для url: ", url);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, [url]);

    return data;
};
