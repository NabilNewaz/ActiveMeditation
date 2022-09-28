import './App.css';
import Meditationbody from './components/Meditationbody/Meditationbody';
import Userinfo from './components/Userinfo/Userinfo';

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-5">
        <div className='col-span-4 Meditationbody'>
          <Meditationbody></Meditationbody>
        </div>
        <div>
          <Userinfo></Userinfo>
        </div>
      </div>
    </div>
  );
}

export default App;
