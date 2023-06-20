
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ViewProfile from './Pages/ViewProfile';
import PageNotFound from './Pages/PageNotFound';
import Register from './Pages/Register';
import Edit from './Pages/Edit';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
  

      <header>
        {/* Header */}
        <Header/>
      </header>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/view-profile/:id' element={<ViewProfile/>}/>
              <Route path='/edit/:id' element={<Edit/>}/>
              <Route path='*' element={<PageNotFound/>}/>

          </Routes>
      <footer>
        {/* footer */}
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
