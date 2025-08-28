import { useState,useEffect } from 'react';
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth';
import {login, logout} from './store/authSlice'
import { Header,Footer } from './components';

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL); // If i made my app through create-react-app
  // console.log(import.meta.env.VITE_APPWRITE_URL); // If i made my app through vite


  const [loaading,setLoading]=useState(true);
  const dispatch= useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }
      else{
        dispatch(logout());
      }
    })
    // .cath((error)=>{
    //   dispatch(logout());
    // })
    .finally(()=> setLoading(false));
  }, [])
  return !loaading ? 
  (
    <div className='min-h-screen flex flew-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          Todo: {/* <Outlet/> */}
        </main>
        <Footer/>

      </div>
    </div>
  ) : 
  (
    null
  );
}

export default App
