import React, { Component } from 'react';
import DreamCard from './DreamCard';
import './Gallery.css';

class Gallery extends Component {
    
    render() {
        // const areDreamsLoaded = this.props.dreams !== null;

        return (
            <section className="dream-gallery">
                {
                    this.props.dreams !== null && Object.keys(this.props.dreams).map((key, i) => {
                        const dataObj = this.props.dreams[key];
                        console.log(dataObj);
                        
                        console.log('dataObj.type');
                        console.log(dataObj.type)
                        console.log('this.props.filterByType')
                        console.log(this.props.filterByType)


                        if (dataObj.type === this.props.filterByType || this.props.filterByType === 'all') {
                            return <DreamCard
                                key={key}
                                dbKey={key}
                                imageURL={dataObj.url}
                            />
                        }

                        
                    })
                }
            </section>
        )
    }
}

export default Gallery;