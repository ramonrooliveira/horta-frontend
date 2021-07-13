import React from "react";
import Image from "./image";
import Link from "next/link";

const Gallery = ({ projects }) => {

  return (
    <div>
      <div className="gallery-grid">
        <div>
          {projects?.map((project, i) => {
            return (
              <div key={project.slug}>
                <Link href={`/projeto/${project.slug}`}>
                <a>
                  <Image
                    image={project.cover}
                    style={{
                      position: "static",
                      height: 150,
                    }}
                    />
                  <span>{project.title}</span>
                </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
