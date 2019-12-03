import React, { Component } from 'react'
import axios from 'axios'

export default class Photo extends Component {

    state = {
        photo: [],
        loading : true,

    }

    componentDidMount (){

        let search = window.location.search
        let params = new URLSearchParams(search)
        let photo_id = params.get('id')
        axios.get('https://api.unsplash.com/photos/' + photo_id + '/?client_id=f13a3cd52d95b1a9c5484d76ad583276ad8de31fece56dd46177c066f6528752').then(
            res => this.setState({
                    photo: res.data,
                    loading : false,
                    
            })  
        )          
    }

    render() {
        console.log(this.state.photo);
        let photo = this.state.photo
              return (
            <div>
                    {photo.description ? <h2>{photo.description} </h2> : ''}
                <div className="single-photo-wrapper">
                    <div className="single-photo-info">


                        <ul>
                            <li><label htmlFor="Uploaded_by ">Uploaded by - </label> {photo.user &&photo.user.first_name } {photo.user &&photo.user.last_name }</li>

                            {photo.updated_at ?<li><label htmlFor="Uploaded_date ">Uploaded date -  </label>  {photo.updated_at} </li>:''}
                            

                            <li><label htmlFor="Camera_model ">Camera model - </label> { photo.exif && photo.exif.model } </li>
                        </ul>
                        <a href={photo.links && photo.links.download} download>Download</a>
                    </div>
                    <img src={photo.urls && photo.urls.full} alt=""/>
                </div>
            </div>
        )
    }
}
