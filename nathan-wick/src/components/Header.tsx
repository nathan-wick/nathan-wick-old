import DefaultBackground from '../assets/images/backgrounds/endless-constellation.svg';

const Header = (props: any) => {
    return (
        <div
            className='py-5 text-center parallax'
            style={{
                backgroundImage: props.background ? `url(${props.background})` : `url(${DefaultBackground})`}}>
            {
                props.icon ?
                    <img
                        className='pt-3'
                        style={{
                            width: `10em`
                        }}
                        src={props.icon}
                        alt={props.title}>
                    </img> : <></>
            }
            {
                props.title ?
                    <h1>
                        {props.title}
                    </h1> : <></>
            }
            {
                props.subtitle ?
                    <p>
                        {props.subtitle}
                    </p> : <></>
            }
        </div>
    );
};

export default Header;