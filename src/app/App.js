import { BrowserRouter,Routes, Route } from 'react-router-dom';
import TopBar from "../components/topbar/TopBar";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Write from "../pages/home/write/Write"
import Settings from "../pages/settings/Settings";
import Single from "../pages/home/single/Single"



function App() {
  return (
    <BrowserRouter>
    <TopBar/>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/write' element={<Write/>}/>
        <Route exact path='/settings' element={<Settings/>}/>
        <Route exact path='/post/:postId' element={<Single/>}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
