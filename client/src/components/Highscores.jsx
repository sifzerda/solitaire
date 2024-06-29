const Highscores = () => {
    // Mock data for highscores
    const fakeHighscores = [
      { id: 1, name: 'Player 1', score: 100 },
      { id: 2, name: 'Player 2', score: 90 },
      { id: 3, name: 'Player 3', score: 80 },
      { id: 4, name: 'Player 4', score: 70 },
      { id: 5, name: 'Player 5', score: 60 },
      { id: 6, name: 'Player 6', score: 50 },
      { id: 7, name: 'Player 7', score: 40 },
      { id: 8, name: 'Player 8', score: 30 },
      { id: 9, name: 'Player 9', score: 20 },
      { id: 10, name: 'Player 10', score: 10 },
    ];
  
    return (
      <div className="highscores-container">
        <h2>Highscores</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {fakeHighscores.map((score, index) => (
              <tr key={score.id}>
                <td>{index + 1}</td>
                <td>{score.name}</td>
                <td>{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>

<div className="button-container-2">
        <button className="p-btn-2" onClick={() => window.location.reload()}>⏪ Back</button>
        </div>

      </div>
    );
  };
  
  export default Highscores;