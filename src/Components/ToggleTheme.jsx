import React, { useEffect } from "react";

function ToggleTheme({ theme, onChange }) {
    //updates the new theme whenever the theme is changed
    useEffect(() => {
        document.body.className = theme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
          <>
              <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label class="form-check-label" for="flexRadioDefault1">
                          Default radio
                      </label>
              </div>
              <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                      <label class="form-check-label" for="flexRadioDefault2">
                          Default checked radio
                      </label>
              </div>
          </>
    );
}

export default ToggleTheme;