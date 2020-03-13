import React from 'react';

const Artist = ({ artist }) =>{
    if(!artist) return null;

    const {name, followers, images, genres} = artist;

    return(
        <div>
            <h3>{name}</h3>
            <p>{followers.total} followers</p>
            <p>{genres.join(',')}</p>
            <img 
                src={images[0] && images[0].url} 
                alt='ArtistImage'
                style={{
                    width:200,
                    height:200,
                    borderRadius : 100,
                    objectFit:"cover"
                }}
            />
        </div>
    )
}

export default Artist;