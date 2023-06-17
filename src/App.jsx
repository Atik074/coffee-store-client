import { useLoaderData,  } from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard"
import { useState } from "react"


function App() {
const allCoffee = useLoaderData()
  const [coffees , setCoffees] = useState(allCoffee)


 return (
    <div className="m-20">
      <h1 className='text-purple-800 text-5xl mt-5'>Our coffe items : {allCoffee.length}</h1>
      <div className="grid md:grid-cols-2 gap-4">
      {
         coffees.map(coffee =><CoffeeCard
           key={coffee._id}
          coffee={coffee}
          coffees ={coffees}
          setCoffees = {setCoffees}
        >

        </CoffeeCard>)
      } 

      </div>
     
    </div>
  )
}

export default App
