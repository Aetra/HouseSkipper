import React from 'react';
import {authenticationService} from './app/_services';
import {history} from './app/helpers';
import {Route, Redirect} from "react-router-dom";
import TableauDeBord from './app/pages/TableauDeBord/TableauDeBord'
import ContainsLogIn2 from "./app/pages/Connect/ContainsLogIn2";

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        // authorised so return component
        return <Component {...props} />
    }} />
)
class RootingTest extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        };
    }
    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }
  render(){
    //const { currentUser } = this.state;
  return (
    <div>
      <div>
      <PrivateRoute exact path='/TableauDeBord' component={TableauDeBord}/>
      <PrivateRoute exact path='/' component={TableauDeBord}/>
      </div>

      <Route path="/login" exact component={ContainsLogIn2}/>


    </div>
  )}
}
export default RootingTest;
