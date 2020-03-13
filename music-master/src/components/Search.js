import React, { Component } from 'react';

class Search extends Component{

    state={ artistQuery :'' ,artist : null, tracks: []};

    updateArtistQuery = event => {
        console.log('event.target.value',event.target.value);
        this.setState({artistQuery : event.target.value});
    }
    
    handleKeyPress=event=>{
        if(event.key === 'Enter'){
            this.searchArtist();
        }
    }

    searchArtist=()=>{
        this.props.searchArtist(this.state.artistQuery);
    }

    render(){
        return(
            <div>
                <h2>Music Master</h2>
                <input 
                onChange = {this.updateArtistQuery}
                onKeyPress = {this.handleKeyPress}
                placeholder="Enter the Artist Name"/>
                <button onClick={this.searchArtist}>Search</button>
            </div>
        )
    }
}

export default Search;