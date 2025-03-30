import { useEffect } from 'react';

export const EventResizeDOMElement = () => {
    const handleResize = () => {
        console.log('Новый размер экрана: ', window.innerWidth, window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <main>{/** JSX-содержимое вывода */}</main>
    );
}