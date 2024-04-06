import './App.css';
import Given from './Components/Given';
import Practice from './Components/Predicted';


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/given' element={<Given />} />
        <Route exact path='/predicted' element={<Practice />} />
      </Routes>
    </>
  );
}

export default App;
