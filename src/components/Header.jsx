import React from 'react'


const Header = ({ setHabbitFormVisible }) => {
  return (
    <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Habit tracker</h1>
          <button onClick={() => setHabbitFormVisible(open=>!open)} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm cursor-pointer">
            <span className="text-lg leading-none">+</span> Add habit
          </button>

        
        </div>
  )
}

export default Header
