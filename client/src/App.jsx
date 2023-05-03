import Register from "./Register";
import axios from 'axios'
import { UserContextProvider } from "./userContext";


function App() {
  axios.defaults.baseURL='http://localhost:4000';
  axios.defaults.withCredentials=true;

  return (
    <UserContextProvider>
       <Register/>
    </UserContextProvider>
   
  )
}

export default App
