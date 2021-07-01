const PlayerMenu = ( {players, fetchPlayer1, fetchPlayer2} ) => { // Passing prop and functions from the PlayerStatsPage
    return (
        <form className="my-5">

            {/* DROPDOWN MENU FOR PLAYER 1 */}

            <select className="form-select" aria-label="Default select example" onChange={event => fetchPlayer1(event.target.value)}>
                <option value="0">Select Player 1</option>
                {players.map((player, index) => {
                    return (
                        <option key={index} value={player.id}>{player.first_name} {player.last_name}</option>
                    );
                })}
            </select>

            <select className="form-select" aria-label="Default select example" onChange={event => fetchPlayer2(event.target.value)}>
                <option value="0">Select Player 2</option>
                {players.map((player, index) => {
                    return (
                        <option key={index} value={player.id}>{player.first_name} {player.last_name}</option>
                    );
                })}
            </select>

        </form>
    ); 
}

export default PlayerMenu;