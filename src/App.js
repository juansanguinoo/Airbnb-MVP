import './App.css';
import AuthState from './context/auth/authState';
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <div>
      <AuthState>
        <AppRouter />
      </AuthState>
      
    </div>
  );
}

export default App;
