const Buttons = () => {
  return (
    <div>
      <button 
        className="BTNU"
        onClick={()=>handleButtonPress("BTNU")}>
      BTNU
      </button>
      <button 
        className="BTND"
        onClick={()=>handleButtonPress("BTND")}>
      BTND
      </button>
      <button 
        className="BTNL"
        onClick={()=>handleButtonPress("BTNL")}>
      BTNL
      </button>
      <button 
        className="BTNR"
        onClick={()=>handleButtonPress("BTNR")}>
      BTNR
      </button>
      <button 
        className="BTNC"
        onClick={()=>handleButtonPress("BTNC")}>
      BTNC
      </button>
    </div>
  )
}

const handleButtonPress = (name) =>{
  console.log(`${name} is pressed.`); //FOR DEMO ONLY
}

export default Buttons
