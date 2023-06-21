import {useState}from 'react'


function ListRender() {
    const [list] = useState(["Lucas", "Pedro", "Carlos"])
  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  );
};

export default ListRender;