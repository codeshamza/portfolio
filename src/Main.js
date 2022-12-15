import React from 'react'
import ClockLoader   from "react-spinners/ClockLoader";
import App from './App';

const Main = () => {
const [Loading, setLoading] = React.useState(false)
React.useEffect(()=>{
setLoading(true)
setTimeout(()=>{
  setLoading(false)
},0)

},[])
const override = {
  margin : "0 auto",
  marginTop : "36vh" 
};
  return (
    <>
     {
      Loading ? 
  <ClockLoader   color={"#61dbfb"} Loading={Loading} cssOverride={override} size={100} />
      :
      <App/>
     }
      
    </>
  )
}

export default Main
