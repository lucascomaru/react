import './App.css';

import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';


function App() {

  const cars = [
    {id:1, brand: "Ferrari", color:"Amarela", newCar:true, km: 2500 },
    {id:2, brand: "Camaro", color:"Rosa", newCar:false, km: 3400 },
    {id:3, brand: "Corolla", color:"Amarela", newCar:false, km: 0 }
  ]

  function showMessage (){
    console.log("Evento do componente pai !")
  }

  const[message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender/>
      <ShowUserName name= "Lucas" />
      <CarDetails brand= "WV" km={100000} color="Azul" newCar={false} />
      <CarDetails brand= "Ford" color= "Vermelha"km={0} newCar={true}/>
      <CarDetails brand= "Camaro" color= "Amarelo"km={45000} newCar={false}/>
      {cars.map((car) => (
        <CarDetails
        key={car.id} 
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar} />
      ))}
      <Fragment propFragment= "teste" />
      <Container myValue="testing">
        <p>E este é o conteúdo </p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando container</h5>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
