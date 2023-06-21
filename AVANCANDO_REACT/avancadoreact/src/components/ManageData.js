import { useState } from "react";

const ManageData = () => {
    let someData = 10;

    const[number, setNumber] = useState(15);

  return (
    <div>
      <div>
          <h2>Valor: {someData}</h2>
          <button onClick={()=> {someData = 15}}>Mudar variável</button>
      </div>
      <div>
        <h1>Valor: {number}</h1>
        <button onClick={() => setNumber(25)}>Mudar o state</button>
      </div>
    </div>
  );
};

export default ManageData;