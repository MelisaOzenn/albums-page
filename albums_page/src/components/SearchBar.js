import React from 'react';

class SearchBar extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault(); //to prevent page refreshing when submit
    }

    render() {

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-3">
                    <div className="col-12">
                        <input
                            onChange={this.props.searchAlbumProp}
                            type="text" className="form-control"
                            placeholder="Albüm ara"
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;