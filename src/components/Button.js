const Button = ({ href, txt, color}) => {
    let colorClass = (color === "dark") ? "btn btn-dark" : "btn"
    return (
        <a href={href} className={colorClass}>{txt}</a>
    )
}

export default Button