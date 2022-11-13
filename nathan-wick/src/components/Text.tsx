import { useContext } from "react";
import MobileContext from "../contexts/MobileContext";

const Text = (props: any) => {
    const isMobile = useContext(MobileContext);

    return (
        <div
            className={`${isMobile ? `w-100` : `w-50`} m-auto p-3`}>
            <p>
                {props.text}
            </p>
        </div>
    );
}


export default Text;