import React from "react";


class Navbar extends React.Component {

    render() {
        return (
            <div className="nav">
                <div className="nav-title">
                    <h3>AlbumManager</h3>
                </div>
                <div className="search-container">
                    <input />
                    <button className="search-btn">Search</button>
                </div>
            </div>
        )
    }
}

export default Navbar;