import React from 'react'

const TabButton = ({ label, activeTab, handleActiveTab }) => {
    const isActiveTab = activeTab === label
  return (
     <button
       className={`relative z-10 px-6 py-2 rounded-t-xl text-sm font-semibold -mb-px cursor-pointer ${
         isActiveTab
           ? "bg-slate-800 text-white"
           : "bg-slate-900/40 text-gray-400 hover:bg-slate-800/60 hover:text-gray-200"
       }`}
       onClick={() => handleActiveTab(label)}
     >
              {label}
     </button>
  )
}

export default TabButton
