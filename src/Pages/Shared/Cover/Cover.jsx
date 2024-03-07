import { Parallax } from 'react-parallax';
import './Cover.css'


const Cover = ({ bgImg, head, body, capital }) => {
    return (
        <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={bgImg}
            bgImageAlt="the menu"
            strength={200}
            className='parallex-container'
        >
            <div className="hero">
                <div className="hero-content text-center text-neutral-content md:px-20 py-8 md:py-16 my-20 md:my-40 bg-black bg-opacity-60">
                    <div className="max-w-md font-cinzel">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{head}</h1>
                        <p className={`mb-5 ${capital && 'uppercase'}`}>{body}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;