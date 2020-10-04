import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Profile from './pages/Profile/Profile';
import TrangChu from './pages/TrangChu/TrangChu';
import { HomeTemplate } from './templates/HomeTemplate';
import DemoHOC from './pages/HOC/DemoHOC';
import { AdminTemplate } from './templates/AdminTemplate';
import FilmManager from './pages/Admin/FimManager.js/FilmManager';
import UserManager from './pages/Admin/UserManager.js/UserManager';
import Booking from './pages/Booking/Booking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <HomeTemplate exact path='/detail/:id' Component={Detail}/>

          <HomeTemplate exact path='/home' Component={Home}/>
          <HomeTemplate exact path='/contact' Component={Contact} />
          <HomeTemplate exact path='/about' Component={About} />
          <HomeTemplate exact path='/hoc' Component={DemoHOC} />
          <HomeTemplate exact path='/login' Component={Login}/>
          <HomeTemplate exact path='/profile' Component={Profile}/>
          {/* <Route exact path ='/login' render={(props) => {return (<div>
            <Header {...props}/>
            <Login {...props}/>
            </div>)}}/> */}
          <HomeTemplate exact path='/TrangChu' Component={TrangChu}/>
          <AdminTemplate exact path='/admin/films' Component={FilmManager}/>
          <AdminTemplate exact path='/admin/users' Component={UserManager}/>
          <Route exact path='/booking/:maLichChieu' render={(propsRoute)=>{
            return <Booking {...propsRoute}/>
          }}/>
          <HomeTemplate exact path='/' Component={Home} /> {/*Mặc định khi vào web vào Home*/}
          <Route exact path='*' component={PageNotFound} /> {/*Mặc định cho route không tìm thấy (page not found 404) */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
