import { CopyBlock, dracula } from "react-code-blocks";


const Text = (props: any) => {
    return (
        <div
            className={`${props.isMobile ? `w-100` : `w-50`} m-auto p-3`}>
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