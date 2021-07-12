import React from "react";
import Image from "./image";

const Gallery = ({ projects }) => {

  return (
    <div>
      <div className="gallery-grid">
        <div>
          {projects.map((project, i) => {
            return (
              <div>
                <Image
                  image={project.cover}
                  style={{
                    position: "static",
                    height: 150,
                  }}
                />
                <span>{project.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
