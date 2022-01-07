export default function Timer(props) {
  return (
    <div>
      <h2>{props.start}</h2>

      <div style={{display:"flex",gap:"1rem"}}>
        <button onClick={props.startTimer}>START</button>
        <button onClick={props.pauseTimer}>PAUSE</button>
        <button onClick={props.resetTimer}>RESET</button>
      </div>
    </div>
  );
}
