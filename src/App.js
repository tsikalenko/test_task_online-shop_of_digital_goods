import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Routing from './routes/Router/Routing';

function App() {
    return (
        <div className='app'>
            <Header />
            <Routing />
            <Footer />
        </div>
    );
}

export default App;
