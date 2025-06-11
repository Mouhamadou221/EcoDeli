import React, { useState } from 'react';
import { Package, Plus, MapPin, Calendar, CreditCard, Bell, FileText, Box, Clock, User } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';

const ClientDashboard: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [showTutorial, setShowTutorial] = useState(!localStorage.getItem('client_tutorial_seen'));

  const stats = [
    { label: 'Annonces actives', value: '3', icon: <Package className="h-6 w-6" />, color: 'text-blue-600' },
    { label: 'Livraisons en cours', value: '2', icon: <MapPin className="h-6 w-6" />, color: 'text-sky-600' },
    { label: 'Services réservés', value: '1', icon: <Calendar className="h-6 w-6" />, color: 'text-indigo-600' },
    { label: 'Factures en attente', value: '0', icon: <CreditCard className="h-6 w-6" />, color: 'text-purple-600' }
  ];

  const recentActivity = [
    { id: 1, type: 'delivery', message: 'Votre colis a été récupéré par Marie M.', time: '2h', status: 'info' },
    { id: 2, type: 'payment', message: 'Paiement reçu pour la livraison #12345', time: '1d', status: 'success' },
    { id: 3, type: 'announcement', message: 'Nouvelle annonce publiée', time: '2d', status: 'info' },
    { id: 4, type: 'service', message: 'Rendez-vous confirmé avec Pierre D. (plombier)', time: '3d', status: 'success' }
  ];

  const activeAnnouncements = [
    {
      id: 1,
      title: 'Livraison de documents',
      pickup: 'Paris 15ème',
      delivery: 'Boulogne-Billancourt',
      status: 'active',
      offers: 3
    },
    {
      id: 2,
      title: 'Colis fragile',
      pickup: 'La Défense',
      delivery: 'Neuilly-sur-Seine',
      status: 'assigned',
      offers: 0
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      service: 'Réparation plomberie',
      provider: 'Pierre Dubois',
      date: '2024-12-15',
      time: '14:00'
    }
  ];

  const closeTutorial = () => {
    setShowTutorial(false);
    localStorage.setItem('client_tutorial_seen', 'true');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Tutorial Overlay */}
      {showTutorial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl mx-auto" padding="lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Bienvenue sur EcoDeli !
              </h2>
              <p className="text-gray-600 mb-6">
                Découvrez comment utiliser votre tableau de bord client pour gérer vos livraisons,
                réserver des services et suivre vos colis.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Créer une annonce</h3>
                    <p className="text-sm text-gray-600">Publiez vos demandes de livraison</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sky-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Suivre vos colis</h3>
                    <p className="text-sm text-gray-600">Surveillez l'état de vos livraisons</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Réserver des services</h3>
                    <p className="text-sm text-gray-600">Trouvez des prestataires locaux</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Gérer les paiements</h3>
                    <p className="text-sm text-gray-600">Consultez vos factures et historique</p>
                  </div>
                </div>
              </div>
              <Button onClick={closeTutorial} className="w-full">
                Commencer à utiliser EcoDeli
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t('common.welcome')}, {user?.firstName} !
        </h1>
        <p className="text-gray-600">
          Gérez vos livraisons, réservez des services et suivez vos commandes
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className={`${stat.color} mr-4`}>{stat.icon}</div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {t('dashboard.quickActions')}
          </h2>
          <div className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Créer une annonce de livraison
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <User className="h-4 w-4 mr-2" />
              Réserver un service
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <MapPin className="h-4 w-4 mr-2" />
              Suivre un colis
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Box className="h-4 w-4 mr-2" />
              Box de stockage temporaire
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Voir les factures PDF
            </Button>
          </div>
        </Card>

        {/* Active Announcements & Appointments */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Announcements */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Mes annonces actives
              </h2>
              <Button size="sm">Voir toutes</Button>
            </div>
            <div className="space-y-3">
              {activeAnnouncements.map((announcement) => (
                <div key={announcement.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900">{announcement.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      announcement.status === 'active' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-sky-100 text-sky-800'
                    }`}>
                      {announcement.status === 'active' ? 'Active' : 'Assignée'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {announcement.pickup} → {announcement.delivery}
                  </p>
                  <p className="text-xs text-gray-500">
                    {announcement.offers} offre(s) reçue(s)
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Upcoming Appointments */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Prochains rendez-vous
              </h2>
              <Button size="sm" variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Calendrier
              </Button>
            </div>
            <div className="space-y-3">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">{appointment.service}</h3>
                      <p className="text-sm text-gray-600">Prestataire: {appointment.provider}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="h-4 w-4 mr-1" />
                        {new Date(appointment.date).toLocaleDateString('fr-FR')} à {appointment.time}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Détails
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Activity */}
          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {t('dashboard.recentActivity')}
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">Il y a {activity.time}</p>
                  </div>
                  <Bell className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;