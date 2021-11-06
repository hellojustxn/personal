import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ResumeSection } from './components/ResumeSection';
import { ShortStory } from './components/ShortStory';
import { data } from './data.json';

function App() {

  const resume = data.map((entry) => {
    return entry.type === "stats" ? <ResumeSection data={entry} /> : <ShortStory data={entry} />
  })

  return (
    <div className="bg-black font-montserrat flex justify-center">
      <div className="mx-5 sm:mx-32 mt-4 sm:mt-10 text-white ">
        <Navbar />
        {resume}
        <Footer />
      </div>
    </div>
  );
}

export default App;
