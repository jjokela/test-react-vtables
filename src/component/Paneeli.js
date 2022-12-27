import React from "react";

export default function Paneeli(props) {
  return (
    <div className="">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
}