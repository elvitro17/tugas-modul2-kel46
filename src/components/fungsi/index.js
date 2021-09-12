import React from "react";
import "./index.css";

export default function Collection(props) {
  const { title, release, genre, isNameBold, image } = props;

  return (
    <div className="container">
      <div className="card">
            <div>
              <img src={image} alt="Gambar" className="gambar"/>
            </div>
            <div className="text">
              <div>
                <h3 className={`${isNameBold ? "font-bold " : ""}	9`}>
                  <span aria-hidden="true" className="title" />
                  {title}
                </h3>
                <p className="release">Release Year : {release}</p>
              </div>
              <p className="genre">Genre : {genre}</p><tr></tr>
            </div>
      </div>
    </div>
  );
}
