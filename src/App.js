import Header from "./comps/Header.js";
import Tasks from "./comps/Tasks.js";
import AddTask from "./comps/AddTask.js";
import { useState } from "react";


function App() {
    const [showForm, setShowForm] = useState(false)
    const [tasks, setTasks] = useState([])
    //delete task
    const delTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    //toggle task    reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
    }
    //add new task

    const addTask = (task) => {
        const id = tasks?.at(-1)?.id + 1 || 1
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }
    return (
        <div className="container">
            <Header showForm={showForm} onAdd={() => setShowForm(!showForm)} />
            {showForm &&
                <AddTask onAdd={addTask} />
            }
            {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={delTask} /> : "There is no tasks to display."}
        </div>
    );
}

export default App;
