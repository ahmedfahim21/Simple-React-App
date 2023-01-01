import React from 'react';

const MovieCard= ({ movie })=> {
  return (
    <div className="movie">
                    <div>
                        <p>{movie.Year}</p>
                    </div>
                    <div>
                        <img src ={ movie.Poster!== 'N/A'? movie.Poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'} alt={movie.Title} />
                    </div>
                    <div>
                        <span>{movie.Type}</span>
                        <h3>{movie.Title}</h3>
                    </div>
    </div>
  );
}
export default MovieCard;

