import logoLight from "../images/logo-light.svg"
import Button from "./Button"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h1>
                    <img 
                        src={logoLight}
                        alt="Skilled"
                        width="112"
                        height="29"
                    />
                </h1>
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