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
              return (
            <div>
                <h2>afadfaffaf</h2>
            </div>
        )
    }
}
