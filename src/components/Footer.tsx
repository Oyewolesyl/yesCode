type Props = {
  navigate: (page: string) => void;
};

export function Footer({ navigate }: Props) {
  return (
    <footer className="footer">
      <div>
        <strong>yesCode</strong>
        <p>No-code avoids the build. We say yes code.</p>
      </div>
      <div className="footer-links">
        {["work", "services", "about", "contact"].map((item) => (
          <button key={item} onClick={() => navigate(item)}>
            {item}
          </button>
        ))}
        <a href="https://github.com/Oyewolesyl/yesCodeDesign" target="_blank" rel="noreferrer">
          yesCode Design
        </a>
      </div>
    </footer>
  );
}
