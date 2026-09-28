import React from 'react'
import { Trash, SquarePen } from "lucide-react"
const Habbit = ({ name, category, streak, doneToday, bgColor }) => {
  return (
     <div className={`flex items-center justify-between ${bgColor} border border-green-800 rounded-xl p-4`}>
                <div className="flex items-center gap-3">
                  <input type="checkbox" checked={doneToday} readOnly className="w-5 h-5 rounded accent-blue-500" />
                  <div>
                    <p className="font-semibold text-white">{name}</p>
                    <span className={`inline-block text-xs font-medium text-white  bg-black/50 px-2 py-0.5 rounded-full mt-1`}>
                      {category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Streak</p>
                    <p className="font-bold text-white">{streak} 🔥</p>
                  </div>
                  <button className="p-2 rounded-lg bg-gray-600 hover:bg-gray-500 text-white cursor-pointer"><SquarePen className="w-4 h-4" /></button>
                  <button className="p-2 rounded-lg bg-red-800 hover:bg-red-700 text-white cursor-pointer"><Trash className="w-4 h-4" /></button>
                </div>
              </div>
  )
}

export default Habbit
