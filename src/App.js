import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
import Header from './components/Header';
import Gallery from './components/Gallery';
import UploadOpenButton from './components/UploadOpenButton';
import PopupUpload from './components/PopupUpload';
import Loader from 'react-loader-spinner';

// reference to the root of the database
const dbRef = firebase.database().ref();

const bodyEl = document.querySelector('body');

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile: null,
      filterByType: 'all',
      imgString: '',
      newDreamType: 'all',
      dreams: null,
      popupIsOpen: false,
      loadedDreams: false,
    }
  }

  componentDidMount() {
    // attach event listener to firebase
    dbRef.on('value', (snapshot) => {
      this.setState({
        dreams: snapshot.val(),
        loadedDreams: true,
      });
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
      type: this.state.newDreamType
    }
    dbRef.push(newImg);

    this.setState({
      imgString: '',
      popupIsOpen: false
    });
    bodyEl.style.overflow = 'scroll';
  }

  handlePopupOpen = () => {
    this.setState({
      popupIsOpen: true
    });
    bodyEl.style.overflow = 'hidden';
  }

  handlePopupClose = () => {
    this.setState({
      popupIsOpen: false
    });
    bodyEl.style.overflow = 'scroll';
  }

  handleNewDreamTypeChange = (e) => {
    console.log('handleNewdreamtypechange runs');
    console.log(e.target.value);

    this.setState({
      newDreamType: e.target.value
    });
  }

  handleFilterTypeChange = (filterType) => {
    this.setState({
      filterByType: filterType,
    });
  }

  render() {
    return (
      <div className="App" style={{overflow: 'hidden'}}>
        <Header 
          onFilterChange={this.handleFilterTypeChange}
        />

        <UploadOpenButton onPopupOpen={this.handlePopupOpen} />

        {this.state.popupIsOpen && <PopupUpload 
          onPopupClose={this.handlePopupClose}
          onFileInputChange={this.imgSelectedHandler}
          onUploadButtonClick={this.imgUploadHandler}
          onDreamTypeChange={this.handleNewDreamTypeChange}
          imgString={this.state.imgString}
        /> }

        { this.state.loadedDreams === false && 
          <div className="dream-loader-container">
            <Loader
              type="Puff"
              color="#075A3E"
              height="100"
              width="100"
            />
          </div> }

        { this.state.loadedDreams === true && <Gallery 
          dreams={this.state.dreams}
          filterByType={this.state.filterByType}
        /> }
      </div>
    );
  }
}

export default App;

