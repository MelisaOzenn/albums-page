import React from 'react';

const AlbumList = (props) => {

    function handleClick(event){
        console.log("you have clicked the button");
        console.log(event.pageX);
    }

    return (
        <div className="row">

            {props.albums.map((album) => (
                <div className="col-lg-3" key={album.id} >
                    <div className="card mb-4 shadow-sm">
                        <img src={album.imageURL} className="card-img-top" alt="Sample Album" />
                        <div className="card-body">
                            <h4 className="card-title">{album.name}</h4>
                            <h5 className="card-text">{album.artist}</h5>
                            <p className="card-text">{album.description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" onClick={(event) => props.deleteAlbumProp(album)} className="btn btn-sm btn-outline-warning">Delete</button>
                                <h4><span className="badge badge-info badge-warning">{album.genre}</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default AlbumList;