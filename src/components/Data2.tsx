import { useEffect, useState } from 'react';
import api from '../api/api';
import Source from '../models/source';

const { useGetSourceQuery } = api;

const Data2 = () => {
  const { data, isLoading } = useGetSourceQuery(`${import.meta.env.VITE_SOURCE_ID}`);

  if (!isLoading && data) {
    console.log('Logs Single Source Query Data:');
    console.log(data);

    console.log('Logs Modeled Source Data');
    console.log(new Source(data));
  }


  return (
    <>
      { isLoading ?
        <>Loading...</> :
        <code>
          { JSON.stringify(data) }
        </code>
      }
    </>
  )
}

export default Data2;
