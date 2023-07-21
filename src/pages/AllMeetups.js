import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

// useEffect is used to run our code under certain conditions


function AllMeetupsPage() {

    const [isLoading, setIsLoading] = useState(true);

    // we can used multiple pieces of state in a components at a time too
    // as sson as we get data we have to load it to screen
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    // useEffect has two arguments
    // 1st is an anoyonmous function (arrow function)
    // 2nd:- an array (array of dependency) => it is neede because the certain condition to run useEffect will be written in 2nd argument and in 2nd argument always pass external dependancy (intialize with const)
    // here in fetch there is no external dependancy but setIsLoading and setLoadedMeetups we can say as external dependancy
    // so as setIsLoading and setLoadedMeetups value will change the fetch will get rendered or loaded.
    // as setIsLoading and setLoadedMeetups will also same like the value won't change so we will not write
    useEffect(() => {
        setIsLoading(true);
        fetch(
            "https://react-getting-started-46dae-default-rtdb.firebaseio.com/meetups.json"
    
            // as we get data we are interested in response
            // since fetch returns a promise, we can ofcourse use a then method here
            // will get an response object as a argument automatically coz that's how the fetch function works
            // it returns a promise which resolves to the actual response at some point in time
        ).then((response) => {
    
            // we want to read body or read that data and this reading is done by "json method" 
            // give access to data, automattically convert it from json to simple js object
            // json will also return a promise as well so added return
            return response.json();
    
            // working of data in this then block
        }).then((data) => {
            const meetups = [];

            for(const key in data){
                const meetup = {
                    id: key,

                    // ... spread operator will spread key in data
                    ...data[key]
                };

                meetups.push(meetup);
            }
    
            // first e have state to loading state and once we have data we will stop loading
            setIsLoading(false);

            // as we have passed map as array in MeetupList so it would also rendered as array.
            setLoadedMeetups(meetups);
        });
    }, []);
    

    if(isLoading){
        return ( 
        <section>
            <p>Loading...</p>
        </section> 
        );  
    }

    return (
        <section>
            <h1>All Meetups</h1>

            {/* rendering list of data with react */}

            {/* converting list of data (DUMMY_DATA) into list of JSX elements */}
            {/* {[<li>Item1</li>, <li>Item2</li>]} */}


            {/* map() allow us to execute a function */}


            {/* meetup is the what we take the input and {meetup.title} will print the content what will be written in title in list form */}
            {/* <ul>
            {DUMMY_DATA.map((meetup) => {
                return <li key={meetup.id}>{meetup.title}</li>;
            })}
        </ul> */}
            {/* or */}
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetupsPage;