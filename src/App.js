import './App.css';
import Leftnav from "./componentss/leftsidebar"; 
import MiddileSide from "./componentss/middilecontainer/middileside";
import Rightnav from "./componentss/rightcontainer/rightcontainer"
function App() {
  return (
    <div className="App">
      <div className='leftSideHome'>
        <Leftnav />
      </div>
      <div className='middileSide'>
        <MiddileSide/>
      </div>
      <div className='rightSide'>
   <Rightnav/>
      </div>
     
    </div>
  );
}

export default App;
