const Text = (props: any) => {
    return (
        <div
            className={`${!props.isMobile && `w-50`} bg-dark text-white mx-auto`}>
            <p>{props.text}</p>
        </div>
    );
}


export default Text;