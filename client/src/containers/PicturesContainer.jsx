import React, { Component } from 'react';
import { Modal, PicturesListManager } from '../components';

    export default class PicturesContainer extends Component {
    constructor (props) {
        super(props);
        // The initial state
        this.state = { pictures: [], selectedPicture: {}, searchBar: '' };
        // Bind the functions to this (context)
        this.toggleModal = this.toggleModal.bind(this);
        this.deletePicture = this.deletePicture.bind(this);
        this.setSearchBar = this.setSearchBar.bind(this);
    }

    // Once the component mounted it fetches the data from the server
    componentDidMount () {
        this.getPictures();
    }

    toggleModal (index) {
        this.setState({ selectedPicture: this.state.pictures[index] });
        // Since we included bootstrap we can show our modal through its syntax
        $('#picture-modal').modal();
    }

    getPictures () {
        fetch('http://localhost:8080/pictures', {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(response => response.json()) // The json response to object literal
            .then(data => this.setState({ pictures: data }));
    }

    deletePicture (id) {
        fetch(`http://localhost:8080/pictures/${id}`, {
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(response => {
                // The game is also removed from the state thanks to the filter function
                this.setState({ pictures: this.state.pictures.filter(picture => picture._id !== id) });
                console.log(response.message);
            });
    }

    setSearchBar (event) {
        // Super still filters super mario thanks to toLowerCase
        this.setState({ searchBar: event.target.value.toLowerCase() });
    }

    render () {
        const { pictures, selectedPicture, searchBar } = this.state;
        return (
            <div>
                <Modal picture={selectedPicture} />
                <PicturesListManager
                    pictures={pictures}
                    searchBar={searchBar}
                    setSearchBar={this.setSearchBar}
                    toggleModal={this.toggleModal}
                    deletePicture={this.deletePicture}
                />
            </div>
        );
    }
}