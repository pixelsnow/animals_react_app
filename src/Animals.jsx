import React, { Component } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About.jsx";
import Card from "./UI/Card";

const Animals = (props) => {
  const animalsFiltered = props.animals.filter(
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
    <BrowserRouter>
      <div className="App">
        <header>
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/animals"
              element={<Animals type="animals" animals={this.state.animals} />}
            ></Route>
            <Route path="/birds" element={<Animals type="birds" />}></Route>
          </Routes>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/animals">Animals</Link>
            <Link to="/birds">Birds</Link>
          </nav>
          <h1>Search {this.state.animals.length} animals</h1>
          <input onChange={this.filterAnimals} type="text" />
        </header>
        <main>
          <div className="card_container">{animal_cards}</div>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default Animals;
