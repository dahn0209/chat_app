import Register from "./Register";
import axios from 'axios'
import { UserContext, UserContextProvider } from "./userContext";
import { useContext } from "react";


function App() {
  axios.defaults.baseURL='http://localhost:4000';
  axios.defaults.withCredentials=true;
  const {username}=useContext(UserContext)

  return (
    <UserContextProvider>
       <Register/>
    </UserContextProvider>
   
  )
}

export default App
