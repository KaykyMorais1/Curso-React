import FirstComponent from './components/FirstComponent';
import './App.css';
import TemplateExpression from './components/TemplateExpression';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <FirstComponent/>
      <TemplateExpression/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
