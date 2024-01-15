import React from "react";
import { useState } from "react";
  
const AddAlbumModal = ({ isOpen, onClose, addNewAlbum }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleFormSubmit = () => {
      // Make the API call to add the album
      addNewAlbum({ title, body });
  
      // Clear the form
      setTitle('');
      setBody('');
  
      // Close the modal
      onClose();
    };
  
    return (
      <div className={`modal-${isOpen ? 'open' : 'close'}`}>
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>Add Album</h2>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
          <button onClick={handleFormSubmit}>SUBMIT</button>
        </div>
      </div>
    );
};

export default AddAlbumModal;