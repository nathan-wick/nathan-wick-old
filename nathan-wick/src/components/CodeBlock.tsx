import { useContext } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import MobileContext from "../contexts/MobileContext";

const Text = (props: any) => {
    const isMobile = useContext(MobileContext);

    return (
        <div
            className={`${isMobile ? `w-100` : `w-50`} m-auto p-3`}>
            <CopyBlock
                language={`typescript`}
                text={props.text}
                showLineNumbers={true}
                theme={dracula}
                wrapLines={true}
                codeBlock />
        </div>
    );
}


export default Text;