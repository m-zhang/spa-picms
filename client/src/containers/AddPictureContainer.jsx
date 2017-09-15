import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Form } from '../components';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class AddPictureContainer extends Component {
    constructor (props) {
        super(props);
        // Initial state
        this.state = {};
        //this.state={newGame:{}};
        // Bind this (context) to the functions to be passed down to the children components
        this.submit = this.submit.bind(this);
        this.uploadPicture = this.uploadPicture.bind(this);

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    submit () {
        // We create the newGame object to be posted to the server

        const newPic = $.extend({},  this.state);

        fetch('http://localhost:8080/pictures', {
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            method: 'POST',
            body: JSON.stringify(newPic)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
                // We go back to the games list view
                hashHistory.push('/pictures');
            });
    }
    uploadPicture () {
        filepicker.pick (
            {
                mimetype: 'image/*', // Cannot upload other files but images
                container: 'modal',
                services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'URL', 'IMGUR', 'PICASA'],
                openTo: 'COMPUTER' // First choice to upload files from
            },
            function (Blob) {
                //console.log(JSON.stringify(Blob));
                $('#picture').attr('src', Blob.url);
            },
            function (FPError) {
                console.log(FPError.toString());
            }
        );
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = name === 'picture' ? target.src : target.value;
        this.setState({
            [name]: value
        });

    }


    render () {
        return <Form submit={this.submit} uploadPicture={this.uploadPicture}  handleInputChange={this.handleInputChange}/>
    }
}