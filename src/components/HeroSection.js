import heroImgDesktop from '../images/image-hero-desktop.webp'
import heroImgTablet from '../images/image-hero-tablet.webp'
import heroImgMobile from '../images/image-hero-mobile.webp'
import Button from './Button'

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="col col-1">
                    <h2>
                        Maximize skill,<br />
                        minimize budget 
                    </h2>
                    <p>
                        Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.
                    </p>
                    <Button href="#" txt="Get Started" />
                </div>
                <div className="col col-2">
                    <img 
                        src={heroImgDesktop}
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection