import {createContext, ReactNode, useContext, useState} from 'react';

interface languageSelectorProps {
    selectedLanguage: string,
    setSelectedLanguage: (language: string) => void;
}

const LanguageContext = createContext<languageSelectorProps | undefined>(undefined);
export const useLanguage = () =>  {
    const context = useContext(LanguageContext);
    if(!context){
        throw new Error("useLanguage must be used within a <LanguageProvider/>");
    }
    return context;
}
export const LanguageProvider= ({children}: {children: ReactNode} ) => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
    return (
        <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
            {children}
        </LanguageContext.Provider>
    );

}