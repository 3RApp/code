import React, {useState} from 'react';
import { Clock } from './Clock';

export const ChessClock = () => {
    const [playersClockState, setPlayersClockState] = useState([true, false]);
    const [player1ClockState, player2ClockState] = playersClockState;

    const togglePlayerClockState = () => setPlayersClockState(prev => [...prev].reverse());

    return (
        <section className="chess-clock">
            <Clock onClick={togglePlayerClockState} pause={player1ClockState} title={'Игрок 1'} />
            <Clock onClick={togglePlayerClockState} pause={player2ClockState} title={'Игрок 2'}  />
        </section>
    );
}