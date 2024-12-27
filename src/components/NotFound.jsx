import React from "react";
const img =
  "https://pics.craiyon.com/2023-07-07/8ce35187d4494d2aaa6582adcfac217f.webp";
export const NotFound = () => {
  return (
    <section>
      <div className="error-container">
        <div className="img-container">
          <img
            className="not-found-image"
            src={img}
            alt="404 Not Found image"
          />
        </div>
        <br />
        <h3>Oops looks like this page doesn't exist!</h3>
      </div>
    </section>
  );
};
