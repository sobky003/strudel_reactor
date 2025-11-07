import React, { useEffect } from "react";

function ToggleTheme({ theme, onChange }) {
    //updates the new theme whenever the theme is changed
    useEffect(() => {
        document.body.className = theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
          <>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="themeOptions" id="lightTheme" value="light" checked={theme === "light"} onChange={(e) => onChange(e.target.value)} />
                      <label className="form-check-label" htmlFor="lightTheme">
                          Light theme
                      </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="themeOptions" id="darkTheme" value="dark" checked={theme === "dark"} onChange={(e) => onChange(e.target.value)} />
                      <label className="form-check-label" htmlFor="darkTheme">
                          Dark theme
                      </label>
              </div>
          </>
    );
}

export default ToggleTheme;