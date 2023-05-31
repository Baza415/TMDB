import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Card, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function Section_1() {
    const [movies, setMovies] = useState([]);
    const [day, setDay] = useState("day");
    const [showBut, setShowBut] = useState(false);
    const [page, setPage] = useState(1)
    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/trending/all/${day}?language=ru&api_key=e840b9b3b2fc83813b3ed14c510e4105&page=${page} `)
          .then((response) => {
              setMovies(prev => [...prev,...response.data.results]);
              setShowBut(true)
          })
          .catch((error) => {
              console.log(error);
          });
    }, [day, page]);
    console.log(day)

    const navigate = useNavigate();

    const ShowMore = () => {
        setPage(prev => prev + 1)
    };

    return (
      <div className="section-container">
          <Container>
              <div className="flex">
                  <div className="mr-[30px]">
                      <h4>В тренде</h4>
                  </div>
                  <div className="flex">
                      <div
                        className="mr-[20px]"

                      >
                          <h4>
                              <button onClick={() => {
                                  setDay("day")
                                  setPage(1)
                                  setMovies([])
                              }}>
                                  Сегодня
                              </button>
                          </h4>
                      </div>
                      <div

                      >
                          <h4>
                              <button onClick={() => {
                                  setDay("week");
                                  setMovies([]);
                                  setPage(1)
                              }}>
                                  В этой неделе
                              </button>
                          </h4>
                      </div>
                  </div>
              </div>
              {movies.map((movie, index) => (
                <div key={movie.id} className="card-container flex">
                    <Card className="movie-card">
                        <Nav.Link onClick={() => navigate(`/card/${movie.id}`)}>
                            <Card.Img
                              variant="top"
                              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                              className="card-img-top"
                            />
                            <Card.Body>
                                <Card.Title className="card-title">
                                    {movie.title || movie.name}
                                </Card.Title>
                                <Card.Text>
                                    {moment(movie.release_date || movie.first_air_date).format(
                                      "MMMM D, YYYY"
                                    )}
                                </Card.Text>
                            </Card.Body>
                        </Nav.Link>
                    </Card>
                    {showBut && index === movies.length - 1 && (
                      <Button variant="primary" onClick={ShowMore}>
                          Еще
                      </Button>
                    )}
                </div>
              ))}

          </Container>
      </div>
    );
}

export default Section_1;
