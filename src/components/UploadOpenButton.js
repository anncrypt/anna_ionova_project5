import React, { Component } from 'react';
import './UploadOpenButton.css';
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/fa/plus'

class UploadOpenButton extends Component {
    render() {
        
        return (
            <div className="upload-open-container">
                <button onClick={this.props.onPopupOpen} className="upload-open-button">
                    <Icon
                        className="popup-open-icon"
                        size={20}
                        icon={plus}
                    />
                </button>
            </div>
        )
    }
}

export default UploadOpenButton;