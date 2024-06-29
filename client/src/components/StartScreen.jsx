

const StartScreen = ({ onStartGame, onHighScores, onFinalScore }) => {
  
    return (
      <div className="start-screen">
        <div className="start-screen-background">
        <div className="content">
        <button className="p-btn" onClick={onStartGame}> Start Game</button>
<br></br>
<br></br>
<br></br>
            <button className="p-btn" onClick={onHighScores}> High Scores</button>

<br></br>
<br></br>
<br></br>
            <button className="p-btn" onClick={onFinalScore}> Final Scores  - debugging </button>


            </div>
          </div>   
 
      </div>
    );
  };
  
  export default StartScreen;