import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "test-id" }, "Adopt Me!"),
    React.createElement(Pet, { name: "Lady", animal: "Dog", breed: "Kelpie" }),
    React.createElement(Pet, {
      name: "Bungee",
      animal: "Dog",
      breed: "Kelpie",
    }),
    React.createElement(Pet, {
      name: "Lenny",
      animal: "Dog",
      breed: "Australian Shepherd",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
