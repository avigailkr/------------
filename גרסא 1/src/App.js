import './App.css';
import Board from './Components/Board';
import Forum from './Components/Forum';
import Statistic from './Components/Statistic';
import About from './Components/About';
import Help from './Components/Help';
import Chat  from './Components/chat/Chat';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from "react-router-dom";
import "./Components/style.css";
import Property from './Components/Property';
import Form from './Components/AddProp/Form';


function App() {
  return (
  <div className="App">

    <div className="topnav">
      <Link className="active" to="apartment">דירות</Link>
      <Link to="addApar">להעלאת מודעה</Link>
      <Link to="board">לוח</Link>
      <Link to="forum">פורומים</Link>
      <Link to="statistic">סטטיסטיקה</Link>
      <Link to="help">עזרה</Link>
      <Link to="about">אודות</Link>
    </div>

      <Routes>
      <Route index element={<Property/>}/>
      <Route path="apartment" element={<Property/>}/>
      <Route path="addApar" element={<Form/>}/>
      <Route path="board" element={<Board/>}/>
      <Route path="forum" element={<Forum/>}/>
      <Route path="statistic" element={<Statistic/>}/>
      <Route path="help" element={<Help/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="chat" element={<Chat/>}/>
      </Routes>


  </div>
  );
}

export default App;
