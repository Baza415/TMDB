import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import moment from "moment";
import {Container} from "react-bootstrap";

function Serials() {
    const [popularSerials, setPopularSerials] = useState([]);
    const [dow,setDow] = useState(1)

    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/tv/popular?api_key=e840b9b3b2fc83813b3ed14c510e4105&language=ru&page=${dow}`
          )
          .then((response) => {
              setPopularSerials(prev =>[...prev,...response.data.results]);
          })
          .catch((err) => {
              console.log(err);
          });
    }, []);

    return (
      <>
          <Container>
              <div className="flex flex-col ">
                  <div>
                      <h2>Популярные сериалы</h2>
                  </div>
                  <div className="flex flex-wrap justify-center">
                      {popularSerials.map((serial) => (
                        <div key={serial.id} className="card">
                            <img
                              src={`https://image.tmdb.org/t/p/w200${serial.poster_path}`}
                              alt={serial.name}
                            />
                            <div>
                                <p>{serial.name}</p>
                                {moment(serial.release_date || serial.first_air_date).format(
                                  "MMMM D, YYYY"
                                )}
                            </div>
                        </div>
                      ))}
                  </div>
              </div>
              <button onClick={() => {
                  setDow(prev => prev + 1)
              }}>
                  Загрузить еще
              </button>
          </Container>
          <Footer />
      </>
    );
}

export default Serials;
