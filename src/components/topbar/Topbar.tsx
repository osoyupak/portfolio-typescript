import './topbar.scss'
import {Person, Mail} from '@material-ui/icons';

interface IProps {
    menuOpen: boolean;
    setMenuOpen: (arg:boolean)=> void;
}

const Topbar = ({menuOpen, setMenuOpen}:IProps) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">logo</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+90 500 000 00 00</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>ozansoyupak@gmail.com</span>
                    </div>
                </div>
                <div className="right" onClick={()=>setMenuOpen(!menuOpen)}>
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
