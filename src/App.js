
import { useEffect } from 'react';
import ReactGa from 'react-ga'
import Main from './Components/Main'
function App() {
  useEffect(()=>{
    ReactGa.initialize(process.env.GOOGLE_ANALYTICS_ID)
    ReactGa.pageview('/')
  },[])
  return (
    <div className="text-center">
      <Main/>
    </div>
  );
}

export default App;
