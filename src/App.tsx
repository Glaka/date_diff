import React, { useState } from 'react';
import './App.css';
import InputDate from './components/InputDate';
import { calcDate, calcDateTest } from './helpers';
import { DAY_IN_MILLISECONDS } from './helpers/constants';

function App() {
    const [startDate, setStartDate] = useState('');
    const [finalDate, setFinalDate] = useState('');
    const [startDays, setStartDays] = useState<number>(0);
    const [finalDays, setFinalDays] = useState<number>(0);
    const [startDaysTest, setStartDaysTest] = useState<number>(0);
    const [finalDaysTest, setFinalDaysTest] = useState<number>(0);

    const daysDif: number = Math.ceil(Math.abs(finalDays - startDays));
    const daysDifCorrect: number = daysDif > 0 ? daysDif - 1 : daysDif;

    const daysDifTest = Number(
        Math.abs(
            (finalDaysTest - startDaysTest) / DAY_IN_MILLISECONDS
        ).toFixed()
    );
    const daysDifTestCorrect: number =
        daysDifTest > 0 ? daysDifTest - 1 : daysDifTest;

    const handleCalcDif = () => {
        setStartDays(calcDate(startDate));
        setStartDaysTest(calcDateTest(startDate));
        setFinalDays(calcDate(finalDate));
        setFinalDaysTest(calcDateTest(finalDate));
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>start date:</p>
                <InputDate value={startDate} onChange={setStartDate} />
                <p>end date:</p>
                <InputDate value={finalDate} onChange={setFinalDate} />
                <button onClick={handleCalcDif}>Calculate</button>
                {startDays && finalDays ? (
                    <p>Date difference: {daysDifCorrect} days</p>
                ) : null}
                {startDaysTest && finalDaysTest ? (
                    <p>Date difference (test): {daysDifTestCorrect} days</p>
                ) : null}
            </header>
        </div>
    );
}

export default App;
