import React from "react";
import Link from "next/link";
import Image from "../components/image";

const Nav = ({ header }) => {
  return (
    <div>
      <nav className="navbar-container">
        <div className="navbar-left">
          <div className="navbar__logo-container">
            <Link href="/">
              <a>
                <Image
                  className="navbar__logo"
                  image={header?.logo}
                  />
              </a>
            </Link>
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
