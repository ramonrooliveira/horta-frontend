import React from "react";
import Image from "./image";
import Link from "next/link";

const Gallery = ({ projects }) => {

  return (
    <div>
      <div className="gallery__grid">
        {projects?.map((project, i) => {
          return (
            <div className="gallery__card" key={project.slug}>
              <Link href={project.title == 'em breve...' ? '' : `/projeto/${project.slug}`}>
              <a className={`gallery__card-link ${project.title == 'em breve...' ? 'inactive' : ''}`}>
                <div className="gallery__card-project-cover">
                  <Image
                    image={project.cover}
                    className="gallery__image"
                  />
                </div>
                <div className="gallery__card-project-name">
                  <span>{project.title}</span>
                </div>
              </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
