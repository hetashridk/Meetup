import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

    // it is history object that allows us to manipulate the browser history or to navigate away (that is changing of page)
    const history = useHistory();

    // we can write this in NewMeetupForm too but then in NewMeetupForm code could be landy so we have written here
    function addMeetupHandler(meetupData) {
        
        // javascript function to send http request
        // "/meetups will add data collections to database"
        // we need to add .json for firebase as firebase is not react specific
        // fetch has two parameter :- 1) url and 2) method (by default method is get if we don't pass any method)
        fetch(
            "https://react-getting-started-46dae-default-rtdb.firebaseio.com/meetups.json",
            {

                // data is tored by POST
                //  so we have configure fetch to POST
                method: "POST",

                // converts meetupData to stringify
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
            ).then(() => {

                // used to navigate away
                //  "/" indicates navigate to starting page that is All meetup page
                history.replace("/");
            });
    }
    return (
        <section>
            <h1>Add New Meetups</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetupPage;