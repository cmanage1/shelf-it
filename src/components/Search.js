/*  Author: Chethin Manage  */
import React,  {Component} from 'react';
import axios from 'axios';
import '.././App.css';

import { withAuthorization } from './Session';

const INITIAL_STATE = {
    book : '',
    result : [],
    docRef: '',
    selectedItem: '',
    error: '',
}

class Search extends Component {

    constructor(props){
        super(props);
        this.state = { ...INITIAL_STATE };
        this.sendToShelf = this.sendToShelf.bind(this);
    }

    //Called when text is changed in the search bar using html "onChange"
    handleChange = (e) => {
        this.setState({ book: e.target.value });
    }

    //Called when the form is submitted by the user i.e. user hits "SUBMIT"
    handleFormSubmit = (e) => {
        const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_KEY;

        e.preventDefault(); //prevent page from reloading

        //I used axios because fetch() did not work 
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.book + "&key=" + apiKey + "&maxResults=20")
            .then(data => { //status 200 expected with array of items
                if (data !== undefined) {
                    this.setState({ result: data.data.items }) //set data  into result array
                }
            })
            .catch(error => console.log(error))  //error handling
    }


    sendToShelf (item) {
        //event.preventDefault();
        
        if (item !== '' ) {
            var currentUser = this.props.firebase.auth.currentUser;

            if (currentUser != null){
                const docRef = this.props.firebase.db.collection('users').doc(currentUser.uid)
                docRef.get().then( function (doc){
                
                    if (doc.exists) {
                        var existingArray = []
                        existingArray = doc.data().items ;
                        const newArr = existingArray.concat(item);

                        docRef.update({
                            items: newArr,
                        })
                        
                        alert("Success!");
                    }
                    else{
                        console.log("DOC NOT FOUND")
                    }
                })
            }else{
                console.log( "No user is logged in")
            }
            
        //     // this.docRef.update({
        //     //     items: this.props.firebase.db.FieldValue.arrayUnion(...this.state.selectedItem)
        //     // })
         };
    }

    //Here I'm rendering the home page
    //map method is used in order to access the array of results
    render() {
        const{
            result,
        } = this.state;
    
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit} >
                    <div className="search">
                        <input
                            className=" search-bar"
                            type="text" onChange={this.handleChange}
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

                        <a href={book.volumeInfo.previewLink} 
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="preview-btn">
                            <button> Preview </button>
                        </a>

                        <button 
                            onClick={this.sendToShelf.bind(this, book) } 
                            className="add-btn">
                            Add to library
                        </button>

                    </div>
                    
                ))};
            </div>
        )
    }
};

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Search);