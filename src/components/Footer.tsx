type Props = {
  navigate: (page: string) => void;
};

export function Footer({ navigate }: Props) {
  return (
    <footer className="footer">
      <div>
        <strong>yesCode</strong>
        <p>Software, ecommerce, backend management, and launch-ready web products.</p>
      </div>
      <div className="footer-links">
        {["work", "services", "about", "contact"].map((item) => (
          <button key={item} onClick={() => navigate(item)}>
            {item}
          </button>
        ))}
        <a href="https://yes-code-design.vercel.app/" target="_blank" rel="noreferrer">
          yesCode Design
        </a>
      </div>
    </footer>
  );
}
