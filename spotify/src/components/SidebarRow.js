import React from 'react'
import "./../css/Sidebarrow.css";

function SidebarRow({ selected, Icon, title }) {
    return (
        <div className={`sidebar-row ${selected && 'sidebar-row-active'}`}>
            <Icon className="sidebar-row-icons" />
            <h1 className="sidebar-row-headings">{title}</h1>
        </div>
    )
}

export default SidebarRow
