
import React, { useState } from 'react'
import { Trash, SquarePen, Save } from "lucide-react"
const Habbit = ({ name, category, streak, doneToday, bgColor,id, editId, setEditId, handleUpdateHabbit, handleDeleteHabbit }) => {


    

  const[nameValue, setNameValue] = useState(name);
  const[categoryValue, setCategoryValue] = useState(category);
  const[streakValue, setStreakValue] = useState(streak);
  const[doneTodayValue, setDoneTodayValue] = useState(doneToday);




  const isEditClicked = editId === id ; 

  function handleHabbitForm(e){
    e.preventDefault();
    if (!nameValue) return;
    const updatedHabbit = { id, name: nameValue, category: categoryValue, streak: streakValue, doneToday: doneTodayValue };
      handleUpdateHabbit(updatedHabbit);
  }


  return (
     <form onSubmit={handleHabbitForm} className={`flex items-center justify-between ${bgColor} border border-green-800 rounded-xl p-4`}>
              
                <div className="flex items-center gap-3">
                  <input 
                   type="checkbox"  
                     disabled={!isEditClicked}
                   onChange={isEditClicked ? (e) => setDoneTodayValue(e.target.checked) : undefined}  
                   checked={doneTodayValue} 
                   className="w-5 h-5 rounded accent-blue-500" />
                  <div>
                    {
                      isEditClicked ? (
                <input value={nameValue} onChange={(e) => setNameValue(e.target.value)} type="text" className="block mt-1 w-40 px-2 py-1 text-sm rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      ): (
                        <p className="font-semibold text-white">{name}</p>
                      )
                    }

                    {
                      isEditClicked ? (
                        <select value={categoryValue} onChange={(e) => setCategoryValue(e.target.value)} className="block mt-1 w-28 px-2 py-1 text-xs rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>Health</option>
                          <option>Study</option>
                          <option>Work</option>
                          <option>Personal</option>
                        </select>
                      ):(
                        <span className={`inline-block text-xs font-medium text-black  bg-green-100/50 px-2 py-0.5 rounded-full mt-1`}>
                      {category}
                    </span>
                      )
                    }
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Streak</p>
                    {
                      isEditClicked ? (
                        <input value={streakValue} onChange={(e) => setStreakValue(e.target.value)} type="text" className="mt-1 w-10 px-2 py-1 text-sm rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      ) : (
                        <p className="font-bold text-white">{streak} 🔥</p>
                      )
                    }
                 
                  </div>
                  
                   {
                     isEditClicked ? (
                      <button
                type="button"
                onClick={()=> setEditId(isEditClicked ? null : id)}
                  className="p-2 rounded-lg bg-gray-600 hover:bg-gray-500 text-white cursor-pointer"> <Save className="w-4 h-4" /></button>
                     ) :
                     (
                      <button
                type="submit"
                onClick={()=> 
                  setEditId(isEditClicked ? null : id)}
                  className="p-2 rounded-lg bg-gray-600 hover:bg-gray-500 text-white cursor-pointer">   <SquarePen className="w-4 h-4" /></button>
                     )
                   
                   }
                  <button
                  onClick={()=> handleDeleteHabbit(id) }
                  type="button" className="p-2 rounded-lg bg-red-800 hover:bg-red-700 text-white cursor-pointer"><Trash className="w-4 h-4" /></button>
                </div>
               
              </form>
  )
}

export default Habbit
