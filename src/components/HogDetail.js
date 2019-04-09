import React from "react";
// displays detail of information for the specific hog
const HogDetail = props => {
  return (
    <div>
      <p>
        highest medal: <strong>{props["highest medal achieved"]}</strong>
      </p>
      <p>
        weight ratio (hog to LG):{" "}
        <strong>
          {
            props[
              "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
            ]
          }
        </strong>
      </p>
      <h6>{props.greased ? "greased" : "not greased"}</h6>
    </div>
  );
};

export default HogDetail;
