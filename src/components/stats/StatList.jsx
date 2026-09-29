import React from 'react'
import Stat from './Stat';

const stats = [
  {
    key: "doneToday",
    label: "Done today",
    bgClass: "bg-emerald-950/60 border-emerald-800",
    labelColor: "text-emerald-300",
    valueColor: "text-emerald-100",
  },
  {
    key: "completion",
    label: "Completion",
    bgClass: "bg-amber-950/60 border-amber-800",
    labelColor: "text-amber-300",
    valueColor: "text-amber-100",
    suffix: "%",
  },
  {
    key: "longestStreak",
    label: "Longest streak",
    bgClass: "bg-violet-950/60 border-violet-800",
    labelColor: "text-violet-300",
    valueColor: "text-violet-100",
    suffix: "d",
  },
  {
    key: "totalHabits",
    label: "Total habits",
    bgClass: "bg-sky-950/60 border-sky-800",
    labelColor: "text-sky-300",
    valueColor: "text-sky-100",
  }
];


const StatList = ({ statsValues }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
              
              {
                stats.map(stat => (
                  <Stat 
                  key={stat.key}
                  label={stat.label}
                  bgClass={stat.bgClass}
                  labelColor={stat.labelColor}
                  valueColor={stat.valueColor}
                  value={statsValues[stat.key]}
                  suffix={stat.suffix}
                  />
                ))
              }
                  
            </div>
  )
}

export default StatList
