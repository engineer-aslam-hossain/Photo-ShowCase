import React, { Component } from 'react'

export default class LatestPhotos extends Component {
    render() {
        return (
            <div className="col-lg-3">
            <div class="single-photo-item" >
                <a href="d-block">
                    <img src="http://placehold.it/600x350" alt=""/>
                    <h5>Photo Name</h5>
                    <p className="cat-name">Category Name</p>
                </a>
            </div>
            </div>
        )
    }
}
