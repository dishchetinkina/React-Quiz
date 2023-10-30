import React from 'react';
import "../App.scss"

const Game = ({questions,step, onClickVariants}) => {
    const percentage = Math.round(step / questions.length * 100);

    const question = questions[step];

    return (
        <>
            <div className="progress">
                <div style={{ width: `${percentage}%`}} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((text, index) => (
                        <li key={text} onClick={() => {onClickVariants(index)}}>{text}</li>
                    ))}
            </ul>
        </>
    );
};

export default Game;