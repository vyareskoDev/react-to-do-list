import { useState } from "react"
import Error from "./Error"


const AddTask = ({ onAdd }) => {
    const [taskText, setTaskText] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [taskReminder, setTaskReminder] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [showError, setShowError] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        if (!(0 < taskText.length)) {
            setErrorMessage("Please, enter the string, length of which is in range 1, 18")
            setShowError(true)
            setTimeout(() => setShowError(false), 5000)
        }
        if (!taskDate) {
            setErrorMessage("Please, enter the date in format day/month/year")
            setShowError(true)
            setTimeout(() => setShowError(false), 5000)
        }
        let task = { taskText, taskDate, taskReminder }
        console.log(task)
        onAdd(task)
    }
    return (
        <form className="add-form" onSubmit={(e) => onSubmit(e)}>
            <div className="form-control">
                <label>Set task text</label>
                <input onFocus={(e) => e.target.value = ""} type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} placeholder="add task"></input>
            </div>
            <div className="form-control">
                <label>Set time</label>
                <input onFocus={(e) => e.target.value = ""} type="text" placeholder="set time" value={taskDate} onChange={(e) => setTaskDate(e.target.value)}></input>
            </div>
            <div className="form-control form-control-check">
                <label>Set reminder</label>
                <input checked={taskReminder} type="checkbox" value={taskReminder} onChange={(e) => setTaskReminder(e.currentTarget.checked)}></input>
            </div>
            <Error text={errorMessage} showError={showError} />
            <input type="submit" value="Create Task" className="btn btn-block"></input>
        </form >
    )
}

export default AddTask