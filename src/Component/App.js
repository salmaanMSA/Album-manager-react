import React from 'react';
import Navbar from './Navbar';
import AlbumList from './AlbumList';
import AddAlbumButton from './AddAlbumButton';
import AddAlbumModal from './AddAlbumModal';
import UpdateAlbumModal from './UpdateAlbumModal';
import { useState, useEffect } from 'react';

function App() {
  const [albums, setAlbums] = useState([]);
  const [isAddAlbumModalOpen, setAddAlbumModalOpen] = useState(false);
  const [isUpdateAlbumModalOpen, setUpdateAlbumModalOpen] = useState(false);
  const [albumUpdateDetails, setAlbumUpdateDetails] = useState([]);

  // fetch all album and set in state
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  // Add New Album from user input from modal
  const addAlbum = async (newAlbum) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: newAlbum.title,
          body: newAlbum.body,
          userId: 5,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      const data = await response.json();

      // Update state with the new album
      setAlbums([data, ...albums]);
    }
    catch (error) {
      console.error('Error fetching albums:', error);
    }
  }

  // Update the Album Details
  const onUpdateAlbum = async (updatedAlbum) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${updatedAlbum.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: updatedAlbum.id,
          title: updatedAlbum.title,
          body: updatedAlbum.body,
          userId: updatedAlbum.userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      });
      const data = await response.json();

      // Update state with the new album
      setAlbums((prevAlbum) => prevAlbum.map((album) => (album.id === data.id ? data : album)));
    }
    catch (error) {
      console.error('Error fetching albums:', error);
    }
  }

  // Delete an Album
  const onDeleteAlbum = async (albumId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${albumId}`, {
        method: 'DELETE',
      });
      if (response.ok){
        const updatedAlbum = albums.filter((album) => album.id !== albumId);
        setAlbums(updatedAlbum);
      }
    }
    catch (error) {
      console.error('Error fetching albums:', error);
    }
  }

  const handleAddAlbumClick = () => {
    setAddAlbumModalOpen(true);
  }

  const handleUpdateAlbumClick = (updateDetails) => {
    setUpdateAlbumModalOpen(true);
    setAlbumUpdateDetails(updateDetails);
  }

  const handleUpdateAlbumModalClose = () => {
    setUpdateAlbumModalOpen(false);
  }

  const handleAddAlbumModalClose = () => {
    setAddAlbumModalOpen(false);
  }
  
  return (
    <div className="App">
      <Navbar />
      <AddAlbumButton onAddAlbum={handleAddAlbumClick}/>
      <AddAlbumModal
        isOpen = {isAddAlbumModalOpen}
        onClose = {handleAddAlbumModalClose}
        addNewAlbum = {addAlbum}
      />
      <UpdateAlbumModal
        isOpen = {isUpdateAlbumModalOpen}
        onClose = {handleUpdateAlbumModalClose}
        onUpdAlbum = {onUpdateAlbum}
        albumDetail = {albumUpdateDetails}
      />
      <div className='main'>
        {albums.map((album, index) => (
          <AlbumList 
            albumList={album} 
            key={`album-${index}`}
            onUpdate = {handleUpdateAlbumClick}
            onDelete = {onDeleteAlbum}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
