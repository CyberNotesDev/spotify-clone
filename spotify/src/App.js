import "./css/App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import "./css/Browsemusic.css";
import BrowseMusicRow from './components/BrowseMusicRow';

function App() {
  return (
    <div className="app">

      <div className="app-left">
        <Sidebar />
      </div>

      <div className="app-right">
        <Header />
        
        <div className="browse-music">
          <BrowseMusicRow title="Focus" />
        </div>

      </div>

    </div>
  );
}

export default App;