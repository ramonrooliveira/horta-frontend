import React from "react";
import Link from "next/link";

const Footer = ({ footer }) => {
  return (
    <div className="footer-container">
      {footer?.link?.map(elem => {
        return (
          <Link key={elem.label} href={elem.url}>
          <a>{elem.label}</a>
        </Link>
        )
      })}
    </div>
  );
};

export default Footer;
