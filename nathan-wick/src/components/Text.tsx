const Text = (props: any) => {
    return (
        <div
            className='bg-dark text-white mx-auto w-50'>
            <p>{props.text}</p>
        </div>
    );
}
    

export default Text;