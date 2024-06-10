import logo from './logo.svg';
import './App.css';
import ViewFriends from './components/ViewFriends';
import SearchFriends from './components/SearchFriends';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddFriends from './components/AddFriends';

function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddFriends/>}/>
    <Route path='/SearchFriends' element={<SearchFriends/>}/>
    <Route path='/ViewFriends' element={<ViewFriends/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
