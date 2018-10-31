import React from "react";

function ProjectDetails(props) {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            corporis impedit repellat hic dolor, veritatis, aliquid quo
            perspiciatis corrupti nesciunt accusantium nisi ipsam expedita,
            tenetur nam consequatur commodi laboriosam facere.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the KhanDoor</div>
          <div>10/22/2018</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
