
import './App.css';
import Tabs from './components/Tabs';

function App() {
  const types = [{label:'Tab 1',content:'content of tab 1'}, {label:'Tab 2',content:'content of tab 2'},{label:'Tab 3',content:'content of tab 3'},{label:'Tab 4',content:'content of tab 4'}];


  return (
    <div>
      <Tabs/>
    </div>
  );
}

export default App;
