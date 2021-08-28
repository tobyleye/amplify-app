import './App.css';
import { lyrics } from "./lyrics"

function App() {
  const lines = lyrics.split('\n')
  return (
    <div className="App">
    <header className="header">
      <h3>Rolling in the deep lyrics</h3>
      <div className="lyrics-source">
      <span>Source: <a target="_blank" rel="noreferrer" href="http://musixmatch.com">Musixmatch</a></span>

      </div>
    </header>
   
        <div>{
          lines.map(line => {
            return (
              <p>{line}</p>
            )
          })
        }</div>
    </div>  
  );
}

export default App;
