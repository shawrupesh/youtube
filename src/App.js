import './App.css';
import Header from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
       <Header />
    <div className='flex'>
      <Sidebar />
        <Outlet />
</div>
   
    </>
 
  );
}

export default App;
