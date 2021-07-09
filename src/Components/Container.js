import React from "react";
import ContainerCard from "./ContainerCard";

export default function Container() {
  return (
    <div>
      <div class="row">
        <div class="col-sm">
          <ContainerCard
            title="Dropdown Card Example"
            description="Dropdown menus can be placed in the card header in order to extend the
          functionality of a basic card. In this dropdown card example, the Font
          Awesome vertical ellipsis icon in the card header can be clicked on in
          order to toggle a dropdown menu."
          />
        </div>
        <div class="col-sm">
          <ContainerCard
            title="Default Card Example"
            description="This card uses Bootstraps default styling with no utility classes Styles are the only things modifying the look and feel for default card example."
          />
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-sm">
          <ContainerCard
            title="Basic Card Example"
            description="The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!"
          />
        </div>
        <div class="col-sm">
          <ContainerCard
            title="Collapsable Card Example"
            description=" This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!"
          />
        </div>
      </div>
    </div>
  );
}
