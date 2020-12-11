import '../styles/App.css';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Devices from './devices/Devices';
import Dashboard from './dashboard/Dashboard';
import MyPhotos from './myPhotos/MyPhotos';
import { AuthProvider } from './auth/AuthContext';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import NotFound from './NotFound';
import ForgotPassword from './auth/ForgotPassword';
import UpdateProfile from './auth/UpdateProfile';
import AddPhotos from './myPhotos/AddPhotos';
import MyAlbums from './albums/MyAlbums';
import AddAlbum from './albums/AddAlbum';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/devices" component={Devices} />
          <PrivateRoute path="/myPhotos" component={MyPhotos} />
          <PrivateRoute path="/updateProfile" component={UpdateProfile} />
          <PrivateRoute path="/addPhotos" component={AddPhotos} />
          <PrivateRoute path="/addAlbum" component={AddAlbum} />
          <PrivateRoute path="/myAlbums" component={MyAlbums} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route component={NotFound} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
