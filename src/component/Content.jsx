import React from 'react'

import Rightcontent from './Rightcontent'

const Content = ( props) => {
  console.log(props.theme)
  return (
    <div >        
      <Rightcontent theme={props.theme} toggletheme={props.toggletheme}/>  
            
    </div>
  )
}

export default Content
