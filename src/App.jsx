import "./App.css"
import {jobs} from "./components/card"

import Card from "./components/card"

const App = () => {
  return (
    <div className="parent">
      {jobs.map(function(elem){
         return <Card {...elem} />
      })}
    
    </div>
    
  )
}

export default App