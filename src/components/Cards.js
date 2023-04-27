const Cards = ({ cardContents }) => {
    return (
        <>
            {cardContents.map(content => (
                <div 
                    className="card"
                    key={content.id}
                >
                    <img 
                        src={content.image}
                        alt=""
                        height="56"
                        width="56"
                        loading="lazy"
                    />
                    <h3 className="card-title">{content.title}</h3>
                    <p className="card-text">{content.text}</p>
                    <a className="card-link" href={content.link}>Get Started</a>
                </div>
            ))}
        </>
    )
}

export default Cards