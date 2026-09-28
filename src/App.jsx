import { Trash, SquarePen, ChevronDown } from "lucide-react"

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
          <div className="flex">
            <button className="relative z-10 px-6 py-2 rounded-t-xl text-sm font-semibold bg-slate-800 text-white -mb-px cursor-pointer">
              All
            </button>
            <button className="px-6 py-2 rounded-t-xl text-sm font-medium bg-slate-900/40 text-gray-400 hover:bg-slate-800/60 hover:text-gray-200 cursor-pointer">
              Health
            </button>
            <button className="px-6 py-2 rounded-t-xl text-sm font-medium bg-slate-900/40 text-gray-400 hover:bg-slate-800/60 hover:text-gray-200 cursor-pointer">
              Study
            </button>
            <button className="px-6 py-2 rounded-t-xl text-sm font-medium bg-slate-900/40 text-gray-400 hover:bg-slate-800/60 hover:text-gray-200 cursor-pointer">
              Work
            </button>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-b-2xl rounded-tr-2xl p-5">
            {/* Stats cards */}
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
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-green-950/50 border border-green-800 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <input type="checkbox" checked readOnly className="w-5 h-5 rounded accent-blue-500" />
                  <div>
                    <p className="font-semibold text-white">Morning run</p>
                    <span className="inline-block text-xs font-medium text-green-300 bg-green-900 px-2 py-0.5 rounded-full mt-1">
                      Health
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Streak</p>
                    <p className="font-bold text-white">18 🔥</p>
                  </div>
                  <button className="p-2 rounded-lg bg-gray-600 hover:bg-gray-500 text-white cursor-pointer"><SquarePen className="w-4 h-4" /></button>
                  <button className="p-2 rounded-lg bg-red-800 hover:bg-red-700 text-white cursor-pointer"><Trash className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="flex items-center justify-between bg-blue-950/50 border border-blue-800 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <input type="checkbox" checked readOnly className="w-5 h-5 rounded accent-blue-500" />
                  <div>
                    <p className="font-semibold text-white">Read 20 pages</p>
                    <span className="inline-block text-xs font-medium text-blue-300 bg-blue-900 px-2 py-0.5 rounded-full mt-1">
                      Study
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Streak</p>
                    <p className="font-bold text-white">9 🔥</p>
                  </div>
                  <button className="p-2 rounded-lg bg-gray-600 hover:bg-gray-500 text-white cursor-pointer"><SquarePen className="w-4 h-4" /></button>
                  <button className="p-2 rounded-lg bg-red-800 hover:bg-red-700 text-white cursor-pointer"><Trash className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="flex items-center justify-between bg-purple-950/50 border border-purple-800 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <input type="checkbox" readOnly className="w-5 h-5 rounded accent-blue-500" />
                  <div>
                    <p className="font-semibold text-white">Deep work block</p>
                    <span className="inline-block text-xs font-medium text-purple-300 bg-purple-900 px-2 py-0.5 rounded-full mt-1">
                      Work
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Streak</p>
                    <p className="font-bold text-white">3 🔥</p>
                  </div>
                  <button className="p-2 rounded-lg bg-gray-600 hover:bg-gray-500 text-white cursor-pointer"><SquarePen className="w-4 h-4" /></button>
                  <button className="p-2 rounded-lg bg-red-800 hover:bg-red-700 text-white cursor-pointer"><Trash className="w-4 h-4" /></button>
                </div>
              </div>
            </div>

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
