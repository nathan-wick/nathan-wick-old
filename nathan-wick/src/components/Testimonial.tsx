import RatingIcon from '../assets/icons/rating.png'

const Testimonial = (props: any) => {
    return (
        <div
            className='col-sm bg-dark m-3 text-center'>
            {
                props.image ?
                    <img
                        className='pt-3'
                        style={{
                            width: `10em`
                        }}
                        src={props.image}
                        alt={props.name}>
                    </img> : <></>
            }
            {
                props.name ?
                    <h1>
                        {props.name}
                    </h1> : <></>
            }
            {
                props.relation ?
                    <p
                        className='text-muted'>
                        {props.relation}
                    </p> : <></>
            }
            <img
                className='mb-3'
                style={{
                    width: `10em`
                }}
                src={RatingIcon}
                alt='5-Star Rating'>
            </img>
            <hr
                className='m-3' />
            {
                props.text ?
                    <p>
                        {props.text}
                    </p> : <></>
            }
        </div>
    );
};

export default Testimonial;