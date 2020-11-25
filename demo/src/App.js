import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginScreen from './screens/Login/loginScreen';
import MainScreen from './screens/Main/mainScreen';
import NotFoundScreen from './screens/notFound/notFoundScreen'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainScreen/>
          </Route>
          <Route path="/login">
            <LoginScreen/>
          </Route>
          <Route path="*" >
            <NotFoundScreen/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
