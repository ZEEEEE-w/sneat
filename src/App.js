import './App.css';
import { useRoutes } from 'react-router-dom';
import router from './router/routerIndex';

function App() {
  const routes = useRoutes(router);
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
