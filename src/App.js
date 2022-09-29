import './App.css';
import Meditationbody from './components/Meditationbody/Meditationbody';
import Userinfo from './components/Userinfo/Userinfo';

function App() {
  return (
    <div className="App">
      <div className="lg:grid lg:grid-cols-5">
        <div className='lg:col-span-4 Meditationbody pt-1'>
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
