import React from 'react';
import "../App.scss"

const Result = ({correct, questions, onClickRestart}) => {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
            {/*<a href="/">*/}
            <button onClick={onClickRestart}>Попробовать снова</button>
            {/*</a>*/}

        </div>
    );
};

export default Result;