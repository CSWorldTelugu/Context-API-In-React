
import { createContext } from 'react'
import './App.css'
import Home from './Home'
export const context = createContext()

function App() {



    let isAdmin = 'false';

    let p = {
        name: "fghj",
        price: 567890
    }

    return (

        <>

            <context.Provider value={p}>
                <Home></Home>

            </context.Provider>






        </>
    )
}











export default App