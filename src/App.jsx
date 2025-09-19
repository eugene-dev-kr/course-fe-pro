import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Main from './components/Main'

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="d-flex flex-grow-1">
            <Sidebar />
            <Main />
      </div>
    </div>
  );
}

