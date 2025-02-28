import { Tooltip } from 'react-tooltip';
import {useLanguage} from "./LanguageProvider.tsx";
import {ReactNode} from "react";

interface TooltipComponentProps{
    children: ReactNode;
    onClick: () => void;
}

export const TooltipComponent = ({children, onClick}: TooltipComponentProps) => {
    const { selectedLanguage } = useLanguage();

    return(
        <>
                <a className="tooltip-a" data-tooltip-id="myTooltip"
                   onClick={onClick}
                   data-tooltip-content={selectedLanguage === 'English' ?"Download Resume" : "Ladda ner CV"}
                   data-tooltip-place="top">
                    {children}
                </a>


            <Tooltip id="myTooltip"/>
        </>
    )
}
