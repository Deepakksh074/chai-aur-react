import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const [data, setData] = useState(useLoaderData());
    useEffect(() => {
        fetch('https://api.github.com/users/deepak2073').then(response => response.json()).then(data => setData(data));

    },[])
  return (
    <div className='text-center m-4 p-2 bg-gray-500  text-white text-3xl'>Github: {data.login}
    <img className="text-center" src={data.avatar_url} alt="Github image" width={300} />
    </div>

    
    
  )
}

export default Github
export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/deepak2073')
    return response.json();
}