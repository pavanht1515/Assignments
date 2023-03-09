// import logo from './logo.svg';
import './App.css';
import File1 from './components/File1';
import File2 from './components/File2';
import File3 from './components/File3';


function App() {
  return (
    <>
      <div>
        <File1 />
      </div>

      <div style={{marginLeft:230,marginTop:40}}>
        <File2 />
      </div>

      <div style={{marginLeft:230,marginTop:40}}>
        <File3/>
      </div>

    </>
  )
}

export default App;
