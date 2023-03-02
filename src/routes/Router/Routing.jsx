import { Route, Routes } from 'react-router-dom';
import Main from '../../views/Main/Main';
import GoodsList from '../../views/GoodsList';
import Goods from '../../views/Goods';

const Routing = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Main />} />
            <Route path={'goods'} element={<GoodsList />} />
            <Route path={'goods/:id'} element={<Goods />} />
            <Route path={'cart'} element={''} />
            <Route path={'cabinet'} element={''} />
            <Route path={'login'} element={''} />
        </Routes>
    );
};

export default Routing;
