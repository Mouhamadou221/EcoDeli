import React from 'react';
import { Users, Package, TrendingUp, AlertTriangle, Eye, Download, UserCheck, Ban, Activity, Database } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';

const AdminDashboard: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  const platformStats = [
    { label: 'Utilisateurs actifs', value: '2,847', icon: <Users className="h-6 w-6" />, color: 'text-blue-600', change: '+12%' },
    { label: 'Livraisons ce mois', value: '1,256', icon: <Package className="h-6 w-6" />, color: 'text-sky-600', change: '+8%' },
    { label: 'Revenus totaux', value: '45,320€', icon: <TrendingUp className="h-6 w-6" />, color: 'text-indigo-600', change: '+15%' },
    { label: 'Incidents signalés', value: '23', icon: <AlertTriangle className="h-6 w-6" />, color: 'text-red-600', change: '-5%' }
  ];

  const pendingValidations = [
    {
      id: 1,
      type: 'delivery',
      user: 'Marie Martin',
      email: 'marie.martin@email.com',
      reason: 'Validation des pièces justificatives',
      date: '2024-12-14',
      priority: 'high'
    },
    {
      id: 2,
      type: 'merchant',
      user: 'Boulangerie Dupont',
      email: 'contact@boulangerie-dupont.fr',
      reason: 'Vérification des informations commerciales',
      date: '2024-12-13',
      priority: 'medium'
    },
    {
      id: 3,
      type: 'service',
      user: 'Pierre Dubois - Plombier',
      email: 'pierre.dubois@email.com',
      reason: 'Validation du profil professionnel',
      date: '2024-12-13',
      priority: 'low'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'Nouvel utilisateur inscrit',
      user: 'Sophie Laurent',
      type: 'client',
      timestamp: '2024-12-14 15:30'
    },
    {
      id: 2,
      action: 'Signalement résolu',
      user: 'Livraison #12345',
      type: 'delivery',
      timestamp: '2024-12-14 14:15'
    },
    {
      id: 3,
      action: 'Merchant validé',
      user: 'Pharmacie Martin',
      type: 'merchant',
      timestamp: '2024-12-14 13:45'
    },
    {
      id: 4,
      action: 'Paiement traité',
      user: 'Transaction #98765',
      type: 'payment',
      timestamp: '2024-12-14 12:20'
    }
  ];

  const criticalLogs = [
    {
      id: 1,
      level: 'error',
      message: 'Échec de paiement pour la commande #12345',
      timestamp: '2024-12-14 16:45',
      resolved: false
    },
    {
      id: 2,
      level: 'warning',
      message: 'Tentative de connexion suspecte détectée',
      timestamp: '2024-12-14 15:20',
      resolved: true
    },
    {
      id: 3,
      level: 'info',
      message: 'Maintenance programmée effectuée avec succès',
      timestamp: '2024-12-14 02:00',
      resolved: true
    }
  ];

  const usersByRole = [
    { role: 'Clients', count: 1847, percentage: 65 },
    { role: 'Livreurs', count: 523, percentage: 18 },
    { role: 'Commerçants', count: 312, percentage: 11 },
    { role: 'Prestataires', count: 165, percentage: 6 }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLogLevelColor = (level: string) => {
    switch (level) {
      case 'error': return 'bg-red-100 text-red-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'info': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Administration EcoDeli
        </h1>
        <p className="text-gray-600">
          Tableau de bord administrateur - Vue d'ensemble et gestion de la plateforme
        </p>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {platformStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`${stat.color} mr-4`}>{stat.icon}</div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
              <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-blue-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Pending Validations */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Validations en attente
            </h2>
            <Button size="sm">Voir toutes</Button>
          </div>
          
          <Card className="mb-8">
            <div className="space-y-4">
              {pendingValidations.map((validation) => (
                <div key={validation.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{validation.user}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(validation.priority)}`}>
                        {validation.priority === 'high' ? 'Urgent' : validation.priority === 'medium' ? 'Normal' : 'Faible'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{validation.reason}</p>
                    <p className="text-xs text-gray-500">{validation.email} • {validation.date}</p>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <UserCheck className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="danger">
                      <Ban className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Activity */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Activité récente de la plateforme
            </h2>
            <Card>
              <div className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.user} • {activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Users by Role */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Répartition des utilisateurs
            </h2>
            <Card>
              <div className="space-y-4">
                {usersByRole.map((userType, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium text-gray-900">{userType.role}</span>
                      <span className="text-sm text-gray-600">({userType.count})</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${userType.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 w-8">{userType.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Actions rapides</h3>
            <div className="space-y-2">
              <Button className="w-full justify-start" variant="outline" size="sm">
                <Users className="h-4 w-4 mr-2" />
                Gérer les utilisateurs
              </Button>
              <Button className="w-full justify-start" variant="outline" size="sm">
                <Package className="h-4 w-4 mr-2" />
                Voir toutes les annonces
              </Button>
              <Button className="w-full justify-start" variant="outline" size="sm">
                <TrendingUp className="h-4 w-4 mr-2" />
                Statistiques détaillées
              </Button>
              <Button className="w-full justify-start" variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Exporter les données CSV
              </Button>
              <Button className="w-full justify-start" variant="outline" size="sm">
                <Activity className="h-4 w-4 mr-2" />
                Logs d'activité
              </Button>
            </div>
          </Card>

          {/* Critical Logs */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Logs critiques</h3>
            <div className="space-y-3">
              {criticalLogs.map((log) => (
                <div key={log.id} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLogLevelColor(log.level)}`}>
                      {log.level.toUpperCase()}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${log.resolved ? 'bg-blue-500' : 'bg-red-500'}`}></span>
                  </div>
                  <p className="text-xs text-gray-900 mb-1">{log.message}</p>
                  <p className="text-xs text-gray-500">{log.timestamp}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* System Status */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">État du système</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Serveur principal</span>
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Base de données</span>
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Service de paiement</span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">API externe</span>
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              </div>
            </div>
          </Card>

          {/* Platform Metrics */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Métriques clés</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Taux de satisfaction</span>
                <span className="font-medium text-blue-600">94.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Temps de réponse moyen</span>
                <span className="font-medium text-sky-600">1.2s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Disponibilité</span>
                <span className="font-medium text-indigo-600">99.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Croissance mensuelle</span>
                <span className="font-medium text-purple-600">+12.5%</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;