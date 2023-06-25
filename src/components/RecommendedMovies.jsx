import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";


function RecommendedMovies({id})
{
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    function chooseRandomWord(){
        let num = Math.floor(Math.random() * 10);
        let options = ["world", "league", "king", "scream", "the", "apocalips", "halloween", "fast", "saw", "undisputed"];
        return options[num];
    }  

    useEffect(() => {
        async function getMovies()
        {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=45dff8d5&s=${chooseRandomWord()}`)
            setMovies(response.data.Search || []);
        }
        getMovies();
        
        setTimeout(() => {
            setLoading(false);
        }, 100);
        
        
    }, [loading])


    return (
        <div className="row1">
            <div className="recommended_cont">
                <h3>Recommended</h3>

                <div className="recommended_movies">
                    {
                        loading ? (
                            new Array(4).fill(0).map((_, index) => {
                                return (
                                    <div className="movie_skeliton" key={index}>
                                        <figure>
                                        </figure>

                                        <div className="title_skeliton"></div>
                                        <div className="year_skeliton"></div> 
                                    </div>
                                );
                            })
                            
                        ) : (
                            movies.filter((movie) => {
                                return movie.imdbID !== id
                            }).slice(0, 4).map((movie, index) => {
                                return (
                                    <div className="movie" key={index}>
                                        <Link to={`/movie/${movie.imdbID}`} className="link_fix">
                                        
                                        <figure>
                                            <img src={movie.Poster} alt="movie_poster" />
                                        </figure>
    
                                        <h4 className="title">{movie.Title}</h4>
                                        <h4 className="year">{movie.Year}</h4>
                                        </Link> 
                                    </div> 
                                );
                            })
                        )
                    }
                </div>
            </div>
        </div>
    );
}


export default RecommendedMovies;