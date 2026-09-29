import React, { useState } from 'react'
import TabButton from './TabButton'

const tabs = ["All", "Health", "Study", "Work","Personal"]

const TabButtonList = ({ activeTab, setActiveTab }) => {


    function handleActiveTab(tab) {
        setActiveTab(tab);
    }

  return (
     <div className="flex">
           {tabs.map((tab) => (
             <TabButton 
             key={tab} 
             label={tab} 
             activeTab={activeTab} 
             handleActiveTab={handleActiveTab}  
             />
           ))}
          </div>
  )
}

export default TabButtonList
