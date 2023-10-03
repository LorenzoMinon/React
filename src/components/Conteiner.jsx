import React, { useState, useEffect } from 'react'


export const Conteiner = () => {

  const [data, setData] = useState([])

  //JSON armarlo en otro lado. exportar y aca lo importa. Generar las card de los productos con boostrap.
  const productos = [
    {
        id: 1, 
        producto: 'Uno',
        descripition: 'Bueno'
    },
    {
        id: 2, 
        producto: 'Dos',
        descripition: 'Bueno'
    },
    {
        id: 3, 
        producto: 'Tres',
        descripition: 'Bueno'
    },
  ]

  const getData = async () => {
    const result = await productos
    const data = await result.json()
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])
  
 

  return (
    <div>
        <h1>Productos</h1>
        {
            data.map((elem)=> <span key={elem.id}>{elem.producto}</span>)
        }
    </div>
  )
}
