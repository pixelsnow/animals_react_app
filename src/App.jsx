import React, { Component } from "react";
import "./App.css";
import { animals } from "./animals";
import Card from "./UI/Card";

class App extends Component {
  state = {
    animals: animals,
    search: "",
  };

  likeAnimal = (animal_name) => {
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name === animal_name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: updatedArray,
      };
    });
  };

  unlikeAnimal = (animal_name) => {
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name === animal_name) {
          return {
            ...animal,
            likes: animal.likes - 1,
          };
        } else {
          return animal;
        }
      });
      return {
        animals: updatedArray,
      };
    });
  };

  deleteAnimal = (animal_name) => {
    const updatedArray = this.state.animals.filter(
      (animal) => animal.name !== animal_name
    );
    this.setState({ animals: updatedArray });
  };

  filterAnimals = (e) => {
    this.setState({ search: e.target.value.trim() });
    /* const updatedArray = animals.filter(
      (animal) =>
        animal.name.toLowerCase().slice(0, e.target.value.length) ===
        e.target.value.toLowerCase()
    );
    this.setState({ animals: updatedArray }); */
  };

  render() {
    const animalsFiltered = this.state.animals.filter(
      (animal) =>
        animal.name.toLowerCase().slice(0, this.state.search.length) ===
        this.state.search.toLowerCase()
    );

    const animal_cards = animalsFiltered.map((animal) => (
      <Card
        name={animal.name}
        key={animal.name}
        likes={animal.likes}
        like={() => this.likeAnimal(animal.name)}
        unlike={() => this.unlikeAnimal(animal.name)}
        delete={() => this.deleteAnimal(animal.name)}
      />
    ));

    return (
      <div className="App">
        <header>
          <h1>Search {this.state.animals.length} animals</h1>
          <input onChange={this.filterAnimals} type="text" />
        </header>
        <main>
          <div className="card_container">{animal_cards}</div>
        </main>
      </div>
    );
  }
}

export default App;

//TODO: add normal heart
