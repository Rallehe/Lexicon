"use client"
import TaskItem from "./task-item";
import { useState } from "react"

export default  function Home() {

  const [tasks] = useState([
    {id: 1, title: "First Task", description: "This is the first task of the day!"},
    {id: 2, title: "Second Task", description: "This is the second task of the day!"},
    {id: 3, title: "Third Task", description: "This is the third task of the day!"},
  ]);

const taskList = tasks.map((task) => (
 <TaskItem key={task.id}
 title={task.title}
 description={task.description} />
))

  return (
    <main className="min-h-=screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-400">My Task Manager</h1>
          {taskList}
      </div>
    </main>
  )
}