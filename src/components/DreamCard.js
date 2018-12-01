import React, { Component } from 'react';
import './DreamCard.css';

class DreamCard extends Component {
    render() {

        return (
            <div className="dream-card"
                style={{
                    backgroundImage: `url(${this.props.imageURL})`,
                }}
            >
            </div>
        )
    }
}

export default DreamCard;