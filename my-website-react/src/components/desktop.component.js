import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'


export const Desktop = () => {

    return (

        <Routes>
            <Route path='/' element={<Layout />} />
        </Routes>

    );
}


