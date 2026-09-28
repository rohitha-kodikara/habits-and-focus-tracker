import React from 'react'

const StatList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
              <div className="bg-sky-950/60 border border-sky-800 rounded-xl p-4">
                <p className="text-sm text-sky-300">Total habits</p>
                <p className="text-2xl font-bold text-sky-100">6</p>
              </div>
              <div className="bg-emerald-950/60 border border-emerald-800 rounded-xl p-4">
                <p className="text-sm text-emerald-300">Done today</p>
                <p className="text-2xl font-bold text-emerald-100">4</p>
              </div>
              <div className="bg-amber-950/60 border border-amber-800 rounded-xl p-4">
                <p className="text-sm text-amber-300">Completion</p>
                <p className="text-2xl font-bold text-amber-100">67%</p>
              </div>
              <div className="bg-violet-950/60 border border-violet-800 rounded-xl p-4">
                <p className="text-sm text-violet-300">Longest streak</p>
                <p className="text-2xl font-bold text-violet-100">18d</p>
              </div>
            </div>
  )
}

export default StatList
