const Button = ({ href, txt, color}) => {
    let colorClass = (color === "dark") ? "btn btn-dark" :                  (color === "pink") ? "btn btn-pink" : "btn"
    return (
        <a href={href} className={colorClass}>{txt}</a>
    )
}

export default Button