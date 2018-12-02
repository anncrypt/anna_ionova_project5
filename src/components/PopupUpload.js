import React, { Component } from 'react';
import './PopupUpload.css';

class PopupUpload extends Component {
  render() {

    return (
      <div className="overlay">
        <div className="popup-body">
          <div className="popup-close-container">
            <button className="close-button" onClick={this.props.onPopupClose}>X</button>
          </div>
        </div>
      </div>
    )
  }
}

export default PopupUpload;