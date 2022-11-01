import { Component } from "react";
import { animals } from "./animals";
import Card from "./UI/Card";
import "./Main.css";

class Main extends Component {
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

  render() {
    const animal_cards = this.state.animals.map((animal) => (
      <Card
        name={animal.name}
        key={animal.name}
        likes={animal.likes}
        like={this.likeAnimal}
        unlike={this.unlikeAnimal}
        delete={this.deleteAnimal}
      />
    ));
    return (
      <main>
        <div className="card_container">{animal_cards}</div>
      </main>
    );
  }
}

export default Main;
