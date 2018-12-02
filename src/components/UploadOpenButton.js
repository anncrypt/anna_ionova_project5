import React, { Component } from 'react';
import './UploadOpenButton.css';

class UploadOpenButton extends Component {
    render() {
        
        return (
            <div className="upload-open-container">
                <button onClick={this.props.onPopupOpen} className="upload-open-button">+</button>
            </div>
        )
    }
}

export default UploadOpenButton;