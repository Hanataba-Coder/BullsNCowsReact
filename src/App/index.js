import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Game from '../Views/Game'
import Menu from '../Views/Menu'
import GameHistory from '../Views/GameHistory'
import Howto from '../Views/HowTo'
import BaseStyled from './baseStyled'
import Aux from '../components/Aux/Aux'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const App = () => {
  return(
    <Aux>
      <BaseStyled/>
      <Switch>
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/Howto" component={Howto} />
        <Route exact path="/history" component={GameHistory} />
        <Redirect to="/menu" />
      </Switch>
    </Aux>
    )
}
export default App;
