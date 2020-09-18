import React from 'react'
import "./styles/SidebarOption.css"

export const SidebarOption = ({option, Icon})=>{
    return(
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption_icon"/>}
            {Icon ?<h4>{option}</h4> :<p>{option}</p>}
        </div>
    )
}