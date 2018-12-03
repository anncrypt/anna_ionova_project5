import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>dreamboard</h1>
                <div>
                    <button 
                        className="filter filter-all"
                        onClick={() => {
                            this.props.onFilterChange('all')
                        }}
                    >All</button>
                    <button 
                        className="filter filter-main"
                        onClick={() => {
                            this.props.onFilterChange('main')
                        }}
                    >Main</button>
                    <button
                        className="filter filter-activities"
                        onClick={() => {
                            this.props.onFilterChange('activities')
                        }}
                    >Activities</button>
                    <button
                        className="filter filter-skills"
                        onClick={() => {
                            this.props.onFilterChange('skills')
                        }}
                    >Skills</button>
                </div>
            </header>
        )
    }
}

export default Header;