import React, { useState } from 'react'
import { Trash, SquarePen } from "lucide-react"
import Habbit from "./Habbit"

// const habits = [
//   {
//     id: 1,
//     name: "Morning run",
//     category: "Health",
//     weeklyTarget: 5,
//     streak: 18,
//     doneToday: true,
//     createdAt: "2026-08-01",
//     bgColor: "bg-green-900/60",
//   },
//   {
//     id: 2,
//     name: "Read 20 pages",
//     category: "Study",
//     weeklyTarget: 7,
//     streak: 9,
//     doneToday: true,
//     createdAt: "2026-08-15",
//     bgColor: "bg-blue-900/60",
//   },
//   {
//     id: 3,
//     name: "Deep work block",
//     category: "Work",
//     weeklyTarget: 5,
//     streak: 3,
//     doneToday: false,
//     createdAt: "2026-09-10",
//     bgColor: "bg-purple-900/60",
//   },
//   {
//     id: 4,
//     name: "Meditate 10 minutes",
//     category: "Personal",
//     weeklyTarget: 6,
//     streak: 0,
//     doneToday: false,
//     createdAt: "2026-09-25",
//     bgColor: "bg-yellow-900/50",
//   },
//   {
//     id: 5,
//     name: "Drink 2L of water",
//     category: "Health",
//     weeklyTarget: 7,
//     streak: 12,
//     doneToday: true,
//     createdAt: "2026-08-20",
//     bgColor: "bg-red-900/60",
//   },
//   {
//     id: 6,
//     name: "Practice React for 1 hour",
//     category: "Study",
//     weeklyTarget: 6,
//     streak: 21,
//     doneToday: true,
//     createdAt: "2026-08-05",
//     bgColor: "bg-pink-900/60",
//   },
//   {
//     id: 7,
//     name: "Reply to client messages",
//     category: "Work",
//     weeklyTarget: 5,
//     streak: 6,
//     doneToday: false,
//     createdAt: "2026-09-01",
//     bgColor: "bg-orange-900/50",
//   },
//   {
//     id: 8,
//     name: "Write in journal",
//     category: "Personal",
//     weeklyTarget: 4,
//     streak: 2,
//     doneToday: false,
//     createdAt: "2026-09-22",
//     bgColor: "bg-teal-900/60",
//   },
// ];


const HabbitList = ({habitsList, handleUpdateHabbit}) => {

  const[editId, setEditId] = useState(null);




  return (
    <div className="space-y-3"> 
              {
                habitsList.map(habit => (
                  <Habbit 
                  key={habit.id} 
                  {...habit} 
                  editId={editId} 
                  setEditId={setEditId}
                  handleUpdateHabbit={handleUpdateHabbit} />
                ))
              }
    </div>
  )
}

export default HabbitList
