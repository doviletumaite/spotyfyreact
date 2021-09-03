import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div className="App">
    <Route
            path="/"
            exact
            render={(routerProps) => (
              <Layout>
                <Home {...routerProps} subTitle="Homepage" />
              </Layout>
            )}/>

</div>
</Router>
  );
}

export default App;
