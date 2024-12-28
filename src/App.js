import './App.css';
import Signin from './Authentication/Signin';
import Signup from './Authentication/Signup';
import Forgotpassword from './Authentication/Forgotpassword';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<Forgotpassword />} /> {/* Forget Password route */}
          
          <Route path="/" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
