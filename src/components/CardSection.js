import Cards from "./Cards"
import cardContent from "./card-content"

const CardSection = () => {
    return (
        <section className="card-section">
            <div className="card-container">
                <div className="header-card">
                    <h2>Check out our most popular courses!</h2>
                </div>
                <Cards cardContents={cardContent} />
            </div>
        </section>
    )
}

export default CardSection