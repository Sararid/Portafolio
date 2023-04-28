import './styles/App.scss';
//component
import NavigationScreens from './routes/NavigationPages';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <NavigationScreens />
      <Footer />
    </div>
  );
}

export default App;
