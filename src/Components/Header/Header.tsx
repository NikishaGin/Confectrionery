import './Header.css';
import {Nav} from "../Nav/Nav";
export const Header = () => {
    return (
        <div className="main">
            <h1 className="main-heading">
                <span className="main-heading-primary">Welcome</span>
                <span className="main-heading-secondary">confectionery</span>
            </h1>
            <Nav/>
        </div>
    )
}