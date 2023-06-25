import './App.css';
import CarDetails from './components/CarDetails';

const cars = [
  {id:1, brand: "Ferrari", color:"Amarela", km: 2500 },
  {id:2, brand: "Camaro", color:"Rosa", km: 3400 },
  {id:3, brand: "Corolla", color:"Amarela",  km: 0 }
]

function App() {
  return (
    <div className="App">
      <div id='div-exibicao'>
        <h1>Desafio CSS</h1>
        <CarDetails />
        {cars.map((car) => (
          <CarDetails
          key={car.id} 
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
