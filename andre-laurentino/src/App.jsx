import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Theme } from './components/Theme/style';
import Topo from './components/Topo';

// Pages
import {
  Contato,
  Home
} from './routes';
import TopoPages from './components/TopoPages';

const App = () => {
  return (
    <Theme>
      <Router>
        <Switch>
          <Route exact path="/" render={() => (
            <>
              <Topo />
              <Home />
            </>
          )} />
          <Route path="/contato" render={() => (
            <>
              <TopoPages 
                TitlePage="Contato"
                DescriptionPage="Entre em contato para dúvidas e desenvolvimento de projetos."
              />
              <Contato TitlePage/>
            </>
          )} />
        </Switch>
      </Router>
    </Theme>
  );
}

export default App;
