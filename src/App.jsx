
import TabButtonList from './components/tabs/TabButtonList'
import HabbitList from "./components/habbits/HabbitList"
import StatList from "./components/stats/StatList"
import { ChevronDown } from 'lucide-react'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-800 text-gray-100 px-6 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Habit tracker</h1>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm cursor-pointer">
            <span className="text-lg leading-none">+</span> Add habit
          </button>
        </div>

        {/* Category tabs + panel (folder-tab style, merged as one element) */}
        <div className="mb-6">
         <TabButtonList  />

          <div className="bg-slate-800 border border-slate-700 rounded-b-2xl rounded-tr-2xl p-5">
            {/* Stats cards */}
            <StatList />

            {/* Sort dropdown */}
            <div className="relative mb-5">
              <select className="w-full appearance-none bg-gray-900 border border-gray-700 rounded-xl px-4 py-2 pr-10 text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Sort: streak</option>
                <option>Sort: name</option>
                <option>Sort: category</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            {/* Habit list */}
            <HabbitList />

            {/* See more */}
            <div className="flex justify-center mt-5">
              <button className="px-5 py-2 rounded-lg text-sm font-medium bg-slate-700 text-gray-200 hover:bg-slate-600 cursor-pointer">
                See more
              </button>
            </div>
          </div>
        </div>

        {/* Quote */}
        <p className="text-center text-sm text-gray-500 italic mt-8">
          "Small daily wins compound." — quote of the day
        </p>
      </div>
    </div>
  )
}

export default App
