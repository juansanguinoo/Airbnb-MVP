import React from 'react';
import './App.css';
import AuthState from './context/auth/authState';
import HostState from './context/host/hostState';
import PaymentState from './context/payment/paymentState';
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <div>
      <AuthState>
        <HostState>
          <PaymentState>
            <AppRouter />
          </PaymentState>
        </HostState>
      </AuthState>
    </div>
  );
}

export default App;
