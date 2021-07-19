import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

const Intro = () => {
    useEffect(() => {
        init(textRef.current, 
            { 
                showCursor: true,
                backDelay:  2000, 
                strings: ['Industrial Designer', 'Design Researcher' ] 
            })
    }, []);
    const textRef:any = useRef();
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/ozan_soyupak.png" alt="man" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Ozan SOYUPAK</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down-arrow.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
