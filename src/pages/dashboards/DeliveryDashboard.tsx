import React from 'react';
import { Truck, MapPin, Calendar, CreditCard, Package, Clock, Upload, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';

const DeliveryDashboard: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  const stats = [
    { label: 'Trajets planifiés', value: '5', icon: <Truck className="h-6 w-6" />, color: 'text-blue-600' },
    { label: 'Livraisons acceptées', value: '8', icon: <Package className="h-6 w-6" />, color: 'text-sky-600' },
    { label: 'Revenus ce mois', value: '245€', icon: <CreditCard className="h-6 w-6" />, color: 'text-indigo-600' },
    { label: 'Livraisons en cours', value: '3', icon: <Clock className="h-6 w-6" />, color: 'text-purple-600' }
  ];

  const availableDeliveries = [
    {
      id: 1,
      title: 'Livraison de colis',
      pickup: 'Paris 15ème',
      delivery: 'Boulogne-Billancourt',
      price: '15€',
      weight: '2kg',
      distance: '8km',
      deadline: 'Aujourd\'hui 18h',
      matchScore: 95
    },
    {
      id: 2,
      title: 'Documents urgents',
      pickup: 'La Défense',
      delivery: 'Neuilly-sur-Seine',
      price: '12€',
      weight: '< 1kg',
      distance: '5km',
      deadline: 'Demain 12h',
      matchScore: 87
    }
  ];

  const upcomingRoutes = [
    {
      id: 1,
      date: '2024-12-15',
      start: 'Paris Centre',
      end: 'Banlieue Sud',
      deliveries: 3,
      earnings: '45€',
      status: 'confirmed'
    },
    {
      id: 2,
      date: '2024-12-16',
      start: 'La Défense',
      end: 'Versailles',
      deliveries: 2,
      earnings: '30€',
      status: 'pending'
    }
  ];

  const documentsStatus = [
    { name: 'Pièce d\'identité', status: 'validated', uploadDate: '2024-12-01' },
    { name: 'Justificatif de domicile', status: 'validated', uploadDate: '2024-12-01' },
    { name: 'Assurance véhicule', status: 'pending', uploadDate: '2024-12-10' },
    { name: 'Permis de conduire', status: 'missing', uploadDate: null }
  ];

  const getDocumentStatusColor = (status: string) => {
    switch (status) {
      case 'validated': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'missing': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDocumentStatusText = (status: string) => {
    switch (status) {
      case 'validated': return 'Validé';
      case 'pending': return 'En attente';
      case 'missing': return 'Manquant';
      default: return 'Inconnu';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t('common.welcome')}, {user?.firstName} !
        </h1>
        <p className="text-gray-600">
          Gérez vos trajets, acceptez des livraisons et optimisez vos déplacements
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

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Available Deliveries */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Annonces correspondant à vos trajets
            </h2>
            <Button size="sm">Voir toutes</Button>
          </div>
          
          <div className="space-y-4 mb-8">
            {availableDeliveries.map((delivery) => (
              <Card key={delivery.id} className="hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-medium text-gray-900">{delivery.title}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {delivery.matchScore}% compatible
                      </span>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-blue-600">{delivery.price}</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                    <span>{delivery.pickup} → {delivery.delivery}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>📦 {delivery.weight}</span>
                    <span>📍 {delivery.distance}</span>
                    <span>⏰ {delivery.deadline}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    Accepter la livraison
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Voir détails
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Upcoming Routes */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Mes prochains trajets
            </h2>
            <Button size="sm" variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Planifier un trajet
            </Button>
          </div>
          
          <div className="space-y-4">
            {upcomingRoutes.map((route) => (
              <Card key={route.id} className="hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {new Date(route.date).toLocaleDateString('fr-FR', { 
                        weekday: 'long', 
                        day: 'numeric', 
                        month: 'long' 
                      })}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {route.start} → {route.end}
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    route.status === 'confirmed' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {route.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <span>{route.deliveries} livraisons prévues</span>
                  <span className="font-medium text-blue-600">{route.earnings}</span>
                </div>
                
                <Button size="sm" variant="outline" className="w-full">
                  Gérer ce trajet
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Documents Status */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Pièces justificatives</h3>
            <div className="space-y-3">
              {documentsStatus.map((doc, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{doc.name}</p>
                    {doc.uploadDate && (
                      <p className="text-xs text-gray-500">Envoyé le {new Date(doc.uploadDate).toLocaleDateString('fr-FR')}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDocumentStatusColor(doc.status)}`}>
                      {getDocumentStatusText(doc.status)}
                    </span>
                    {doc.status === 'validated' && <CheckCircle className="h-4 w-4 text-blue-600" />}
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" size="sm" variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Télécharger des documents
            </Button>
          </Card>

          {/* Quick Actions */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Actions rapides</h3>
            <div className="space-y-2">
              <Button className="w-full justify-start" variant="outline" size="sm">
                <Truck className="h-4 w-4 mr-2" />
                Déclarer un nouveau trajet
              </Button>
              <Button className="w-full justify-start" variant="outline" size="sm">
                <Package className="h-4 w-4 mr-2" />
                Valider une livraison
              </Button>
              <Button className="w-full justify-start" variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Planning des tournées
              </Button>
              <Button className="w-full justify-start" variant="outline" size="sm">
                <CreditCard className="h-4 w-4 mr-2" />
                Historique des paiements
              </Button>
            </div>
          </Card>

          {/* Validation Code */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Code de validation</h3>
            <p className="text-sm text-gray-600 mb-3">
              Utilisez ce code pour valider vos livraisons :
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <span className="text-2xl font-bold text-blue-600">7429</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Ce code change après chaque livraison validée
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDashboard;