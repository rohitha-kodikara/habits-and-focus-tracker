import { useState } from 'react'
import TabButtonList from './components/tabs/TabButtonList'
import HabbitList from "./components/habbits/HabbitList"
import StatList from "./components/stats/StatList"
import SortDropdown from "./components/SortDropdown"
import Swal from 'sweetalert2'

const App = () => {

   const [activeTab, setActiveTab] = useState("All")

   const [nameValue, setNameValue] = useState("")
   const [categoryValue, setCategoryValue] = useState("Health")
   const [streakValue, setStreakValue] = useState(0)
   const [doneTodayValue, setDoneTodayValue] = useState(false)
   const[habbitFormVisible, setHabbitFormVisible] = useState(false);
   const[habitsList, setHabitsList] = useState([]);

   // Function to handle adding a new habit
   function handleAddHabitForm(e) {
    e.preventDefault();
    if (!nameValue){
      //alert for missing habit name
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Insert atleast one value!",

      });
      return;
    }
    
    const newHabbit ={
      id: Date.now(),
      name: nameValue,
      category: categoryValue,
      streak: streakValue,
      doneToday: doneTodayValue,
    }

    setHabitsList(prevList => [...prevList, newHabbit]);

    setNameValue("");
    setCategoryValue("Health");
    setStreakValue(0);
    setDoneTodayValue(false);
    setHabbitFormVisible(false);

    //alert for success message
    Swal.fire({
  icon: "success",
  text: "Success! Habit added.",
  draggable: true
});
  
   }

    // Function to handle updating an existing habit
     function handleUpdateHabbit(updatedHabbit) {
    setHabitsList(prevList =>
      prevList.map(habit => habit.id === updatedHabbit.id ? updatedHabbit : habit)
    );
  }


  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-800 text-gray-100 px-6 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Habit tracker</h1>
          <button onClick={() => setHabbitFormVisible(open=>!open)} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm cursor-pointer">
            <span className="text-lg leading-none">+</span> Add habit
          </button>
        </div>

        {/* Add habit form */}
        {habbitFormVisible && (
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
        )}

        {/* Category tabs + panel (folder-tab style, merged as one element) */}
        <div className="mb-6">
         <TabButtonList activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className={`bg-slate-800 border border-slate-700 ${activeTab === "All" ? "" : "rounded-tl-2xl rounded-tr-2xl"} p-5`}>
            {/* Stats cards */}
            <StatList />

            {/* Sort dropdown */}
            <SortDropdown />

            {/* Habit list */}
            <HabbitList  habitsList={habitsList} handleUpdateHabbit={handleUpdateHabbit} />

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
