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
    const updatedArray = this.state.animals.filter(
      (animal) => animal.name !== animal_name
    );
    this.setState({ animals: updatedArray });
    console.log(this.state.animals);
  };

  searchAnimals = (e) => {
    this.setState({
      animals: this.state.animals.filter((animal) => {
        console.log(animal.name.includes(e.currentTarget.value));
        return animal.name.includes(e.currentTarget.value);
      }),
    });
  };

  render() {
    const animal_cards = this.state.animals.map((animal) => (
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
          <h1>Animals!</h1>
          <input onInput={this.searchAnimals} type="text" />
        </header>
        <main>
          <div className="card_container">{animal_cards}</div>
        </main>
      </div>
    );
  }
}

export default App;
