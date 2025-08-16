import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div style={{ padding: 24 }}>Chargement…</div>;
  if (!user) return <div style={{ padding: 24 }}>Accès restreint: connectez-vous.</div>;
  if (!user.is_admin) return <div style={{ padding: 24 }}>Accès refusé: réservé aux administrateurs.</div>;

  return children;
};

export default AdminRoute;
