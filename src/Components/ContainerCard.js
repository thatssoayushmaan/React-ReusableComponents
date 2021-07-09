import React from "react";

export default function Container(props) {
  console.log(props.items);
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
      </div>
    </div>
  );
}
