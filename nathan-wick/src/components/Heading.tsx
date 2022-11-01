const Heading = (props: any) => {
    return (
        <div
            className={`${props.isMobile ? `w-100` : `w-50`} m-auto p-3`}>
            <h2
                className='text-bright'>
                {props.text}
            </h2>
        </div>
    );
}


export default Heading;