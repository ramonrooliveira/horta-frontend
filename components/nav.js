import React from "react";
import Link from "next/link";
import Image from "../components/image";

const Nav = ({ header }) => {
  return (
    <div>
      <nav className="navbar-container">
        <div className="navbar-left">
          <Image
            image={header.logo}
            style={{
              position: "static",
              borderRadius: "50%",
              height: 30,
            }}
          />
          <span className="navbar-custom-phrase">{header.customPhrase}</span>
          <span className="navbar-presentation-phrase">{header.presentationPhrase}</span>
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
