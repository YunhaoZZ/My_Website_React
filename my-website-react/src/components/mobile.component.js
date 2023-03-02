import { Routes, Route } from 'react-router-dom'
import LayoutMobile from './LayoutMobile'


export const Mobile = () => {

    return (

        <Routes>
            <Route path='/' element={<LayoutMobile />} />
        </Routes>

    );
}

