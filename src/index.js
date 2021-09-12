import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Gambar1 from "./assets/images/image1.jpg";
import Gambar2 from "./assets/images/image2.jpg";
import Collection from "./components/fungsi";

// import reportWebVitals from './reportWebVitals';

const option = [
  { title: "Microsoft Flight Simulator", release: "2020", genre: "Simulation", image: Gambar1 },
  { title: "F1 2021", release: "2021", genre: "Racing", image: Gambar2 },
];

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Collection
      title={option[0].title}
      release={option[0].release}
      genre={option[0].genre}
      isNameBold
      image={option[0].image}
    />
    <Collection
      title={option[1].title}
      release={option[1].release}
      genre={option[1].genre}
      isNameBold
      image={option[1].image}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
