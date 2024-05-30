import React, { createContext, useContext, useState } from 'react'

const themeContext = createContext();
const userContext = createContext();

function WelcomePanel()
{
    const [theme,setTheme] = useState('dark')
    const [currentUser,setCurrentUser] = useState('')
    return(<>
    <themeContext.Provider value={theme}>
        <useContext.Provider value={
            {
            currentUser,setCurrentUser
            }
        }>
        <Panel title={"Hello"}>
            <Multihooksuse/>
        </Panel>
        </useContext.Provider>
    </themeContext.Provider>
   

    <input type='checkbox'
    value={theme}
    onChange={(e)=>{setTheme((e.target.checked)? "dark":"light")}}
    ></input>
    
    {theme}
    </>)
}

function Panel({children,title})
{
    const {currentUser} = useContext(userContext);
    console.log(currentUser)
    const theme = useContext(themeContext);
    console.log(theme)
     const className = "panel-"+theme;
    return(
        <>
        
            <section className={className}>
               <h1>{title} {currentUser.fullname}</h1> 
             {children} 
            </section>
        </>
    )
}

function Multihooksuse() {

    const {setCurrentUser} = useContext(userContext)
    const [fname,setFname] = useState("");
    const [lname,setLame] = useState("");

   const canLogin = fname=="" || lname=="";
  return (
    <div>

    <div>
        Firstname:  <input
        value={fname}
        onChange={(e)=>{setFname(e.target.value)}}
        ></input>            
    </div>
    <div>
    Lastname:  <input
     value={lname}
     onChange={(e)=>{setLame(e.target.value)}}></input>
    </div>
    <div>
    {/* <button>Login</button> */}
    <Button disabled={canLogin} onclick={()=>{
        setCurrentUser({
            fullname:fname + " " +lname
        })
    }}>
        Login
    </Button>
    </div>
  
</div>
  )

  function Button({children,disabled,onclick})
{
    const theme = useContext(themeContext);
    console.log(theme)
    const className = "panel-"+theme;
    return(<>
    <button onClick={onclick} className={className} disabled={disabled}>{children}</button>
    </>)
}
}

export default WelcomePanel