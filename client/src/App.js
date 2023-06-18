import {useState} from 'react';
import axios from 'axios';
import './App.css';
function App() {
    const [love, setLove] = useState("");
    const handleBlueberry = async () => {
        try {
            const res = await axios.get("/api/v1/blueberry");
            if (res.status === 200) {
                setLove(res.data.message);
            }
        } catch(e) {
            console.log(e);
        }
    }
  return (
    <div className="App">
      <header className="App-header">
        <h1>ERMERGERD an App!</h1>
          <button
            onClick={() => handleBlueberry()}
          >Talk to Blueberry!</button>
      </header>
        <main>
            <div>
                <h2>Blueberry's Love Should appear below!</h2>
                {love && (
                    <p>{love}</p>
                )}
            </div>
        </main>
    </div>
  );
}

export default App;
