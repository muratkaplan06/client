import 'primereact/resources/themes/lara-light-indigo/theme.css'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">
              Contact
            </a>
          </div>
        </nav>
        <div className="row">
          <div className="col s12">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
