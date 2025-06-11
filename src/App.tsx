import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

// Dashboards
import ClientDashboard from './pages/dashboards/ClientDashboard';
import DeliveryDashboard from './pages/dashboards/DeliveryDashboard';
import MerchantDashboard from './pages/dashboards/MerchantDashboard';
import ServiceDashboard from './pages/dashboards/ServiceDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';

const DashboardRouter: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  switch (user.role) {
    case 'client':
      return <Navigate to="/client" replace />;
    case 'delivery':
      return <Navigate to="/delivery" replace />;
    case 'merchant':
      return <Navigate to="/merchant" replace />;
    case 'service':
      return <Navigate to="/service" replace />;
    case 'admin':
      return <Navigate to="/admin" replace />;
    default:
      return <Navigate to="/" replace />;
  }
};

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Dashboard Router */}
              <Route path="/dashboard" element={<DashboardRouter />} />

              {/* Protected Role-based Routes */}
              <Route 
                path="/client/*" 
                element={
                  <ProtectedRoute allowedRoles={['client']}>
                    <ClientDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/delivery/*" 
                element={
                  <ProtectedRoute allowedRoles={['delivery']}>
                    <DeliveryDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/merchant/*" 
                element={
                  <ProtectedRoute allowedRoles={['merchant']}>
                    <MerchantDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/service/*" 
                element={
                  <ProtectedRoute allowedRoles={['service']}>
                    <ServiceDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/*" 
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />

              {/* Catch all - redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;