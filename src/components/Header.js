import React, { Component } from 'react';
// import UploadButton from './components/UploadButton';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Dreamboard</h1>
                <div>
                    <button className="filter filter-main">Main</button>
                    <button className="filter filter-activities">Activities</button>
                    <button className="filter filter-skills">Skills</button>
                </div>
                {/* <UploadButton /> */}
            </header>
        )
    }
}

export default Header;