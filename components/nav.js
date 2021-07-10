import React from "react";
import Link from "next/link";
import Image from "../components/image";
import { getStrapiMedia } from "../lib/media"

const Nav = ({ header }) => {
  const logoUrl = getStrapiMedia(header.logo);
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
        <Image
          image={header.logo}
          style={{
            position: "static",
            borderRadius: "50%",
            height: 30,
          }}
        />
        </div>
        <div className="navbar-right">
          <ul className="navbar-nav">
            {header.link.map((link) => {
              return (
                <li key={link.label}>
                  <Link href={link.url}>
                    <a>{link.label}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
