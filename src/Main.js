import React from 'react'
import CircleLoader from "react-spinners/CircleLoader";
import App from './App';

const Main = () => {
const [Loading, setLoading] = React.useState(false)
React.useEffect(()=>{
setLoading(true)
setTimeout(()=>{
  if("DOMContentLoaded")
  setLoading(false)
},500)

},[])
const override = {
  margin : "0 auto",
  marginTop : "36vh" 
};
  return (
    <>
     {
      Loading ? 
  <CircleLoader color={"#61dbfb"} Loading={Loading} cssOverride={override} size={100} />
      :
      <App/>
     }
      
    </>
  )
}

export default Main
