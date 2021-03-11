import React from 'react';
import AlbumList from './AlbumList';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = {
        albums: [
            {
                "id":1,
                "name": "Radio Ethiopia",
                "artist":"Patti Smith",
                "genre":"Punk Rock",
                "description":" ",
                "imageURL": "https://data.opus3a.com/product_photo/dd/dd7b2b5e89abcca3556c9c0939e79733/max/e53277406a5f5b4f6e04c50b7a4ae217.jpg"
            },
            {
                "id":2,
                "name":"Hesitation Marks",
                "artist": "Nine Inch Nails",
                "genre":"Industrial Rock",
                "description":" ",
                "imageURL":"https://upload.wikimedia.org/wikipedia/en/8/83/Nine_Inch_Nails_-_Hesitation_Marks.png"
            },
            {
                "id":3,
                "name":"Born To Die",
                "artist":"Lana Del Rey",
                "genre":"Pop",
                "description":" ",
                "imageURL":"https://images-na.ssl-images-amazon.com/images/I/51QRAWT6aSL._AC_.jpg"
            },
            {
                "id":4,
                "name":"White Pony",
                "artist":"Deftones",
                "genre":"Alternative Metal",
                "description":" ",
                "imageURL":"https://playtusu.com/wp-content/uploads/2020/06/white-pony-deftones-768x768.jpg"
            },
            {
                "id":5,
                "name":"AM",
                "artist":"Arctic Monkeys",
                "genre":"Indie Rock",
                "description":" ",
                "imageURL":"https://upload.wikimedia.org/wikipedia/tr/0/04/Arctic_Monkeys_-_AM.png"
            },
            {
                "id":5,
                "name":"AM",
                "artist":"Arctic Monkeys",
                "genre":"Indie Rock",
                "description":" ",
                "imageURL":"https://upload.wikimedia.org/wikipedia/tr/0/04/Arctic_Monkeys_-_AM.png"
            },
            {
                "id":5,
                "name":"AM",
                "artist":"Arctic Monkeys",
                "genre":"Indie Rock",
                "description":" ",
                "imageURL":"https://upload.wikimedia.org/wikipedia/tr/0/04/Arctic_Monkeys_-_AM.png"
            },
            {
                "id":5,
                "name":"AM",
                "artist":"Arctic Monkeys",
                "genre":"Indie Rock",
                "description":" ",
                "imageURL":"https://upload.wikimedia.org/wikipedia/tr/0/04/Arctic_Monkeys_-_AM.png"
            },
            {
                "id":5,
                "name":"AM",
                "artist":"Arctic Monkeys",
                "genre":"Indie Rock",
                "description":" ",
                "imageURL":"https://upload.wikimedia.org/wikipedia/tr/0/04/Arctic_Monkeys_-_AM.png"
            },
            {
                "id":5,
                "name":"AM",
                "artist":"Arctic Monkeys",
                "genre":"Indie Rock",
                "description":" ",
                "imageURL":"https://upload.wikimedia.org/wikipedia/tr/0/04/Arctic_Monkeys_-_AM.png"
            },
        ],
        searchQuery: ""
    }

    deleteAlbum = (album) => {         
        const newAlbumList = this.state.albums.filter(
            a => a.id !== album.id
        );
        this.setState(state => ({
            albums: newAlbumList
        }))
    }

    searchAlbum = (event) => {
        this.setState({ searchQuery: event.target.value })
    }


    render() {
    
        let filteredAlbums = Array.isArray(this.state.albums)
            ? this.state.albums.filter((album) => {
                return (
                    album.name
                        .toLowerCase()
                        .indexOf(this.state.searchQuery.toLowerCase()) !== -1
                );
            })
            : [];

        return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <SearchBar
                                searchAlbumProp={this.searchAlbum} />
                        </div>
                    </div>

                    <AlbumList //creating props, so we can use them in event handlers etc...
                        albums={filteredAlbums}
                        deleteAlbumProp={this.deleteAlbum} />
                </div>
            
        )
    }
}


export default App;