import React, { Component } from 'react'
import axios from 'axios'

export default class LatestPhotos extends Component {

    state = {
        photos : [],
        page : 1,
        loading : true,
        searching : false,
        search_query : ''
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
    searchQuery = (e) => {
            this.setState({
                search_query : e.target.value,
            })
          
    }
    searchTrigger = (e) => {

        axios.get('https://api.unsplash.com/search/photos/?client_id=f13a3cd52d95b1a9c5484d76ad583276ad8de31fece56dd46177c066f6528752&query='+this.state.search_query+'&per_page=16&page='+this.state.page).then(
            res => this.setState({
                    photos : res.data.results,
                    loading : false,
                    searching : true,
                    page: this.state.page +1
            })  
        ) 
        e.preventDefault()
}

    render() {
        if(this.state.loading === true){
            return (
                <div className="row text-center" ><div className="col">Loading Photos....</div> </div>
            )
        }
        
        return (
            <React.Fragment>
                <div className="row top-heading">
                    <div className="col my-auto"><h2>Latest Photos </h2></div>
                    <div className="col col-auto my-auto">
                      <form onSubmit={this.searchTrigger} action="">
                                <input type="text" value={this.state.search_query} onChange={this.searchQuery} placeholder="Search Keyword" />
                                <input type="submit" value="search" />
                      </form>
                    </div>
                  </div>                 
                  <div className="row">
                  
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
            </div>
              <div className="row">
              <div className="col-lg-12 text-center">
                  <div className="load-more-btn">
                      <button className="btn btn-success" onClick={this.loadNextPage} >Load Page {this.state.page } </button>
                  </div>
              </div>
              </div>
            </React.Fragment>
          )
        
    }
}
