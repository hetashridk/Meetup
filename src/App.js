import { Route, Switch } from "react-router-dom";
import  AllMeetupsPage  from "./pages/AllMeetups";
import  NewMeetupPage  from "./pages/NewMeetup";
import  FavoritesPage  from "./pages/Favorites";
import Layout from "./components/layout/Layout";


//The job of route component is to define different paths in the URL we wanna listen to and which components should be loaded for these different paths

// Switch is used to wrap the route components as shown below and we tell react that there should be only one route should be active at a time 
function App() {
  return ( 
    <Layout>
       <Switch>
       {/* or we can write exact as exact={true} */}
       {/* exact will say react that to check whole thing that is '/NewMeetup-page' and then render if it is found and not check only the '/' and give result or render */}
       <Route path='/' exact>  
        <AllMeetupsPage />
       </Route>
       <Route path='/Favorites-page'> 
        <FavoritesPage />
       </Route>
       <Route path='/NewMeetup-page'>
        <NewMeetupPage />
       </Route>
       </Switch>
    </Layout>
  );
}

export default App;
