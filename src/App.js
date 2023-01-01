import {useEffect, useState} from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

//5be58ebd

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=5be58ebd'
const App =() =>{
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`);
        const data = await res.json();
        setMovies(data.Search);
    }

    useEffect(()=> {
        searchMovies('Spider')
    }, []);
    return(
        <div className="app">
            <h1>FMDB Maybe?</h1>
            <div className="search">
                <input
                placeholder="Search for Movies"
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon}
                alt ="search"
                onClick={()=> searchMovies(searchTerm)} />
            </div>
            {
                movies?.length >0
                ?(<div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
                </div>)
                :(
                    <div className="empty">
                        <h2>No movies found</h2>
                        </div>
                )


            } 
        </div>
    );
}

export default App