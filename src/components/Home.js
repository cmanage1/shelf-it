import React from 'react';
import axios from 'axios';
import '.././App.css';

function Home() {

    const [book, setBook] = React.useState("");
    const [result, setResult] = React.useState([]);
    const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_KEY;

    //Called when text is changed in the search bar using html "onChange"
    function handleChange(e) {
        const book = e.target.value; //assign var book to event(user's input)
        setBook(book);
    }


    //Called when the form is submitted by the user i.e. user hits "SUBMIT"
    function handleFormSubmit(e) {

        e.preventDefault(); //prevent page from reloading

        //I used axios because fetch() did not work 
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=20")
            .then(data => { //status 200 expected with array of items
                if (data !== undefined) {
                    setResult(data.data.items) //set data  into result array
                }
            })
            .catch(error => console.log(error))  //error handling
    }


    //Here I'm rendering the home page
    //map method is used in order to access the array of results

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit} >
                <div className="search">
                    <input
                        className=" search-bar"
                        type="text" onChange={handleChange}
                        id="search"
                        placeholder="Search any book">
                    </input>
                    <br></br>
                    <button
                        type="submit"
                        className="search-btn"
                        value="Submit"
                        id="search-btn">
                        Search
          </button>
                </div>
            </form>

            {result.map(book => ( //iterate 
                <div className="item-card"
                    
                    key={book.volumeInfo.previewLink.toString()}>
                    <img src={
                        //ternary operator
                        //scans condition book.volumeInfo.imageLinks=== undefined 
                        //? singals to proceed with ""(nothing) if condition is true
                        book.volumeInfo.imageLinks === undefined ? "No preview available"

                            // ":" is another way to say else-if
                            : book.volumeInfo.imageLinks.thumbnail
                    } 
                    alt={book.title} />

                    <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer" className="preview-btn">
                        <button> Preview </button>
                    </a>

                    <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer" className="add-btn">
                        <button> Add to library</button>
                    </a>
                </div>
                
            ))};
        </div>
    );
};

export default Home;
