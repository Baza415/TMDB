import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer_F from "./Footer";
import {Container} from "react-bootstrap";

function People() {
    const [popularPeople, setPopularPeople] = useState([]);

    useEffect(() => {
        axios
          .get(
            'https://api.themoviedb.org/3/person/popular?api_key=e840b9b3b2fc83813b3ed14c510e4105&language=ru'
          )
          .then((response) => {
              setPopularPeople(response.data.results);
          })
          .catch((err) => {
              console.log(err);
          });
    }, []);

    return (
      <>
          <Container>
              <div className="people-container">
                  <div>
                      <h2>
                          Популярные люди
                      </h2>
                  </div>
                  <div className="cards-container">
                      {popularPeople.map((person) => (
                        <div key={person.id} className="card">
                            <img
                              src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
                              alt={person.name}
                            />
                            <div>
                                <p>{person.name}</p>
                                <p>{person.known_for_department}</p>
                            </div>
                        </div>
                      ))}
                  </div>

              </div>
          </Container>
          <Footer_F/>
      </>
    );
}

export default People;
