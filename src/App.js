import Switches from './Switches';
import Buttons from './Buttons';
import Leds from './Leds';
import SevenSeg from './SevenSeg';
import axios from "axios";
import { useState } from 'react';

function App() {

  const [switchState, setSwitchState] = useState([
    {
      id:0,
      state:false,
      name:"SW0",
    },
    {
      id:1,
      state:false,
      name:"SW1",
    },
    {
      id:2,
      state:false,
      name:"SW2",
    },
    {
      id:3,
      state:false,
      name:"SW3",
    },
    {
      id:4,
      state:false,
      name:"SW4",
    },
    {
      id:5,
      state:false,
      name:"SW5",
    },
    {
      id:6,
      state:false,
      name:"SW6",
    },
    {
      id:7,
      state:false,
      name:"SW7",
    },
    {
      id:8,
      state:false,
      name:"SW8",
    },
    {
      id:9,
      state:false,
      name:"SW9",
    },
    {
      id:10,
      state:false,
      name:"SW10",
    },
    {
      id:11,
      state:false,
      name:"SW11",
    },
    {
      id:12,
      state:false,
      name:"SW12",
    },
    {
      id:13,
      state:false,
      name:"SW13",
    },
    {
      id:14,
      state:false,
      name:"SW14",
    },
    {
      id:15,
      state:false,
      name:"SW15",
    }
  ]);

  const handleSwitchToggle = (name) => {
    const switchItems = switchState.map(switchItem => switchItem.name === name?
    {...switchItem, state: !switchItem.state}: switchItem);
    setSwitchState(switchItems);
  }

  const [uploadFile, setUploadFile] = useState("")

  const handleFileReader = (event) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e) => {
      setUploadFile({data:reader.result.split(',').pop(),fileName:event.target.files[0].name})
    };
    console.log(`File uploaded: ${event.target.files[0].name}`);
  }

  const uploadHandler = async () => {
      try{
        await axios.post('https://localhost:5000/uploaded_file', uploadFile);
      } catch (err){
        console.log(`Error: ${err.message}`);
      }
  };

  return (
    <div className="App">
      <h1>Remote Lab for EE2026</h1>
      <Switches switchState = {switchState} handleSwitchToggle = {handleSwitchToggle}/>
      <Buttons />
      <Leds />
      <SevenSeg />
      <label>Select a Folder</label>
      <input
        onChange={handleFileReader}                
        type="file"
        accept=".zip,.rar,.7zip"
      />
      <button onClick={uploadHandler}>Upload Folder</button>
    </div>
  );
}

export default App;
