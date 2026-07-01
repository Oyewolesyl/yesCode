import logo from "../assets/brand/yescode-main.svg";
import { useState } from "react";

type Props = {
  page: string;
  navigate: (page: string) => void;
};

export function Navbar({ page, navigate }: Props) {
  const links = ["work", "services", "process", "about", "contact"];
  const [open, setOpen] = useState(false);
  const go = (next: string) => {
    setOpen(false);
    navigate(next);
  };

  return (
    <header className={`nav ${open ? "is-open" : ""}`}>
      <div className="nav-bar">
        <button className="brand" onClick={() => go("home")} aria-label="yesCode home">
          <img src={logo} alt="yesCode" />
        </button>
        <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={open}>
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav className={open ? "open" : ""}>
        {links.map((link) => (
          <button
            key={link}
            className={page === link ? "active" : ""}
            onClick={() => go(link)}
          >
            {link}
          </button>
        ))}
        <a href="https://yes-code-design.vercel.app/" target="_blank" rel="noreferrer">
          yesCode Design
        </a>
      </nav>
    </header>
  );
}
