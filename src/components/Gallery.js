import React, { Component } from 'react';
import DreamCard from './DreamCard';

class Gallery extends Component {
    
    render() {

        console.log("DREAMS INSIDE GALLERY");
        console.log(this.props.dreams);

        const areDreamsLoaded = this.props.dreams !== null;


        return (
            <section className="dream-gallery">
                {
                    this.props.dreams !== null && Object.keys(this.props.dreams).map((key, i) => {
                        const dataObj = this.props.dreams[key];
                        console.log(dataObj);

                        return <DreamCard 
                            key={key}
                            imageURL={dataObj.url}
                        />
                    })
                }
            </section>
        )
    }
}

export default Gallery;