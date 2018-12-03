import React, { Component } from 'react';
import './DreamCard.css';
import firebase from '../firebase';
import Icon from 'react-icons-kit';
import { timesCircleO } from 'react-icons-kit/fa/timesCircleO';


class DreamCard extends Component {

    deleteDream = (e) => {
        // delete the dream from firebase
        // const firebaseKey = e.target.id;
        const dreamRef = firebase.database().ref(`/${this.props.dbKey}`);
        dreamRef.remove();
    };

    render() {

        return (
            <div className="dream-card"
                style={{
                    backgroundImage: `url(${this.props.imageURL})`,
                }}
            >
                <div className="delete-dream-container">
                    <button className="delete-dream" onClick={this.deleteDream}>
                        <Icon 
                            className="delete-dream-icon"
                            size={30}
                            icon={timesCircleO}/>
                    </button>
                </div>
            </div>
        )
    }
}

export default DreamCard;