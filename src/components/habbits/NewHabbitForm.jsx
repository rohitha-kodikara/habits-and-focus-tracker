import React from 'react'

const NewHabbitForm = ({ handleAddHabitForm, setDoneTodayValue, doneTodayValue, setNameValue, nameValue, setCategoryValue, categoryValue, setStreakValue, streakValue }) => {
  return (
    <form onSubmit={handleAddHabitForm} className="flex items-center justify-between bg-slate-800 border border-green-800 rounded-xl p-4 mb-6">

          <div className="flex items-center gap-3">
            <input type="checkbox" onChange={(e) => setDoneTodayValue(e.target.checked)} checked={doneTodayValue} className="w-5 h-5 rounded accent-blue-500" />
            <div>
              <input value={nameValue} onChange={(e) => setNameValue(e.target.value)} type="text" className="block mt-1 w-40 px-2 py-1 text-sm rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />

              <select value={categoryValue} onChange={(e) => setCategoryValue(e.target.value)} className="block mt-1 w-28 px-2 py-1 text-xs rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Health</option>
                <option>Study</option>
                <option>Work</option>
                <option>Personal</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-gray-400">Streak</p>
              <input value={streakValue} onChange={(e) => setStreakValue(e.target.value)} type="text" className="mt-1 w-10 px-2 py-1 text-sm rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />

            </div>

            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium cursor-pointer">Submit</button>
          </div>

        </form>
  )
}

export default NewHabbitForm
