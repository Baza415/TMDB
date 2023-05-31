import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

function Card_Main() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e840b9b3b2fc83813b3ed14c510e4105&language=ru`)
          .then(res => {
              setMovie(res.data);
              console.log(res.data);
          })
          .catch(error => {
              console.error(error);
          });
    }, [id]);

    return (
      <>
          <div className="crd-main">
              <div className="containerForCard" style={{ backgroundImage: movie && movie.backdrop_path ? `linear-gradient(rgba(31, 31, 225, 0.5), rgba(0, 0, 0, 0.9)),url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` : '' }}>
                  <div className="card-background flex ml-[80px]">
                      <div className="w-[300px] h-[450px]">
                          {movie && movie.poster_path && (
                            <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${movie.poster_path})`, backgroundSize:'contain'}} alt="Movie Poster" className={'divImg'}/>
                          )}
                      </div>
                      <div className="ml-[40px] text-white">
                          <div>
                              <div className="ml-[40px] text-white">
                                  <div>
                                      <h2 className="mt-[20px] ">{movie && movie.title }</h2>
                                      {movie && movie.genres && (
                                        <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
                                      )}
                                      <p>{movie && movie.release_date}</p>
                                      {movie && movie.overview && (
                                        <p className="mt-[100px] text-xl">{movie.overview}</p>
                                      )}
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
    );
}

export default Card_Main;
