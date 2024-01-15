import React from "react";

const AddAlbumButton = ({ onAddAlbum }) => (
    <div className="addAlbumBtn">
        <button onClick={onAddAlbum}>Add Album</button>
    </div>
);

export default AddAlbumButton;