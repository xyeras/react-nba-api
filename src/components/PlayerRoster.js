const PlayerRoster = ( {players} ) => { // Passing prop from PlayerStatsPage
    
    // Prints the general info about all players
    
    return (
        <div className="my-5" id="players">

            <h3 className="text-center my-3">Player Roster</h3>
        
            <table className="table table-hover">
                <thead>
                    <tr> 
                        {/* Labels written in first row of table */}
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Position</th>
                        <th scope="col">Team</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Go through each player in players state and print out info in each row after the first row */}
                    {players.map((player, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{player.first_name}</td>
                                <td>{player.last_name}</td>
                                <td>{(!player.position) ? 'N/A' : player.position}</td>
                                <td>{player.team.full_name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

      </div>
    );
}

export default PlayerRoster;