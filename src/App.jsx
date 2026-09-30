import { useState } from 'react'
import TabButtonList from './components/tabs/TabButtonList'
import HabbitList from "./components/habbits/HabbitList"
import StatList from "./components/stats/StatList"
import SortDropdown from "./components/SortDropdown"
import Swal from 'sweetalert2'
import NewHabbitForm from './components/habbits/NewHabbitForm'
import Header from './components/Header'

const App = () => {

   const [activeTab, setActiveTab] = useState("All")
   const[habbitFormVisible, setHabbitFormVisible] = useState(false);
   const[habitsList, setHabitsList] = useState([]);
   const [showAll, setShowAll] = useState(false);
   const [sortType, setSortType] = useState("streak");

 
  //getting sorted habits
  // const sortByStreak = habitsList.slice().sort((a, b) => b.streak - a.streak);
  // const sortByName = habitsList.slice().sort((a, b) => a.name.localeCompare(b.name));
  // const sortByCategory = habitsList.slice().sort((a, b) => a.category.localeCompare(b.category));
const sortedHabits = habitsList.slice().sort((a, b) => {
  if (sortType === "name") return a.name.localeCompare(b.name);
  if (sortType === "category") return a.category.localeCompare(b.category);
  return a.streak - b.streak;
});
  

  //getting summerized values for infor cards
  const totalHabits = habitsList.length;
const doneToday = habitsList.filter(habit => habit.doneToday).length;
const completion = totalHabits === 0 ? 0 : Math.round((doneToday / totalHabits) * 100);
const longestStreak = totalHabits === 0 ? 0 : Math.max(...habitsList.map(habit => habit.streak));

const statsValues = {
  totalHabits,
  doneToday,
  completion,
  longestStreak
};

  //tabwise habbits display
 const filteredHabits =
  activeTab === "All"
    ? sortedHabits
    : sortedHabits.filter(habit => habit.category === activeTab);

 const visibleHabbits = showAll
  ? filteredHabits
  : filteredHabits.slice(0, 4);

  

   // Function to handle adding a new habit

function handleAddHabit(habitData) {
  if (!habitData.name) {
    Swal.fire({ icon: "error", title: "Oops...", text: "Insert atleast one value!" });
    return;
  }

  const newHabbit = { id: Date.now(), ...habitData };
  setHabitsList(prevList => [...prevList, newHabbit]);
  setHabbitFormVisible(false);

  Swal.fire({ icon: "success", text: "Success! Habit added.", draggable: true });

}

    // Function to handle updating an existing habit
     function handleUpdateHabbit(updatedHabbit) {
    setHabitsList(prevList =>
      prevList.map(habit => habit.id === updatedHabbit.id ? updatedHabbit : habit)
    );
     Swal.fire({
  icon: "success",
  text: "Success! Habit updated.",
  draggable: true
});
  }

  // Function to handle sorting habits based on selected criteria
  function handleSort(sortType){
        setSortType(sortType);
  }

  // Function to handle deleting a habit
  function handleDeleteHabbit(id) {

    // Show confirmation dialog before deleting a habit
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
      setHabitsList(prevList => prevList.filter(habit => habit.id !== id));
    Swal.fire({
    title: "Deleted!",
    text: "Habbit data deleted successfully!",
    icon: "success"
  });}
});
  }




  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-800 text-gray-100 px-6 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <Header setHabbitFormVisible={setHabbitFormVisible} />

        {/* Add habit form */}
        <div className={`grid transition-all duration-300 ease-in-out ${habbitFormVisible ? "grid-rows-[1fr] opacity-100 mb-6" : "grid-rows-[0fr] opacity-0"}`}>
  <div className="overflow-hidden">
    <NewHabbitForm
     onAddHabit={handleAddHabit}
    />
  </div>
</div>

        {/* Category tabs + panel (folder-tab style, merged as one element) */}
        <div className="mb-6">
         <TabButtonList
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          />

          <div className={`bg-slate-800 border border-slate-700 ${activeTab === "All" ? "" : "rounded-tl-2xl rounded-tr-2xl"} p-5`}>
            {/* Stats cards */}
            <StatList statsValues={statsValues} />

            {/* Sort dropdown */}
            <SortDropdown handleSort={handleSort} />

            {/* Habit list */}
            {
              visibleHabbits.length !== 0 ? (
            <HabbitList 
            habitsList={visibleHabbits} 
            handleUpdateHabbit={handleUpdateHabbit}
            handleDeleteHabbit={handleDeleteHabbit}
             /> ):(
              <p className="text-center text-gray-400">No habits in this category yet.</p>
             )
            }
            

            {/* See more */}
            <div className="flex justify-center mt-5">
              <button
              onClick={() => setShowAll(s=>!s)}
              className="px-5 py-2 rounded-lg text-sm font-medium bg-slate-700 text-gray-200 hover:bg-slate-600 cursor-pointer">
                {showAll ? "See less" : "See more"}
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
