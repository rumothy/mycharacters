import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Characters extends Component {
  state = {
    characters: []
  };

  componentDidMount() {
    this.loadCharacters();
  }

  loadCharacters = () => {
    API.getCharacters()
      .then(res => {
        console.log(res.data);
        this.setState({ characters: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        {this.state.characters.length ? (
          <List>
            {this.state.characters.map(character => (
              <ListItem key={character._id}>
                <Link to={"/characters/" + character._id}>
                  <strong>
                    {character.name} {character.age}
                  </strong>
                </Link>
                {/* <DeleteBtn onClick={() => this.deleteBook(character._id)} /> */}
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Container>
    );
  }
}

export default Characters;
