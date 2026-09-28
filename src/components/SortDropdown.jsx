import React from 'react'
import { ChevronDown } from 'lucide-react'

const SortDropdown = () => {
  return (
    <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-200">Sort habits</label>
        <div className="relative">
              <select className="w-full appearance-none bg-gray-900 border border-gray-700 rounded-xl px-4 py-2 pr-10 text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>by streak</option>
                <option>by name</option>
                <option>by category</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
    </div>
  )
}

export default SortDropdown
