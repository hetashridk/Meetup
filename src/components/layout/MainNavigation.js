// the above importation will link the page without sending new request.
import { useContext } from "react";
import { Link } from "react-router-dom";

// use to access the css styling
import classes from "./MainNavigation.module.css"
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {

    const favoritesCtx = useContext(FavoritesContext);
    return ( 
    <header className={classes.header }>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>AllMeetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add New Meetups</Link>
                </li>
                <li>
                    <Link to='/favorites'>
                    My Favorite
                    <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}
export default MainNavigation;
