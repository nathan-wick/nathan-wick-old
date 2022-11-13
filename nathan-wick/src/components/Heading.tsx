import { useContext } from "react";
import MobileContext from "../contexts/MobileContext";

const Heading = (props: any) => {
    const isMobile = useContext(MobileContext);

    return (
        <div
            className={`${isMobile ? `w-100` : `w-50`} m-auto p-3`}>
            <h2
                className='text-bright'>
                {props.text}
            </h2>
        </div>
    );
}


export default Heading;