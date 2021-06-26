import './css/App.css';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import BrowseMusic from "./components/BrowseMusic";

function App() {
  return (
    <div className="app">
      <div className="app-left">
        <Sidebar />
      </div>
      <div className="app-right">
        <Header />
        <BrowseMusic />
      </div>
    </div>
  );
}

export default App;