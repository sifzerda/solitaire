

const StartScreen = ({ onStartGame, onHighScores }) => {
  
    return (
      <div className="start-screen">
        <div className="start-screen-background">
        <div className="content">
        <button className="p-btn" onClick={onStartGame}> Start Game</button>
<br></br>
<br></br>
<br></br>
            <button className="p-btn" onClick={onHighScores}> High Scores</button>
            </div>
          </div>   
 
      </div>
    );
  };
  
  export default StartScreen;