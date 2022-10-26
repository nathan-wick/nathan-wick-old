const Text = (props: any) => {
    return (
        <div
            className={`${props.isMobile ? `w-100` : `w-50`} m-auto p-3`}>
            <p>
                {props.text}
            </p>
        </div>
    );
}


export default Text;