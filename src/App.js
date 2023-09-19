import './App.css';
import SavedCities from './components/SavedCities';
import SearchBar from './components/SearchBar';
import TimeAndLocation from './components/TimeAndLocation';
import TempAndDetails from './components/TempAndDetails';

function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-cyan-700 h-fit shadow-xl'>
      <SavedCities />
      <SearchBar />

      <TimeAndLocation />
      <TempAndDetails />

    </div>
  );
}

export default App;
