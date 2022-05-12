import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppContextWrapper({ children }) {
    const [dark, setDarkMode] = useState(true);
    const [disclaimer, setDisclaimer] = useState(false);
    const [disclaimerContent, setDisclaimerContent] = useState('');
    const [disclaimerLink, setDisclaimerLink] = useState('');
    const [headerTheme, setHeaderTheme] = useState('');

    let sharedState = {
        dark: dark,
        disclaimer: disclaimer,
        disclaimerContent: disclaimerContent,
        disclaimerLink: disclaimerLink,
        headerTheme: headerTheme,
        toggleDisclaimerContent: (value) => {
            setDisclaimerContent(value);
        },
        toggleDisclaimer: (value) => {
            setDisclaimer(value);
        },
        toggleDisclaimerLink: (value) => {
            setDisclaimerLink(value);
        },
        toggleDarkMode: (value) => {
            setDarkMode(value);
        },
        toggleHeaderTheme: (value) => {
            setHeaderTheme(value);
        }
    };

    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
