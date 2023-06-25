import { useParams, Link } from "react-router-dom";
import SimpleNav from "../components/SimpleNav.jsx";
import React, {useState, useEffect} from "react";
import RecommendedMovies from "../components/RecommendedMovies.jsx";
import axios from "axios";

function MovieInfo() {

    const {id} = useParams();

    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getMovieInfo()
        {
            const {data} = await axios.get(`https://www.omdbapi.com/?apikey=45dff8d5&i=${id}&plot=full`)
            setInfo(data);
        }

        getMovieInfo();
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, [id])

    return (
        <section id="movie_info">
            <SimpleNav />
            <div className="row1">
                <div className="container2">

                    {
                        loading ? (
                            <div className="movie_cont_skeliton">

                                <div className="movie_pic_skeliton">
                                    <button ></button>
                                    <figure>
                                    </figure>
                                </div>

                                <div className="divider"></div>

                                <div className="movie_info_skeliton">
                                    <div className="title_skeliton"></div> 

                                    <div className="time_genre">
                                        <div className="duration_skeliton"></div>
                                        <div className="genre_skeliton"></div>
                                    </div>

                                    <div className="released_skeliton"></div>

                                    <div className="sum_skeliton">
                                        <div className="summary_skeliton"></div>
                                        <div className="plot_skeliton"></div>
                                    </div>
                                    
                                    <div className="rating_skeliton"></div>

                                    <div className="watch_movie_skeliton">
                                        <button></button>
                                        <button></button>
                                    </div>
                                    
                                </div>

                            </div>
                        ) : (
                            <div className="movie_cont">

                                <div className="movie_pic">
                                    <Link to="/"><button ><a href="index.html">Go Back</a></button></Link>
                                    <figure>
                                        <img src={info.Poster} alt="" />
                                    </figure>
                                    
                                </div>

                                <div className="divider "></div>

                                <div className="movie_info">
                                    <h3 className="title ">{info.Title}</h3>

                                    <div className="time_genre">
                                        <h3 className="duration">{info.Runtime}</h3>
                                        <h3>{info.Genre}</h3>
                                    </div>

                                    <h3 className="released">{info.Released}</h3>

                                    <div className="sum">
                                        <h3 className="summary">Summary:</h3>
                                        <p className="plot">{info.Plot}</p>
                                    </div>
                                    
                                    <h3 className="rating">Rating: {info.imdbRating}/10</h3>

                                    <div className="watch_movie">
                                        <button>Watch Now</button>
                                        <button>Trailer</button>
                                    </div>
                                    
                                </div>

                            </div>
                        )
                    }

                    <RecommendedMovies id={id}/>
                </div>
            </div>
        </section>
    );
}

export default MovieInfo; 