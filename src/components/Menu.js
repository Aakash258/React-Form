import {Route, Switch} from 'react-router-dom';
import Data from '../Data';
import App from '../App' 
function Menu(){
  return(
    <main>
    <Switch>
    <Route exact path="/" component={App}/>
      <Route exact path="/data" component={Data}/>
      
      </Switch>
    </main>
  )
}
export default Menu;