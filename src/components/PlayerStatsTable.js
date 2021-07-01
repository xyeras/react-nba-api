const PlayerStatsTable = ( {player1Stats, player2Stats} ) => { // Passing props from PlayerStatsPage
    
    // Prints out the specific stats for player 1 and player 2 in a table
    
    return (
        <div className="my-5" id="score-comparison">

            <h3 className="text-center my-3">Player Overview</h3>

            {/* FIXME */}

            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Player</th>
                        <th scope="col">Assists</th>
                        <th scope="col">Rebounds</th>
                        <th scope="col">Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{(!player1Stats?.ast) ? 'N/A': player1Stats?.ast}</td>
                        <td>{(!player1Stats?.reb) ? 'N/A': player1Stats?.reb}</td>
                        <td>{(!player1Stats?.pts) ? 'N/A': player1Stats?.pts}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>{(!player2Stats?.ast) ? 'N/A': player2Stats?.ast}</td>
                        <td>{(!player2Stats?.reb) ? 'N/A': player2Stats?.reb}</td>
                        <td>{(!player2Stats?.pts) ? 'N/A': player2Stats?.pts}</td>                    </tr>
                </tbody>
            </table>

          </div>
    );
}

export default PlayerStatsTable;