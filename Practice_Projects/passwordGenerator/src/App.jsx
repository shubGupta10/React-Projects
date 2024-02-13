import { useState, useCallback, useEffect ,useRef} from "react"

function App() {

  const [Password, setPassword] = useState()
  const [length, setLength] = useState(5)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(false)

  //so we are here going to use useCallback() - cuz it helps us to cache the fn into cache memory.

  const passwordGenerator = useCallback(() => {
    let pass = "" //here we will take input of the pass 
    let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(charAllowed) str += "!@#$%^&*()-=_+|;:',.<>?/";
    if(numberAllowed) str += "0123456789";


    for (let i = 1; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length -1)
      pass += str.charAt(char)
    }


    setPassword(pass);
  }, [length, charAllowed, numberAllowed, setPassword ])



  //here we used callback hook and its depend upon password, ki agar password me kuch change ho inko re-render kr do.
  const CopyToClipBoard = useCallback(() => {

    //this is why we used ref hook, so we can do this to improve user experience
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,21);
    window.navigator.clipboard.writeText(Password);
  }, [Password])


  //We are going to use UseEffect hook

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  //ref hook
  const passwordRef = useRef(null)


 
  return (
    <>
     <div className="main-div">
      <div>
      <h1>Password Generator</h1>
      <div className="input-btn-div">
      <input className="password-input"
      type="text"
      readOnly
      value={Password}
      placeholder="Password"
      ref={passwordRef}
      />
      <button className="copy-btn"
      onClick={CopyToClipBoard}
      >
        Copy
      </button>
      </div>
      </div>
      
      <div className="slide-bar-div">
        <input type="range" 
        className="slide-bar-length"
        min={5}
        max={30}
        value={length}
        onChange={(e) => {setLength(e.target.value)}}
        />
         <label className="length-label" >Length : {length}</label>
      </div>

      
      <div className="numandchar-div ">
        <div>
        <input type="Checkbox"
        defaultChecked = {numberAllowed}
        id="numberInput"
        onChange={() => {
          setNumberAllowed((prev) => !prev)
        }}
        />
        <label htmlFor="numberInput" className="number-label">Numbers</label>
        </div>


        <div className="Character-div">
        <input type="CheckBox"
        defaultChecked = {charAllowed}
        id="charInput"
        onChange={() => {
          setCharAllowed((prev) =>  !prev)
        }}
        />
        <label htmlFor="charInput">
          Characters
        </label>
      </div>
        

      </div>






     </div>
     
    </>
  )
}

export default App
