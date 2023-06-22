import {useState}from 'react'


function ListRender() {
    const [list] = useState(["Lucas", "Pedro", "Carlos"])

    const [users, setUsers] = useState([
        {id:1, name: "Lucas", age: 26},
        {id: 28289189212, name: "João", age: 29 },
        {id: 28289182, name: "Pedro", age: 44 },
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevusers) => {
            return prevusers.filter((user) => randomNumber !== user.id)

        })
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user)=> (
                <li key={user.id}>
                     {user.name} - {user.age} </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  );
};

export default ListRender;