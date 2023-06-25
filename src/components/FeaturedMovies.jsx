import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";

function FeaturedMovies({searchValue })
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
            if (searchValue)
            {
                setLoading(true);
                const response = await axios.get(`https://www.omdbapi.com/?apikey=45dff8d5&s=${searchValue}`)
                setMovies(response.data.Search || []);
            } else {
                const response = await axios.get(`https://www.omdbapi.com/?apikey=45dff8d5&s=${chooseRandomWord()}`)
                setMovies(response.data.Search || []);
            }  
        }

        getMovies();
        
        setTimeout(() => {
            setLoading(false);
        }, 100);
        
        
    }, [searchValue])

    function filterMovies(filter)
    {
        if (filter === "NEW_TO_OLD")
        {
            setMovies(movies.slice().sort((a,b) => (b.Year) - (a.Year)))
        } else if (filter === "OLD_TO_NEW") {
            setMovies(movies.slice().sort((a,b) => (a.Year) - (b.Year)))
        }
    }

    return (
        <section id="movies">
            <div className="row1">
                <div className="container2">
                    
                    <div className="top_filter">
                        <h3>Featured Movies</h3>

                        <select id="filter" defaultValue={"DEFAULT"} onChange={(event) => filterMovies(event.target.value)}>
                            <option value="DEFAULT" disabled>Sort</option>
                            <option value="NEW_TO_OLD"> New to Old</option>
                            <option value="OLD_TO_NEW"> Old to New</option>
                        </select>
                    </div>
                    
                    <div className="movie_wrapper">
                        {
                            loading ? (
                                new Array(8).fill(0).map((_, index) =>{
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
                                movies.slice(0, 8).map((movie, index) => {
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
        </section>
    );
}

export default FeaturedMovies;