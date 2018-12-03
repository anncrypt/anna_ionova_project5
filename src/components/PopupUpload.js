import React, { Component } from 'react';
import './PopupUpload.css';
import Icon from 'react-icons-kit';
import { timesCircleO } from 'react-icons-kit/fa/timesCircleO';

class PopupUpload extends Component {
  // onSelectChange

  render() {

    return (
      <div className="overlay">
        <div className="popup-body">
          <div className="popup-close-container">
            <button className="close-button" onClick={this.props.onPopupClose}>
              <Icon
                className="popup-close-icon"
                size={30}
                icon={timesCircleO} />
            </button>
          </div>

          <div className="popup-content">

            <label htmlFor="dream-image-upload">Choose an image to upload: </label>
            <input id="dream-image-upload" onChange={this.props.onFileInputChange} type="file" />

            <label htmlFor="dream-type">Select Dream Category:</label>
            <select id="dream-type" onChange={this.props.onDreamTypeChange}>
              <option value="all">All</option>
              <option value="main">Main</option>
              <option value="activities">Activities</option>
              <option value="skills">Skills</option>
            </select>
            <button
              disabled={this.props.imgString === ''}
              onClick={this.props.onUploadButtonClick}
            >Upload</button>
          </div>
        </div>
      </div>
    )
  }
}

export default PopupUpload;