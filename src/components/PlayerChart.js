import { useEffect } from 'react';
import Chart from 'chart.js/auto';

const PlayerChart = ( {player1Stats, player2Stats} ) => { // Passing props from PlayerStatsPage

// === CHART SETUP ===

  useEffect(() => {

    // Connect canvas tag to id "myChart"
    // FIXME
    // Create and initialize chart
    // FIXME

    // Must destroy chart to avoid memory leaks
    // FIXME
    
  }, [player1Stats, player2Stats]); // Chart will change based on these dependencies in the array

    return (
        // This displays the radar chart
        <canvas className="my-5" id="myChart"></canvas>
    );
}

export default PlayerChart;