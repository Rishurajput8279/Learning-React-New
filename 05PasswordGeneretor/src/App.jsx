import { useState, useCallback ,useEffect ,useRef} from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [password, setpassword] = useState("");
  //useref hook is used to persist the value of password across renders without causing re-renders
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+[]{}|;:,.<>?";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, characterAllowed, setpassword]);


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(passwordRef.current.value);
  }, [password])
  useEffect(() =>{
    passwordGenerator();
  },[length, numberAllowed, characterAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 text-black bg-white"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition duration-200 cursor-pointer"
          onClick ={copyPasswordToClipboard}
          >
            Copy
          </button>

        </div>
        <div className="flex text-m gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{
              setlength(e.target.value);
            }}/>
            <label>Lenght: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed} 
            onChange={() => {
              setnumberAllowed((prev) => !prev);
            }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={characterAllowed} 
            onChange={() => {
              setcharacterAllowed((prev) => !prev);
            }}
            />
            <label>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
