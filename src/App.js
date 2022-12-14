import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile />}/>  
            <Route path='/dialogs/*' element={<Dialogs />}/>
            <Route path='/news' element={<News />}/>
            <Route path='/music' element={<Music />}/>
            
            <Route path='/users' element={<UsersContainer />}/>

            <Route path='/settings' element={<Settings />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}





export default App;
