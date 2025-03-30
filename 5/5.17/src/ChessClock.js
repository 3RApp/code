import React, {useState} from 'react';
import { Clock } from './Clock';

export const ChessClock = ({player1State, player2State}) => {
    const [playersClockState, setPlayersClockState] = useState([player1State, player2State]);
    const [player1ClockState, player2ClockState] = playersClockState;

    const togglePlayerClockState = () => setPlayersClockState(prev => [...prev].reverse());

    return (
        <section className="chess-clock">
            <Clock onClick={togglePlayerClockState} pause={player1ClockState} title={'Игрок 1'} />
            <Clock onClick={togglePlayerClockState} pause={player2ClockState} title={'Игрок 2'}  />
        </section>
    );
}