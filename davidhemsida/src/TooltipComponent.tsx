import { Tooltip } from 'react-tooltip';
import {useLanguage} from "./LanguageProvider.tsx";

export const TooltipComponent = ({children}) => {
    const { selectedLanguage } = useLanguage();

    return(
        <>
            {selectedLanguage === 'English' ? (
                <a className="tooltip-a" data-tooltip-id="myTooltip" data-tooltip-content="Download Resume" data-tooltip-place="top">
                    {children}
                </a>
            ): (
                <a className="tooltip-a" data-tooltip-id="myTooltip" data-tooltip-content="Ladda ner CV" data-tooltip-place="top">
                    {children}
                </a>
            )}

            <Tooltip id="myTooltip"/>
        </>
    )
}
