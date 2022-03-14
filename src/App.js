import 'bootstrap/dist/css/bootstrap.min.css';
import './css/common.scss';

import { MainPage, LoginPage } from './common/RouteViews';
import { Link, Route, Switch } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import ErrorPage from './views/ErrorPage';
import ErrorHandler from './common/ErrorHandler';
import { useEffect, useState } from 'react';

function App() {

  const [ rootFlag, rootFlagChg ] = useState(false);

  useEffect(()=> {
    const userName = window.localStorage.getItem("userName");
    if( userName == null ) rootFlagChg(true)
    else rootFlagChg(false);
  },[]);

  return (
    <div className="App">
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">ToDoListApp by Kis</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <ErrorHandler>
          <Switch>
            <Route path="/" exact={true}>
              { 
                rootFlag == 'false' 
                ? <MainPage/> 
                : <LoginPage/>
              }
            </Route>
            <Route component={ErrorPage} />
          </Switch>
        </ErrorHandler>
      </div>
    </div>
  );
}

export default App;
