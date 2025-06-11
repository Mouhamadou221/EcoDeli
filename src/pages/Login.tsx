import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Mail, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import Card from '../components/UI/Card';

const Login: React.FC = () => {
  const { login, isLoading } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError('Email ou mot de passe incorrect');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Demo accounts for easy testing
  const demoAccounts = [
    { email: 'client@ecodeli.com', role: 'Client' },
    { email: 'delivery@ecodeli.com', role: 'Livreur' },
    { email: 'merchant@ecodeli.com', role: 'Commerçant' },
    { email: 'service@ecodeli.com', role: 'Prestataire' },
    { email: 'admin@ecodeli.com', role: 'Administrateur' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <LogIn className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {t('auth.login')}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Connectez-vous à votre compte EcoDeli
          </p>
        </div>

        <Card>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder={t('auth.email')}
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  name="password"
                  type="password"
                  required
                  placeholder={t('auth.password')}
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="/forgot-password" className="text-blue-600 hover:text-blue-500">
                  {t('auth.forgotPassword')}
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              loading={isLoading}
              disabled={isLoading}
            >
              {t('auth.login')}
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Pas encore de compte ?{' '}
                <Link to="/register" className="text-blue-600 hover:text-blue-500 font-medium">
                  {t('auth.register')}
                </Link>
              </p>
            </div>
          </form>
        </Card>

        {/* Demo Accounts */}
        <Card className="bg-blue-50 border-blue-200">
          <h3 className="text-sm font-medium text-blue-900 mb-3">Comptes de démonstration :</h3>
          <div className="space-y-2">
            {demoAccounts.map((account, index) => (
              <button
                key={index}
                onClick={() => setFormData({ email: account.email, password: 'demo' })}
                className="block w-full text-left px-3 py-2 text-sm bg-white rounded border hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">{account.role}</span>
                <span className="text-gray-600 ml-2">({account.email})</span>
              </button>
            ))}
          </div>
          <p className="text-xs text-blue-700 mt-2">
            Cliquez sur un compte pour remplir automatiquement les champs
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Login;