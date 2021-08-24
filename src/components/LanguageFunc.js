import React, { useState } from "react";

function LanguageFunc() {
    const [language, setLanguage] = useState("🇫🇷");
    const [hidden, setHidden] = useState(true);

    function toggleDropdown() {
        setHidden(!hidden);
    }

    function replaceMain(e) {
        setLanguage(e.target.textContent);
        toggleDropdown();
    }

    return (
        <div>
            <button onClick={() => toggleDropdown()}>{language}</button>
            <div style={{ display: hidden ? "none" : "block" }}>
                <button onClick={replaceMain}>🇬🇧</button>
                <button onClick={replaceMain}>🇫🇷</button>
                <button onClick={replaceMain}>🇪🇸</button>
            </div>
        </div>
    );
}

export default LanguageFunc;