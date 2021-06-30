import {useState, useEffect} from 'react';
import instance from '../api/apiConfig';
import TeamChart from '../components/TeamChart';
import TeamCards from '../components/TeamCard';

/**  Display all teams with their information
   * Able to search for teams and
   * render the team's score for the year 2018
   */
const DashboardPage = () => {
  // state to hold the the apps state 
  const [teams, setTeams] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  //api call to grab data from api and store it in the app's state
   const getTeams = async () => {
       try{
           let {data} = await instance.get('/teams')
           let items = data.data;
           setTeams(items);
          }
      catch (e){
              console.log(e);
          }
   }
 
   //render data we need when the page loads
   // along with it's dependency if there is one

   useEffect(() => {
    getTeams();
  }, [searchTerm]);
  

  // filter out  the searched team 
    const foundTeam = teams.filter(tm => {
     
      return (
          tm.name.toLowerCase().includes(searchTerm.toLowerCase())) 
          
  }
  )

 

  // if there is a searched team
  //pass the team's name to our component as props
  const findTeam = () => {
    if(searchTerm){
      console.log('foundteam', foundTeam)
      if(foundTeam[0]){
        let getTeam = foundTeam[0].name;
        return(
        // display the chart 
        //based on the passed property
       <TeamChart getTeam={getTeam} />
       ) 
      }
      else {
        return(
          <h3 className='text-danger'>
          Sorry the team you are looking for is not found!
        </h3>
         )
    }
  }
      
  }
   


  // handle the onchange event for the search bar
    const handleChange = (event) => {
       setSearchTerm(event.target.value);
       
      }

  return (
    
      <div id='home-page'>
         <div className='row text-center mt-3'>

           {/** Title */}
            <div className='col'>
                <h1>NBA Teams</h1>
            </div>
          </div>

        {/**Search filter */}
                <div className='row mt-5'>
                <div className='col'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      id='hero-search'
                      placeholder='Search for teams'
                      value={searchTerm}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              
    {/** team list */}
    <div className='row mt-3'>
    <div className='row '>
       {foundTeam.map((team,index) => {
            return (
                <div className='five-columns' key={index}> 
                    <TeamCards team={team}/>
                </div>
                )
        })}
      </div>
    </div>
    {/**Team chart*/}
    <div className='row'>
      {findTeam()}
     </div>
    </div>
      

  )

  
}

export default DashboardPage;
