import React, { useEffect, useState } from "react";


const UpdateAlbumModal = ({ isOpen, onClose, onUpdAlbum, albumDetail }) => {
    const [title, setTitle] = useState(albumDetail.title);
    const [body, setBody] = useState(albumDetail.body);
    const [userId, setUserId] = useState(albumDetail.userId);
    const id = albumDetail.id;

    useEffect(() => {
        setTitle(albumDetail.title);
        setBody(albumDetail.body);
        setUserId(albumDetail.userId);
    }, [albumDetail.title, albumDetail.body, albumDetail.userId]);

    const handleFormSubmit = () => {

        onUpdAlbum({title, body, userId, id});

        setTitle('');
        setBody('');
        setUserId('');

        onClose();
    }

    return (
        <div className={`modal-${isOpen ? 'open' : 'close'}`}>
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>Update Album</h2>
          <label>UserId:</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
          <button onClick={handleFormSubmit}>UPDATE</button>
        </div>
      </div>
    );
}

export default UpdateAlbumModal;