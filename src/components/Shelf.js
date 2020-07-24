/*  Author: Chethin Manage  */

import React, { Component } from 'react';
import { withAuthorization } from './Session';
import '.././App.css';


class Shelf extends Component {

    constructor(props){
        super(props);
        this.state= { 
            item: '',
            itemList: [],
        }
        this.getFromDatabase = this.getFromDatabase.bind(this);
    }

    getFromDatabase () {
        var currentUser = this.props.firebase.auth.currentUser;
        const docRef = this.props.firebase.db.collection('users').doc(currentUser.uid)

        docRef.get().then( (doc) => {
            if (doc.exists) {
                this.setState({ itemList: doc.data().items })
            }
            else {
                console.log("DOC NOT FOUND")
            }
        })


    }
    componentDidMount() {
        this.getFromDatabase();
    }


    removeFromShelf (item) {
        var currentUser = this.props.firebase.auth.currentUser;
        
        const docRef = this.props.firebase.db.collection('users').doc(currentUser.uid)

        docRef.get().then( function (doc) {
            if (doc.exists) {
                var existingArray = [];
                existingArray = doc.data().items;
                console.log(item.id);
                console.log("Array at first\n" + existingArray)

                const newArr = existingArray.filter(function(element) {
                    return element.id !== item.id
                })
                console.log("Array after filter\n" + newArr)

                if (newArr.length === 0){
                    docRef.update({
                        items: [],
                    }).then(function () {
                        alert("Success!")
                        window.location.reload(false);
                    }).catch(function (error) {
                        console.error(" Error: " + error);
                    })
                    
                }else{
                    docRef.update({
                        items: newArr  
                    }).then( function() {
                        alert("Success!")
                        window.location.reload(false);
                    }).catch( function(error) {
                        console.error(" Error: " + error);
                    })
                }

                console.log("Whats in the db\n" + doc.data().items )

                
            }
            else {
                console.log("DOC NOT FOUND")
            }
        })

    }

    render(){
        const{
            itemList,
        } = this.state;

        return (
            <div>
                {itemList.map(book => ( //iterate 
                    <div className="item-card"
                        key={book.volumeInfo.previewLink.toString() }
                        >
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

                            onClick={this.removeFromShelf.bind(this, book)} 
                            className="add-btn">
                            Remove from library
                        </button>

                    </div>

                ))};
            </div>
        );
    }
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Shelf);