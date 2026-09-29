import { useState } from 'react'
import TabButtonList from './components/tabs/TabButtonList'
import HabbitList from "./components/habbits/HabbitList"
import StatList from "./components/stats/StatList"
import SortDropdown from "./components/SortDropdown"
import Swal from 'sweetalert2'
import NewHabbitForm from './components/habbits/NewHabbitForm'

const App = () => {

   const [activeTab, setActiveTab] = useState("All")

   const [nameValue, setNameValue] = useState("")
   const [categoryValue, setCategoryValue] = useState("Health")
   const [streakValue, setStreakValue] = useState(0)
   const [doneTodayValue, setDoneTodayValue] = useState(false)
   const[habbitFormVisible, setHabbitFormVisible] = useState(false);
   const[habitsList, setHabitsList] = useState([]);

     const [showAll, setShowAll] = useState(false);

 
  //getting sorted habits
  const sortByStreak = habitsList.slice().sort((a, b) => b.streak - a.streak);
  const sortByName = habitsList.slice().sort((a, b) => a.name.localeCompare(b.name));
  const sortByCategory = habitsList.slice().sort((a, b) => a.category.localeCompare(b.category));

  //tabwise habbits display
 const filteredHabits =
  activeTab === "All"
    ? habitsList
    : habitsList.filter(habit => habit.category === activeTab);

 const visibleHabbits = showAll
  ? filteredHabits
  : filteredHabits.slice(0, 4);

  

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

  // Function to handle sorting habits based on selected criteria
  function handleSort(sortType){
      if(sortType === "streak"){
        setHabitsList(sortByStreak);
      }else if(sortType === "name"){
        setHabitsList(sortByName);
      }else if(sortType === "category"){
        setHabitsList(sortByCategory);
      }
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
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Habit tracker</h1>
          <button onClick={() => setHabbitFormVisible(open=>!open)} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm cursor-pointer">
            <span className="text-lg leading-none">+</span> Add habit
          </button>
        </div>

        {/* Add habit form */}
        {habbitFormVisible && (
        <NewHabbitForm
         handleAddHabitForm={handleAddHabitForm} 
        setDoneTodayValue={setDoneTodayValue}
        setNameValue={setNameValue}
        setCategoryValue={setCategoryValue}
        setStreakValue={setStreakValue}
        nameValue={nameValue}
        categoryValue={categoryValue}
        streakValue={streakValue}
        doneTodayValue={doneTodayValue}

         />
        )}

        {/* Category tabs + panel (folder-tab style, merged as one element) */}
        <div className="mb-6">
         <TabButtonList
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          />

          <div className={`bg-slate-800 border border-slate-700 ${activeTab === "All" ? "" : "rounded-tl-2xl rounded-tr-2xl"} p-5`}>
            {/* Stats cards */}
            <StatList />

            {/* Sort dropdown */}
            <SortDropdown handleSort={handleSort} />

            {/* Habit list */}
            <HabbitList 
            habitsList={visibleHabbits} 
            handleUpdateHabbit={handleUpdateHabbit}
            handleDeleteHabbit={handleDeleteHabbit}
             />

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
