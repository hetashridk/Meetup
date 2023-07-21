import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {

    // As I am only interested in user Input once for submission we use feature of react that ts referrence (refs)
    // it allows us to set up a reference to DOM elements and we xan get direct access to DOM elements.
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {

        // step 1:- to prevent default submit
        // preventDefault() is a inbuilt function which prevent the default or stop the things which are going to do by default
        // preventDefault() is a vanilla javascript function and it is supported by react too.
        event.preventDefault();

        // we can get the enteredTitle so the concrete value the user entered by using that title input ref
        // and then they're actually .current all those ref objects created with the use ref, were as such that they have "current property" which then holds the actual connected value
        // and therefore its not current which then holds this input element object, the javascript representation of that input element
        // and all those input element have a value property
        // that's just how javascript works
        // javascript object representing an input element has a value property
        // and that value property holds the currently entered value of that input

        // so that's how we can extract what user has entered
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        // "for input value or for reading values "Ref is great tools""
        // we can have more than one refs per component

        // we can also set value
        // titleInputRef.current.value = "Some new value";
        
        // create an object to stores the entered values as values
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        props.onAddMeetup(meetupData);
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>

                {/* htmlFor is used to sync with the id in label */}
                    <label htmlFor="title
                    ">Meetup Title</label>

                    {/*  ref={titleInputRef} :- will establish a connection and give us a access of this input elemnet through Ref oblect (titleInputRef = useRef())*/}
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image
                    ">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address
                    ">Address</label>
                    <input type="text" required id="address" ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description
                    ">Description</label>
                    <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;