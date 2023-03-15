import { useContext } from 'react'
import { context } from './App'

function Product() {


    let data = useContext(context)


    return (
        <>
            <h1>This is Product component </h1>
            <h2>price:{data.price}</h2>
            <h2>name:{data.name}</h2>


        </>
    )
}


export default Product