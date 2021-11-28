import { FaTimes, FaMarker } from "react-icons/fa"


const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.taskReminder ? "reminder" : ""}`}>
            <div className="task-icons">
                <FaMarker className="task-icon" style={{ color: "rgba(64, 212, 38, 0.8)", cursor: "pointer" }} onClick={() => onToggle(task.id)} />
                <FaTimes className="task-icon" style={{ color: "rgba(256, 0, 0, 0.8)", cursor: "pointer" }} onClick={() => onDelete(task.id)} />
            </div>
            <h3>
                {task.taskText || "Empty Task"}
            </h3>
            <p className="date-p">{task.taskDay || new Date().toDateString()}</p>
        </div >
    )
}

export default Task