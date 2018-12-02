import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
import Header from './components/Header';
import Gallery from './components/Gallery';
import UploadOpenButton from './components/UploadOpenButton';
import PopupUpload from './components/PopupUpload';


// reference to the root of the database
const dbRef = firebase.database().ref();
console.log(dbRef);

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
      imgString: '',
      dreams: null,
      popupIsOpen: false,
    }
  }

  componentDidMount() {
    // attach event listener to firebase
    dbRef.on('value', (snapshot) => {
      this.setState({
        dreams: snapshot.val()
      })
    });
  }

  imgSelectedHandler = (e) => {
    // create a variable that holds the file
    const imgFile = e.target.files[0];

    // create a reader to transform file into data URL
    let imgReader = new FileReader();
    // read file
    imgReader.readAsDataURL(imgFile);
    // save result to state, when done reading
    imgReader.onload = (event) => {
      this.setState({
        imgString: imgReader.result
      });

     
    }

    this.setState({
      selectedFile: e.target.files[0]
    });
    
  }

  imgUploadHandler = () => {
    const newImg = {
      url: this.state.imgString,
    }
    dbRef.push(newImg);
    this.setState({
      imgString: '',
    })
  }

  handlePopupOpen = () => {
    this.setState({
      popupIsOpen: true
    })
  }

  handlePopupClose = () => {
    this.setState({
      popupIsOpen: false
    })
  }

  render() {
    return (
      <div className="App">
        <Header />

        <UploadOpenButton onPopupOpen={this.handlePopupOpen} />
        {this.state.popupIsOpen && <PopupUpload onPopupClose={this.handlePopupClose} /> } 
      
        <input onChange={this.imgSelectedHandler} type="file" />
        <button 
          disabled={this.state.imgString === ''}
          onClick={this.imgUploadHandler}
        >Upload</button>

        <Gallery dreams={this.state.dreams} />
      </div>
    );
  }
}

export default App;

// when image is uploaded 
// save it as a string to state
// then save it to firebase

// on app load get all images to firebase

