import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Picture from './Picture';

export default class PicturesListManager extends PureComponent {
    render () {
        const { pictures, searchBar, setSearchBar, toggleModal, deletePicture } = this.props;
        return (

            <div className="container scrollable">
                <div className="row text-left">
                    <Link to="/pictures/add" className="btn btn-info">Add a new Picture!</Link>
                </div>
                <div className="row">
                    <input
                        type="search" placeholder="Search by Name" className="form-control search-bar" onKeyUp={setSearchBar} />
                </div>
                <div className="row li-wrap">
                    {
                        // A Game is only shown if its name contains the string from the searchBar
                        pictures
                            .filter(picture => picture.name.toLowerCase().includes(searchBar))
                            .map((picture, i) => {
                                return (
                                    <Picture  {...picture}
                                           key={picture._id}
                                           i={i}
                                           toggleModal={toggleModal}
                                           deletePicture={deletePicture}
                                    />
                                );
                            })
                    }
                </div>
                <hr />
            </div>

        );
    }
}