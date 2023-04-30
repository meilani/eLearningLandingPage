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
                        Our modern courses across a range of in&#8209;demand skills will give you the knowledge you need to live the life you want.
                    </p>
                    <Button href="#" txt="Get Started" color="pink" />
                </div>
                <div className="col col-2">
                    <picture>
                        <source 
                            srcset={heroImgMobile}
                            media="(max-width: 767px)" 
                        />
                        <source 
                            srcset={heroImgTablet}
                            media="(max-width: 1280px)" 
                        />
                        <img 
                            src={heroImgDesktop}
                            alt="Members 29 k, course hours 1451"
                        />
                    </picture>
                </div>
            </div>
        </section>
    )
}

export default HeroSection