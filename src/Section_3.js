import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import {Card, Container, Nav} from "react-bootstrap";
import moment from "moment";
import {useNavigate} from 'react-router-dom'
import {MyContext} from "./App";

function Section_3() {
    const context = useContext(MyContext)
    const [mov, setMov] = useState([]);
    const navigate = useNavigate()
    const data = context;
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/${data.tv}?api_key=e840b9b3b2fc83813b3ed14c510e4105&language=ru`
          )
          .then((response) => {
              setMov(response.data.results);
          })
          .catch((err) => {
              console.log(err);
          });
    }, [data.tv]);

    return (
      <>
          <div className="section-container">
              <Container>
                  <div className="flex">
                      <div className="mr-[30px]">
                          <h4>Что популярно</h4>
                      </div>
                      <div className="flex">
                          <div className="mr-[20px]">
                              <h4>
                                  <button  onClick={() => {
                                      data.setTv('tv')
                                  }}>
                                      По Тв
                                  </button>
                              </h4>
                          </div>
                          <div>
                              <h4>
                                  <button onClick={() => {
                                      data.setTv('movie')
                                  }}>
                                      В кинотеатрах
                                  </button>
                              </h4>
                          </div>
                      </div>
                  </div>
                  {mov.map((movie) => (
                    <div key={movie.id} className="card-container">
                        <Card className="movie-card">
                            <Nav.Link onClick={() => navigate(`/card_2/${movie.id}`)}>
                                <Card.Img
                                  variant="top"
                                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                  className="card-img-top"
                                />
                                <Card.Body>
                                    <Card.Title className="card-title">{movie.title || movie.name}</Card.Title>
                                    <Card.Text>

                                        {moment(movie.release_date || movie.first_air_date).format(
                                          "MMMM D, YYYY"
                                        )}
                                    </Card.Text>
                                </Card.Body>
                            </Nav.Link>
                        </Card>
                    </div>
                  ))}
              </Container>
          </div>
      </>
    );
}

export default Section_3;
