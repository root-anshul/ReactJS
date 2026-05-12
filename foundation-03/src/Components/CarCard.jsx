function CarCard({car}){
  return (
  <article>
    <div>{car.model}</div>
    <h3>{car.make}</h3>
    <p>Year :- {car.year}</p>
  </article>
  )
}

export default CarCard