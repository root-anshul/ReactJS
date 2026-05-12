import CarCard from "./Components/CarCard";

const cars = [
  { make: "Toyota", model: "Corolla", year: 2022 },
  { make: "Tesla", model: "Model 3", year: 2021 },
  { make: "Ford", model: "Mustang", year: 1969 }
];

function Shell({title,children}){
  return (
    <>
    <h1>children in react</h1>
        <strong>
          {title} <br />
          {children}
        </strong>
    </>
  )
}

function App() {
  return (
    <>
    <Shell title= "Batman" children="Superman"/>
    <div>
        <h1>this is inside Shell</h1>
        <p>this is also inside shell</p>
    </div>
    <Shell/>

    <h1>Hello World</h1>
    <section>
      
      {cars.map((car)=>(
        <CarCard 
        key={car.year}
        car = {car}/>
      ))}
       
    </section>
    </>
  )
}

export default App
