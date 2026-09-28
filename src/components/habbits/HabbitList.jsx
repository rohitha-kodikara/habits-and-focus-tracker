import React from 'react'
import { Trash, SquarePen } from "lucide-react"
import Habbit from "./Habbit"

const habits = [
  {
    id: 1,
    name: "Morning run",
    category: "Health",
    weeklyTarget: 5,
    streak: 18,
    doneToday: true,
    createdAt: "2026-08-01",
    bgColor: "bg-emerald-900/60",
  },
  {
    id: 2,
    name: "Read 20 pages",
    category: "Study",
    weeklyTarget: 7,
    streak: 9,
    doneToday: true,
    createdAt: "2026-08-15",
    bgColor: "bg-sky-900/60",
  },
  {
    id: 3,
    name: "Deep work block",
    category: "Work",
    weeklyTarget: 5,
    streak: 3,
    doneToday: false,
    createdAt: "2026-09-10",
    bgColor: "bg-violet-900/60",
  },
  {
    id: 4,
    name: "Meditate 10 minutes",
    category: "Personal",
    weeklyTarget: 6,
    streak: 0,
    doneToday: false,
    createdAt: "2026-09-25",
    bgColor: "bg-orange-900/50",
  },
  {
    id: 5,
    name: "Drink 2L of water",
    category: "Health",
    weeklyTarget: 7,
    streak: 12,
    doneToday: true,
    createdAt: "2026-08-20",
    bgColor: "bg-cyan-900/60",
  },
  {
    id: 6,
    name: "Practice React for 1 hour",
    category: "Study",
    weeklyTarget: 6,
    streak: 21,
    doneToday: true,
    createdAt: "2026-08-05",
    bgColor: "bg-indigo-900/60",
  },
  {
    id: 7,
    name: "Reply to client messages",
    category: "Work",
    weeklyTarget: 5,
    streak: 6,
    doneToday: false,
    createdAt: "2026-09-01",
    bgColor: "bg-fuchsia-900/50",
  },
  {
    id: 8,
    name: "Write in journal",
    category: "Personal",
    weeklyTarget: 4,
    streak: 2,
    doneToday: false,
    createdAt: "2026-09-22",
    bgColor: "bg-teal-900/60",
  },
];


const HabbitList = () => {
  return (
    <div className="space-y-3">
              {
                habits.map(habit => (
                  <Habbit key={habit.id} {...habit} />
                ))
              }
    </div>
  )
}

export default HabbitList
