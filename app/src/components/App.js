import '../styles/App.css';
import Signup from './auth/Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './auth/AuthContext';

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
      style={{
        minHeight:"100vh"
      }}
    >
      <div className="w-100" 
        style={{
          maxWidth: '400px'
        }}
      >
        <AuthProvider>
          <Signup />
        </AuthProvider>     
      </div>
    </Container>
  );
}

export default App;
