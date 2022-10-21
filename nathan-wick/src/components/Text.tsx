const Text = (props: any) => {
    return (
        <div
            className={`mx-auto p-3 w-75`}>
            <p>
                {props.text}
            </p>
        </div>
    );
}


export default Text;