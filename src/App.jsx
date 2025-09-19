import { useState } from "react";

function SmileCounter() {

    const initialSmiles = [
        {id: 1, emoji: "😀", count: 0},
        {id: 2, emoji: "😂", count: 0},
        {id: 3, emoji: "🙂", count: 0}
    ];

    const [smiles, setSmiles] = useState(initialSmiles);
    const [winnerSmile, setWinnerSmile] = useState(null);

    function calcWinner() {
        const listSmiles = [...smiles];
        const smilesCounts = [];

        for(let i = 0; i < listSmiles.length; i++) {
            smilesCounts.push(listSmiles[i].count);
        }

        const maxCountOfSmile = Math.max(...smilesCounts);
        const winObjSmile = listSmiles.find(smile => smile.count === maxCountOfSmile);
        
        setWinnerSmile(winObjSmile);
    }

    function increaseCount(id) {
        const currentSmilesArray = smiles;
        const updateSmilesArray = [];

        for(let i = 0; i < currentSmilesArray.length; i++) {
            const currentSmile = currentSmilesArray[i];

            if(currentSmile.id === id) {
                const updatedSmile = {
                    id: currentSmile.id,
                    emoji: currentSmile.emoji,
                    count: currentSmile.count + 1,
                }
                updateSmilesArray.push(updatedSmile);
            }else {
                updateSmilesArray.push(currentSmile);
            }
        }
        setSmiles(updateSmilesArray);
    }

    let smilePrint = smiles.map((smile) => {
        return(
            <li key = {smile.id}>
                <span>{smile.emoji}</span>
                <span>{smile.count}</span>
                <Button onClick={ () => increaseCount(smile.id) } />
            </li>
        );        
    })

    return(
        <div className="wrapper">
            <div className="smile-boards">
                <ul className="smile-boards__list">
                    {smilePrint}
                </ul>
                <div className="smile-boards__winner">
                    <ButtonResult onClick={calcWinner}/>
                    <span>Winner:</span>
                    {winnerSmile && <span>{winnerSmile.emoji}</span>}
                </div>
            </div>
        </div> 
    )
}

function Button({ onClick }) {
    return(
        <button onClick={onClick}>Like</button>
    ); 
}

function ButtonResult({ onClick }) {
    return(
        <button onClick = { onClick }>Show results</button>
    );
}


export default SmileCounter;