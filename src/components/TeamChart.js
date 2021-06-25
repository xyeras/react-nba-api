import instance from '../api/apiConfig';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const TeamChart = ({getTeam}) => {
  //state to hold the chart's data
    const [chartData, setChartData] = useState({});
    /**
     * Make api call to get the data of passed team
     * load the data to an array that holds each property's data
     * property's we need to populate the chart data are homeTeamScore,homeName,visitorTeamScore,visitorName
     */
     const chart = () => {
       // initialize an array to hold the each property of the desired team
        let homeTeamScore = []; 
        let visitorTeamScore = [];
        let visitorName = [];
        let homeName = [];
       
        
        //Make api call to grab all the games played for year 2018
        instance.get('/games')
        .then(res => {
           //from the data we grabbed check for the desired team 
           //and grab all the games the desired team had
           //and push it to our empty array 

            for( const dataObj of res.data.data) {
              if (getTeam === dataObj.home_team.name) {
                
              
                homeTeamScore.push(parseInt(dataObj.home_team_score))
                homeName.push(dataObj.home_team.name)
                visitorName.push(dataObj.visitor_team.name)
                visitorTeamScore.push(parseInt(dataObj.visitor_team_score))
                
              }
              else if (getTeam === dataObj.visitor_team.name){
                homeTeamScore.push(parseInt(dataObj.visitor_team_score))
                homeName.push(dataObj.visitor_team.name)
                visitorName.push(dataObj.home_team.name)
                visitorTeamScore.push(parseInt(dataObj.home_team_score))
               

              }
               
              }

              //set the chart's state with the properties we need 
            setChartData({
                labels : visitorName,
                datasets: [
                    {
                      label:homeName[0],
                      backgroundColor:  'rgb(255, 99, 132)',
                      data: homeTeamScore,
                    },
                    {
                      label:'Visitors Team',
                      backgroundColor: 'rgb(75, 192, 192)',
                      data: visitorTeamScore,
                    }
                  ]
                })
           })
        .catch(err => {
            console.log(err)
        })
      
      }
    
   
      
      //render the page with data we need when it reloads
      // along with it's dependency
    useEffect (() => {
        chart()
    },[getTeam])
    
    return (
        <div className ='row text-center mt-3'>
          {/* Title */}
          <h1> 2018 {getTeam} Game Stats</h1>
          {/* display the Chart */}
            <div className ='row  mt-3'>
              <Bar data={chartData} />
            </div>
        </div>

    )
}
export default TeamChart;