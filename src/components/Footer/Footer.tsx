import "./Footer.css";

interface FooterProps {
  resetHandler: () => void;
  onLanguageChange: (language: string) => void;
  currentLanguage: string;
}

const Footer: React.FC<FooterProps> = ({ 
  resetHandler, 
  onLanguageChange,
  currentLanguage 
}) => {
  const languages = [
    { code: "en", name: "English" },
    { code: "de", name: "Deutsch" },
    { code: "fr", name: "Français" }
  ];

  return (
    <div className="footer-container">
      <div className="footer-left">
        <button className="reset-button" onClick={resetHandler}>
          Reset
        </button>
      </div>
      <div className="footer-right">
        <div className="language-selector">
          <span className="language-label">Language:</span>
          <select 
            value={currentLanguage} 
            onChange={(e) => onLanguageChange(e.target.value)}
            className="language-select"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;