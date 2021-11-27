

const Error = ({ text, showError }) => {
    return (
        <div className={`error ${!showError ? "hiden" : ""}`}>
            {
                text || "Unknown error!"
            }
        </div >
    )
}

export default Error
