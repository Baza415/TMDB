import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {MyContext} from "./App";

function Card_2() {
    const {id} = useParams()
    const context = useContext(MyContext)
    const data = context;
    const [dob,setDob] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${data.tv === 'tv' ? 'tv' : 'movie'}/${id}?api_key=e840b9b3b2fc83813b3ed14c510e4105&language=ru`)
          .then(res => {
              setDob(res.data)
              console.log(res.data)
          }).catch(res2 => {
            console.log(res2)
        })
    },[id])
    return(
      <>
          <div className="crd-main">
              <div className="containerForCard"
                   style={{ backgroundImage: dob && dob.backdrop_path ? `linear-gradient(rgba(31, 31, 225, 0.5), rgba(0, 0, 0, 0.9)),url(https://image.tmdb.org/t/p/w1280${dob.backdrop_path})` : `linear-gradient(rgba(31, 31, 225, 0.5), rgba(0, 0, 0, 0.9)),url(https://image.tmdb.org/t/p/w1280${dob.poster_path})`,
                   backgroundRepeat:'no-repeat',
                   backgroundSize:'cover'}}>
                  <div className="card-background flex ml-[80px]">
                      <div>
                          {dob && dob.poster_path && (
                            <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${dob.poster_path})`}}  alt="Movie Poster" className={'divImg'}/>
                          )}
                      </div>
                      <div className="ml-[40px] text-white">
                          <div>
                              <div className="ml-[40px] text-white">
                                  <div>
                                      <h2 className="mt-[20px] ">{dob && dob.title || dob.name}</h2>
                                      {dob && dob.genres && (
                                        <p>{dob.genres.map(genre => genre.name).join(', ')}</p>
                                      )}
                                      <p>{dob && dob.last_air_date || dob.release_date}</p>
                                      {dob && dob.overview && (
                                        <p className="mt-[100px] text-xl">{dob.overview}</p>
                                      )}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
    )
}
export default Card_2