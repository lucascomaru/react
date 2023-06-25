import { useState } from 'react';

const UserDetails = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Lucas", age: 26, profissao: 'Programador' },
    { id: 2, name: "João", age: 29, profissao: 'Taxista' },
    { id: 3, name: "Pedro", age: 16, profissao: 'Eletricista' },
  ]);

  const filteredUsers = users.filter(user => user.age > 18);

  return (
    <div>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} - {user.profissao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
