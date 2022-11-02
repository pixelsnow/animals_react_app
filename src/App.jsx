import React, { Component } from "react";
import "./App.css";
import { animals } from "./animals";
import Card from "./UI/Card";

class App extends Component {
  state = {
    animals: animals,
  };

  likeAnimal = (animal_name) => {
    console.log("liked " + animal_name);
  };

  unlikeAnimal = (animal_name) => {
    console.log("unliked " + animal_name);
  };

  deleteAnimal = (animal_name) => {
    console.log("deleted " + animal_name);
  };

  animal_cards = animals.map((animal) => (
    <Card
      name={animal.name}
      key={animal.name}
      likes={animal.likes}
      like={this.likeAnimal}
      unlike={this.unlikeAnimal}
      delete={this.deleteAnimal}
    />
  ));

  searchAnimals = (e) => {
    console.log(e.currentTarget.value);
    this.animal_cards = this.animal_cards.filter((animal) => {
      console.log(
        animal.props.name
          .toLowerCase()
          .includes(e.currentTarget.value.toLowerCase())
      );
      console.log(animal.props.name.toLowerCase());
      return animal.props.name
        .toLowerCase()
        .includes(e.currentTarget.value.toLowerCase());
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Animals!</h1>
          <input onInput={this.searchAnimals} type="text" />
        </header>
        <main>
          <div className="card_container">{this.animal_cards}</div>
        </main>
      </div>
    );
  }
}

export default App;
