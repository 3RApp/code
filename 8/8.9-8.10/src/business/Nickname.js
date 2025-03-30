import {useEffect, useState} from 'react';

export const Nickname = ({ newNickname }) => {
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        if (newNickname) {
            localStorage.setItem('nickname', newNickname);
            setNickname(newNickname);
        }

        const nickname = localStorage.getItem('nickname');
        
        if (nickname) {
            setNickname(nickname);
        }
  }, [newNickname]);

  if (nickname) {
    return nickname;
  }

  return null;
}