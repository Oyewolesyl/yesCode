import logo from "../assets/brand/yescode-main.svg";

type Props = {
  page: string;
  navigate: (page: string) => void;
};

export function Navbar({ page, navigate }: Props) {
  const links = ["work", "services", "process", "about", "contact"];

  return (
    <header className="nav">
      <button className="brand" onClick={() => navigate("home")} aria-label="yesCode home">
        <img src={logo} alt="yesCode" />
      </button>
      <nav>
        {links.map((link) => (
          <button
            key={link}
            className={page === link ? "active" : ""}
            onClick={() => navigate(link)}
          >
            {link}
          </button>
        ))}
        <a href="https://github.com/Oyewolesyl/yesCodeDesign" target="_blank" rel="noreferrer">
          yesCode Design
        </a>
      </nav>
    </header>
  );
}
