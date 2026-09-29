import React from 'react'

const Stat = ({  label, bgClass, labelColor, valueColor, value, suffix }) => {
    console.log(value);
  return (
    <div className={`${bgClass} border rounded-xl p-4`}>
                <p className={`text-sm ${labelColor}`}>{label}</p>
                <p className={`text-2xl font-bold ${valueColor}`}>{value}{suffix}</p>
     </div>
  )
}

export default Stat
