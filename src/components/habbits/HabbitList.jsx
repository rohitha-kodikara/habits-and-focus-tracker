import React, { useState } from 'react'
import { Trash, SquarePen } from "lucide-react"
import Habbit from "./Habbit"



const HabbitList = ({ habitsList, handleUpdateHabbit, handleDeleteHabbit }) => {

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
                  handleUpdateHabbit={handleUpdateHabbit}
                  handleDeleteHabbit={handleDeleteHabbit}
                  />
                ))
              }
    </div>
  )
}

export default HabbitList
