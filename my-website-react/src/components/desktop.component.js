import { Routes, Route } from 'react-router-dom'
import Layout from './Desktop/Layout'
import Home from './Desktop/Home'


export const Desktop = () => {

    return (

        <Routes>
            <Route path='/' element={<Layout />}>                
                <Route index element={<Home />} />      {/* default route */}
            </Route>
        </Routes>

    );
}


