import './App.scss'
import Navbar from './components/Navbar'
import HeaderComponenet from './components/Header';
function Home() {
  return (
    <div className="Home">
      <> 
        <Navbar></Navbar>
        <HeaderComponenet></HeaderComponenet>
      </>
    </div>
  );
}

export default Home;
