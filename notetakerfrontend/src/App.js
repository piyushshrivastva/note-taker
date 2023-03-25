
import './App.css';
import Addnote from './Components/Addnote';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Login></Login>
      <Register></Register>
      <Homepage></Homepage>
      <Addnote></Addnote>
    </div>
  );
}

export default App;
