import React from 'react'
import "./Selectversion.css"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export default function BasicCard() {
    return (
        <>     
        <Stack style={{height : "90vh"}}  justifyContent="center" alignItems="center" direction= "column" spacing={5}>
        <div className="select_version_heading">
           <h1>Select Your Theme</h1>
           </div>
        <Stack  justifyContent="center" alignItems="center" direction= "row" spacing={3}>
     <Button onClick={()=>{
         function setTheme(themeName) {
            localStorage.setItem('theme', themeName);
            document.documentElement.className = themeName;
        }

        // function to toggle between light and dark theme
        function toggleTheme() {
            if (localStorage.getItem('theme') === 'theme-dark') {
                setTheme('theme-light');
            } else {
                setTheme('theme-dark');
            }
        }

        // Immediately invoked function to set the theme on initial load
        (function () {
            if (localStorage.getItem('theme') === 'theme-dark') {
                setTheme('theme-dark');
            } else {
                setTheme('theme-light');
            }
        })();
        window.location.href = "/home"
   


     }} style={{height : "10rem", width : "18rem", fontSize : "1.5rem" , fontWeight : "900" ,  borderWidth : ".3rem"  }} size="large" variant="outlined">ReactJS Version</Button>
     <Button style={{height : "10rem", width : "18rem", fontSize : "1.5rem" , fontWeight : "900" ,  borderWidth : ".3rem"}} color='error' variant="outlined">NextJS Version</Button>
      </Stack>
      </Stack>
      </>

    );
  }