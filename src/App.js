import './App.css';
import Header from './components/Header';
// import Footer from './components/Footer';
// import SignUp from './components/SignUp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import PrivateComponent from './components/PrivateComponent';
// import Login from './components/Login';
// import AddProduct from './components/AddProduct';
// import ProductList from './components/ProductList';
import Courses from "./components/Courses";
import FoundationOneneet from './components/FoundationOneneet';
import FoundationTwoneet from './components/FoundationTwoneet';
import TargetCourseneet from './components/TargetCourseneet';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      
      {/* <Route path="/" element={<Home/>}/> */}
      <Route  path="/home" element={<Home/>}/>
      <Route exact path="/courses" element={<Courses/>}/>
      <Route exact path="/foundationoneneet" element={<FoundationOneneet/>}/>
      <Route exact path="/foundationtwoneet" element={<FoundationTwoneet/>}/>
      <Route exact path="/targetcourseneet" element={<TargetCourseneet/>}/>
      {/* <Route path="/update" element={<h1>Update Product Component</h1>}/>
      <Route path="/logout" element={<h1>Logout</h1>}/>
      <Route path="/profile" element={<h1>Profile Product Component</h1>}/>
      </Route>
      
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/> */}
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
