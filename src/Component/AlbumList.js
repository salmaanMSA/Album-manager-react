import React from "react";


class AlbumList extends React.Component {
    render() {
        const { albumList, onUpdate, onDelete } = this.props;
        return (
            <div className="album-card">
                <div className="left">
                    <img alt="movie-poster" src="https://media.istockphoto.com/id/1475307058/vector/vinyl-record-with-album-cover-on-package-music-retro-vintage-concept-flat-stylevector.jpg?s=612x612&w=0&k=20&c=z10rfEzZ-heVXJw_y8n_Pkota7xn4hjjNZ9Tn2tMS4s=" />
                </div>
                <div className="right">
                    <div className="id">{albumList.title}</div>
                    { albumList.body ? 
                        <div className="title">{albumList.body}</div>
                        :
                        <div className="title">This Album has no body</div>
                    }
                    <div className="footer">
                        <div className="userId">USER-ID: {albumList.userId}</div>
                        <div className="footer-btn">
                            <button className="update-btn" onClick={(e) => onUpdate(albumList)}>UPDATE</button>
                            <button className="delete-btn" onClick={(e) => onDelete(albumList.id)}>DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlbumList;