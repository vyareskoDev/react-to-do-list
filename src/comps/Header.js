import Button from "./Button"

const Header = ({ title, onAdd, showForm }) => {
    return (
        <header className="header">
            <h1>{title || "To Do List"}</h1>
            <Button className="btn" buttonText={showForm ? "Close form" : "Add"} onClick={onAdd} />
        </header >
    )
}

export default Header
