const Button = ({ className, buttonText, color, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color } || { backgroundColor: "black" }}
            className={className}>
            {buttonText}
        </button>
    )
}


export default Button