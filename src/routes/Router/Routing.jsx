import { Route, Routes } from 'react-router-dom';
import Main from '../../views/Main/Main';

const Routing = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Main />} />
            <Route path={'/goods'} element={''} />
            <Route path={'/cart'} element={''} />
            <Route path={'/cabinet'} element={''} />
            <Route path={'/login'} element={''} />
        </Routes>
    );
};

export default Routing;
