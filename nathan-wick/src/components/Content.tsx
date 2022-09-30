const Content = (props: any) => {
    const alignments = ['left', 'center', 'right'];

    return (
        <div
            className='p-4 bg-dark text-white parallax'
            style={{
                backgroundImage: props.background ? `url(${props.background})` : `none`,
                backgroundSize: 'cover'}}>
            <div
                className='row'>
                {
                    alignments.map((alignment, index) =>
                        props.alignment === alignment ?
                            <div
                                key={index}
                                className='col-sm bg-dark'>
                                {
                                    props.title ?
                                        <h1
                                            className='m-3'>
                                            {props.title}
                                        </h1> : <></>
                                }
                                {
                                    props.subtitle ?
                                        <p
                                            className='m-3 text-muted'>
                                            {props.subtitle}
                                        </p> : <></>
                                }
                                <hr
                                    className='m-3' />
                                {
                                    props.content ?
                                        <div
                                            className='m-3'>
                                            {props.content}
                                        </div> : <></>
                                }
                            </div> : <div key={index} className='col-sm'></div>
                    )
                }
            </div>
        </div>
    );
};

export default Content;