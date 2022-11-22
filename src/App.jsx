import React, { Component } from "react";
import "./App.css";
import { animals } from "./animals_and_birds";
import { birds } from "./animals_and_birds";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Animals from "./Animals.jsx";
import About from "./About.jsx";

class App extends Component {
  state = {
    animals: animals,
    birds: birds,
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

  deleteAnimal = (animal_name, data) => {
    if (data === "animals") {
    } else if (data === "birds") {
    }
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
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Routes>
              <Route
                path="/animals"
                element={
                  <Animals type="animals" animals={this.state.animals} />
                }
              ></Route>
              <Route
                path="/birds"
                element={<Animals type="birds" animals={this.state.birds} />}
              ></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <nav>
              <Link to="/animals">Animals</Link>
              <Link to="/birds">Birds</Link>
              <Link to="/about">About</Link>
            </nav>
          </header>
          <main>
            <Link to="/animals">
              <div>Animals</div>
            </Link>
            <Link to="/birds">
              <div>Birds</div>
            </Link>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

//TODO: add normal heart
