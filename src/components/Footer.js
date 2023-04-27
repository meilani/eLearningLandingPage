import logoLight from "../images/logo-light.svg"
import Button from "./Button"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="col col-1">
                    <img 
                        src={logoLight}
                        alt="Skilled"
                        width="112"
                        height="29"
                    />
                </div>
                <div className="col col-2">
                    <Button 
                        href="#" 
                        txt="Get started" 
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer