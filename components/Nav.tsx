"use client";

import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", target: "home", offset: -100 },
  { name: "sobre", target: "sobre", offset: -80 },
  { name: "treinos", target: "treinos", offset: -80 },
  { name: "equipe", target: "equipe", offset: 0 },
  { name: "planos", target: "planos", offset: -40 },
  { name: "depoimentos", target: "depoimentos", offset: 0 },
  { name: "blog", target: "blog", offset: 0 },
  { name: "contato", target: "contato", offset: 0 },
];

const Nav = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            offset={link.offset}
            to={link.target}
            smooth
            spy
            activeClass="active"
            className="cursor-pointer hover:text-accent transition-all"
            key={index}
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};

export default Nav;
