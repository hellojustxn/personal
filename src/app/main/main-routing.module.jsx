import Home from './home/home.component';
import Resume from './resume/resume.component';
import About from './about/about.component';
import Impossible from './impossible/impossible.component';

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cv",
    element: <Resume />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/impossible",
    element: <Impossible />
  }
];