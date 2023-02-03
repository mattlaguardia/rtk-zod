import { useState } from 'react';
import api from '../api/api';
import Data2 from './Data2';

const { useSourcesQuery } = api;

const Data = () => {
  const [ active, setActive ] = useState(false)
  const { data, isLoading } = useSourcesQuery();

  if (!isLoading) {
    console.log('Logs Sources Query Data:');
    console.log(data);
  }

  return (
    <>
      <h2>Data</h2>

      <p>
        <button onClick={() => setActive(!active)}>Toggle</button>
      </p>

      {
        active && <Data2 />
      }
    </>
    )
  }

export default Data;
