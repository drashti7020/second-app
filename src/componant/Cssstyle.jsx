import React from 'react'
import styles from './../style/Fun.module.css';


const Cssstyle = () => {
    let obj = {
        background :"pink",
        padding: '10px',
        textAlign :'center',
    }

    console.log(styles.h1);
  return (
   <>
   <div>
    <h2 className="h2">oscar career point</h2>

    <h3 style={{background:"red", textAlign:"center", color:'white'}}>hello world</h3>
    <p style={obj}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti.</p>

    <h1 className={styles.h1}>Module Css</h1>
   </div>
   </>
  )
}

export default Cssstyle