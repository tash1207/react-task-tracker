import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
  {
    id: 1,
    text: 'Doctors appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Lunch w friend',
    day: 'Feb 6th at 1:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Grocery shopping',
    day: 'Feb 5th at 3:30pm',
    reminder: false,
  }
  ]
  )

  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDeleteTask={deleteTask}/> :
        'No tasks to show'}
    </div>
    );
}

export default App;
