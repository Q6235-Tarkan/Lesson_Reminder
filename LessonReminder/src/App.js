import Header from "./components/Header/Header";
import LessonCard from "./components/LessonCard/LessonCard";
import { Lesson } from "./pages/Lesson";
import "../src/components/Header/Header.css"


function App() {
  return (
    <div className="App">
     <Header/>
     <Lesson/>
     <LessonCard/>
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
