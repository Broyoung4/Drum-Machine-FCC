import "./App.css";
import Drum from "./Drum";
import { AudioClip } from "./types";


const audioClips: AudioClip[] = [
  {
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1",
  },
  {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2",
  },
  {
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater 3",
  },
  {
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater 4",
  },
  {
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap",
  },
  {
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open-HH",
  },
  {
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick_n_Hat",
  },
  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick",
  },
  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Closed-HH",
  },
];

function App() {
  
  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clips = audioClips.find((clips)=> clips.keyTrigger === e.key.toUpperCase());
    if (!clips)return;

    document.getElementById(clips.keyTrigger)?.play().catch(console.error);
    document.getElementById("drum-" + clips.keyTrigger)?.focus();
    document.getElementById("display")!.innerText = clips.description;
  };
  return (
    
    <>
      <div id="drum-machine" className="container" onKeyDown={playAudio}>
        <h1>Drum machine</h1>
        <div className="Drumpad">
          {audioClips.map((clips) => (
            <Drum audioClip={clips} key={clips.keyTrigger}/>
          ))}
        </div>
        <div id="display">

        </div>
      </div>
    </>
  );
}

export default App;
