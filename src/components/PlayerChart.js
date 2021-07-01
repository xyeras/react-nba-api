import { useEffect } from 'react';
import Chart from 'chart.js/auto';

const PlayerChart = ( {player1Stats, player2Stats} ) => { // Passing props from PlayerStatsPage

// === CHART SETUP ===

  useEffect(() => {

    // Connect canvas tag to id "myChart"
    const ctx = document.getElementById('myChart');
    // Create and initialize chart
    const myChart = new Chart (ctx, {
      type: 'radar',
      data: {
        labels: [
          'Assists',
          'Rebounds',
          'Points'
        ],
        datasets: [{
          label: 'Player 1',
          data: [player1Stats?.ast, player1Stats?.reb, player1Stats?.pts],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'Player 2',
          data: [player2Stats?.ast, player2Stats?.reb, player2Stats?.pts],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      }
    });

    // Must destroy chart to avoid memory leaks
    return () => {
      myChart.destroy();
    }
    
  }, [player1Stats, player2Stats]); // Chart will change based on these dependencies in the array

    return (
        // This displays the radar chart
        <canvas className="my-5" id="myChart"></canvas>
    );
}

export default PlayerChart;