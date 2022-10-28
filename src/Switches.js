const Switches = ({ switchState, handleSwitchToggle }) => {
  return (
    <div>
      {switchState.map((switchItem)=>(
        <button
          className = {switchItem.name}
          key = {switchItem.name}
          onClick={()=>handleSwitchToggle(switchItem.name)}
        >
        {switchItem.name}
        </button>
      ))}
    </div>
  )
}

export default Switches