import logoDark from "../images/logo-dark.svg"
import Button from "./Button"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="col col-1">
                    <img 
                        src={logoDark}
                        alt="Skilled"
                        width="112"
                        height="29"
                    />
                </h1>
                <div className="col col-2">
                    <Button 
                        href="#" 
                        txt="Get started" 
                        color="dark" 
                    />
                </div>
            </div>
        </header>
    )
}

export default Header