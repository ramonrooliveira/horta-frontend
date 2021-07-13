import React from "react";
import Link from "next/link";
import Image from "../components/image";

const Nav = ({ header }) => {
  return (
    <div>
      <nav className="navbar-container">
        <div className="navbar-left">
          <div>
            <Link href="/">
              <a>
                <Image
                  image={header?.logo}
                  style={{
                    position: "static",
                    height: 100,
                  }}
                  />
              </a>
            </Link>
          </div>
          <div className="navbar-phrases">
            <span className="navbar-custom-phrase">{header.customPhrase}</span><br />
            <span className="navbar-presentation-phrase">{header.presentationPhrase}</span>
          </div>
        </div>
        <div className="navbar-right">
            {header?.link?.map((link) => {
              return (
                <Link key={link.label} href={link.url}>
                  <a className="navbar-link">{link.label}</a>
                </Link>
              );
            })}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
