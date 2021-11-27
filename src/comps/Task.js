import { FaTimes } from "react-icons/fa"


const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.taskReminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.taskText || "Empty Task"} <FaTimes style={{ color: "rgba(256, 0, 0, 0.8)", cursor: "pointer" }} onClick={() => onDelete(task.id)} /></h3>
            <p className="date-p">{task.taskDay || new Date().toDateString()}</p>
        </div >
    )
}

export default Task