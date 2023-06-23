import React from 'react'

const Fragment = ({propFragment}) => {
  return (
    <>
        <h2>Primeiro título</h2>
        <h2>Segundo título</h2>
        <h4>{propFragment}</h4>
    </>
  );
};

export default Fragment;