import { Card, Container } from "react-bootstrap";
import moment from "moment";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer_F from "./Footer";

function Movie() {
    const [movies, setMovies] = useState([]);
    const [dow, setDow] = useState(1)

    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/discover/movie?language=ru&api_key=e840b9b3b2fc83813b3ed14c510e4105&page=${dow}`
          )
          .then((response) => {
              setMovies(prev => [...prev,...response.data.results]);
          })
          .catch((error) => {
              console.log(error);
          });
    }, [dow]);

    return (
      <>
          <Container>
              <div className="Movie_section_container flex flex-col">
                  <div>
                      <h2>Фильмы</h2>
                  </div>
                  <div className="flex flex-wrap">
                      {movies.map((movie) => (
                        <Card key={movie.id}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    {moment(movie.release_date).format("YYYY-MM-DD")}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                      ))}
                  </div>
              </div>
              <button onClick={() => {
                  setDow(prev => prev + 1)
              }}>
                  Загрузить еще
              </button>

          </Container>
          <Footer_F/>
      </>
    );
}

export default Movie;
