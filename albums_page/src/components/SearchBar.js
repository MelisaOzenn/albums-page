import React from 'react';

class SearchBar extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault(); //to prevent page refreshing when submit
    }

    render() {

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5">
                    <div className="col-12">
                        <input
                            onChange={this.props.searchAlbumProp}
                            type="text" className="form-control"
                            placeholder="Search an album"
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;