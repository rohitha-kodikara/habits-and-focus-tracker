
<img width="1330" height="842" alt="image" src="https://github.com/user-attachments/assets/4fbf2a26-6766-43db-be75-415091f6d279" />


Habit & Focus Tracker (Live URL : https://habits-and-focus-tracker.vercel.app/)

Features Developed

1) Add new habit (form with name, category, streak, done-today fields)
   
2) Show/hide add-habit form toggle

3) Form validation on add (rejects empty name)
   
4) Success/error alerts on add

5) Display habits grouped by category tabs

6) "All" tab showing every habit

7) Sort habits by streak, name, or category (default: streak)

8) Update/edit an existing habit inline

9) Success alert on update

10) Delete a habit with confirmation dialog

11) Success alert on delete

12) "See more"/"See less" toggle to limit visible habits (default 4)

13) Empty-state message when a category has no habits

14) Summary stats: total habits, done today, completion percentage, longest streak


Gaps I found after developing the project

01.) The doneToday checkbox in Habbit.jsx:31 is editable even outside edit mode, since it isn't disabled — this lets users change it without clicking the edit button.
fixed it using conditional check.
Habbit.jsx
 disabled={!isEditClicked}
 onChange={isEditClicked ? (e) => setDoneTodayValue(e.target.checked) : undefined}  
                   
02.) bydefault the sort option was streak but the list view was not sorted. fixed it.
App.jsx

const sortedHabits = habitsList.slice().sort((a, b) => {
  if (sortType === "name") return a.name.localeCompare(b.name);
  if (sortType === "category") return a.category.localeCompare(b.category);
  return a.streak - b.streak;
});

  const filteredHabits =
  activeTab === "All"
    ? sortedHabits
    : sortedHabits.filter(habit => habit.category === activeTab);

 const visibleHabbits = showAll
  ? filteredHabits
  : filteredHabits.slice(0, 4);

03.) needed display suffixes like % for a specific values at Stat boxes.
fixed it by adding suffix properties to stat object array.

04.) if there are no any habbit cards under a specific tab,it doesnt show any feedback or message. fixe it using a conditional logic
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



React Concepts Practiced

1) Component composition and props-based communication

2) useState for local and lifted state
   
3) Controlled form inputs

4) Derived/computed values instead of redundant state
   
5) Conditional rendering
   
6) Immutable state updates (map, filter, spread)
    
7) List rendering with stable keys


Detailed project development process

I built this project to practice core React concepts by creating a small habit-tracking app. I used AI assistance for parts of the UI styling and layout, but all business logic, state design, and architectural decisions — how state is structured, where it lives, and how components communicate — were made by me.

Add Record
NewHabbitForm renders four form fields and a submit button, backed by four useState hooks — nameValue, categoryValue, streakValue, and doneTodayValue. Each input has an onChange handler that updates its corresponding state, keeping the displayed value in sync with user input.

On submit, handleSubmit collects these values into a plain object and passes it to onAddHabit, a function passed down as a prop from App. I kept the form state inside NewHabbitForm since it's only relevant while filling out the form, while the logic for adding a record lives in App, since it operates on habitsList, which is shared across the app.

In App, handleAddHabit(habitData) receives that object. If habitData.name is empty, it shows a warning alert and stops; otherwise, it generates an id, appends the new habit to habitsList via setHabitsList, closes the form, and shows a success alert.

A habbitFormVisible state controls whether the add-habit form is shown or hidden.

Record Display

New records pass through filtering and slicing logic before being rendered. Habits are grouped by category tabs using activeTab state, updated by TabButtonList through setActiveTab. When activeTab is "All", every habit is shown; otherwise, only habits matching that category are kept.

To avoid showing a long list at once, only 4 records are displayed by default, controlled by a showAll state. When showAll is false, only the first 4 items of the filtered list are shown; clicking "See more" toggles showAll to reveal the rest.

Sorting

Habits can be sorted by streak, name, or category. I track the selected option in a sortType state (defaulted to "streak"), and derive a sorted list from habitsList each render based on that state, rather than storing a sorted copy back into the source data. This keeps the original habit list separate from how it's currently displayed, so switching tabs or filters doesn't lose the underlying data order.

Update Record

Each Habbit card keeps four local states (nameValue, categoryValue, streakValue, doneTodayValue) initialized from that habit's own data. These aren't shared with NewHabbitForm because NewHabbitForm's state represents a single new, not-yet-created habit, while each Habbit card's state represents edits to one specific existing habit. Since HabbitList renders many Habbit instances, sharing state across cards (or with the add-form) would let simultaneous add/edit actions overwrite each other's values. Keeping state local to each card avoids that and needs no prop drilling through HabbitList.

editId (owned by App) tracks which habit is currently being edited. Each card compares editId === id to decide whether to show editable inputs or plain text. Clicking the edit button calls setEditId(id), switching that card into edit mode. Submitting the form runs handleHabbitForm: if nameValue isn't empty, it builds updatedHabbit from local state and calls handleUpdateHabbit(updatedHabbit), a prop from App.

In App, handleUpdateHabbit updates habitsList by mapping over it and replacing the entry with a matching id.
setHabitsList(prevList =>
  prevList.map(habit => habit.id === updatedHabbit.id ? updatedHabbit : habit)
);

Record Delete

Clicking the delete button calls handleDeleteHabbit(id). It shows a confirmation alert (via SweetAlert2) before proceeding. If confirmed, it updates habitsList using filter, keeping every habit except the one whose id matches:

setHabitsList(prevList => prevList.filter(habit => habit.id !== id));

Summary Stats
I calculate summary values from habitsList and store them in derived variables. totalHabits counts all habits, doneToday counts habits marked complete for the day, completion calculates the completion percentage (guarding against division by zero), and longestStreak finds the highest streak, defaulting to 0 when the list is empty. These are grouped into a statsValues object and passed to StatList as a single prop.
