import { Route, Switch } from 'react-router-dom';
import DashboardPage from '../pages/Dashboard';
import Navbar from '../components/Navbar';
import PlayerStatsPage from '../pages/PlayerStatsPage';

const AppRouter = () => {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={DashboardPage} />
            <Route path='/playerstats' exact component={PlayerStatsPage}/>
          </Switch>
        </div>
      </div>
    );
  };
  
  export default AppRouter;