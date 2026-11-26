import React, {useState} from 'react';
import Content from './component/Content'

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggletheme = () =>{
    setTheme(prev => (prev === "light" ? "dark": "light"));
  };  
  return (
    <div className={theme === "light" ? "bg-white text-black" : "bg-black text-white"}> 
      <Content theme = {theme} toggletheme={toggletheme}/>         
    </div>
  )
}
export default App
