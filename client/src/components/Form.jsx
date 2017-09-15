import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Form extends PureComponent {
    render () {
        return (
            <div className="row scrollable">
                <div className="col-md-offset-2 col-md-8">
                    <div className="text-left">
                        <Link to="/pictures" className="btn btn-info">Back</Link>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h2 className="panel-title text-center">
                                Add a picture!
                            </h2>
                        </div>
                        <div className="panel-body">
                            <form name="product-form" action="" noValidate>
                                <div className="form-group text-left">
                                    <label htmlFor="caption">Name</label>
                                    <input name="name" type="text" className="form-control" placeholder="Enter the title" onChange={this.props.handleInputChange} />
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="description">Description</label>
                                    <textarea name="description" type="text" className="form-control" placeholder="Enter the description" rows="5" onChange={this.props.handleInputChange} ></textarea>
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="price">Year</label>
                                    <input name="year" type="number" className="form-control" placeholder="Enter the year" onChange={ this.props.handleInputChange} />
                                </div>
                                <div className="form-group text-left">
                                    <label htmlFor="picture">Picture</label>
                                    <div className="text-center dropup">
                                        <button id="button-upload" type="button" className="btn btn-danger" onClick={ this.props.uploadPicture }>
                                            Upload <span className="caret" />
                                        </button>
                                    </div>
                                </div>
                                <div className="form-group text-center">
                                    <img id="picture" name="picture" className="img-responsive img-upload" onLoad={ this.props.handleInputChange} />
                                </div>

                                <button type="button" className="btn btn-submit btn-block" onClick={this.props.submit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}