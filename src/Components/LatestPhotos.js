import React, { Component } from 'react'
import axios from 'axios'

export default class LatestPhotos extends Component {

    state = {
        photos : [],
        page : 1,
        loading : true
    }

    componentDidMount (){
        axios.get('https://api.unsplash.com/photos/?client_id=f13a3cd52d95b1a9c5484d76ad583276ad8de31fece56dd46177c066f6528752&per_page=16&page='+this.state.page).then(
            res => this.setState({
                    photos : res.data,
                    loading : false,
                    page: this.state.page +1
                    
            })  
        )          
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    loadNextPage = (e) => {

        axios.get('https://api.unsplash.com/photos/?client_id=f13a3cd52d95b1a9c5484d76ad583276ad8de31fece56dd46177c066f6528752&per_page=16&page='+this.state.page).then(
            res => this.setState({
                    photos : res.data,
                    loading : false,
                    page: this.state.page +1
            })  
        ) 
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })       
    }

    render() {
        console.log(this.state.photos);

        if(this.state.loading === true){
            return (
                <div className="col text-center" >Loading Photos....</div>
            )
        }
        
        return (
            <React.Fragment>
              {
                this.state.photos.map ((photo) =>(
                    <div key ={photo.id}  className="col-lg-3">
                    <div className="single-photo-item" >
                        <a className="d-block" href="/">
                            <div className ="photo-wrapper" >
                                 <img src={photo.urls.small} alt={photo.id} />
                            </div>
                            <h5>  {photo.description}</h5>
                            <p className="cat-name">by - {photo.user.first_name} {photo.user.last_name}</p>
                        </a>
                    </div>
                    </div>
                ) )
              }

              <div className="col-lg-12">
                  <div className="load-more-btn">
                      <button onClick={this.loadNextPage} >Load Page {this.state.page } </button>
                  </div>
              </div>

            </React.Fragment>
          )
        
    }
}
