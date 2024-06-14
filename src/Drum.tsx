import { AudioClip } from "./types";

interface DrumProps {
  audioClip: AudioClip;
}
const Drum = ({ audioClip }: DrumProps) => {
  const playSound = (clips: AudioClip) => {
    document.getElementById(clips.keyTrigger as HTMLAudioElement)?.play().catch(console.error);
    document.getElementById("display")!.innerText = clips.description;
  };
  return (
    <button
      className="drum-pad"
      id={`drum-${audioClip.keyTrigger}`}
      onClick={() => playSound(audioClip)}
    >
      <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
      {audioClip.keyTrigger}
    </button>
  );
};

export default Drum;
