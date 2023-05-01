import { BrowserRouter as Router, Route } from "react-router-dom"
import Routing from './Routes'
import  AuthProvider  from './context/AuthProvider'


import "./App.css"



function App() {

  

  return (
    <div className="App">
      {/* <AuthContext.Provider value = {{role, setRole}}> */}

      {/* <CssBaseline /> */}
      <AuthProvider>
        <Router>
          <Routing />
        </Router>
      </AuthProvider>
      {/* </AuthContext.Provider> */}
    </div>
  );
}

export default App;
