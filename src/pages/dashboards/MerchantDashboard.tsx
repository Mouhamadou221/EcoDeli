import React from 'react';
import { Store, Package, TrendingUp, Users, Calendar, CreditCard, FileText, BarChart3 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';

const MerchantDashboard: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  const stats = [
    { label: 'Annonces actives', value: '12', icon: <Package className="h-6 w-6" />, color: 'text-blue-600' },
    { label: 'Ventes ce mois', value: '1,245€', icon: <TrendingUp className="h-6 w-6" />, color: 'text-sky-600' },
    { label: 'Clients actifs', value: '87', icon: <Users className="h-6 w-6" />, color: 'text-indigo-600' },
    { label: 'Taux de conversion', value: '24%', icon: <Store className="h-6 w-6" />, color: 'text-purple-600' }
  ];

  const recentOrders = [
    {
      id: '#12345',
      customer: 'Marie Dubois',
      product: 'Bouquet de fleurs',
      amount: '45€',
      status: 'delivered',
      date: '2024-12-14'
    },
    {
      id: '#12344',
      customer: 'Pierre Martin',
      product: 'Panier de légumes bio',
      amount: '32€',
      status: 'in_transit',
      date: '2024-12-14'
    },
    {
      id: '#12343',
      customer: 'Sophie Laurent',
      product: 'Gâteau personnalisé',
      amount: '68€',
      status: 'preparing',
      date: '2024-12-13'
    },
    {
      id: '#12342',
      customer: 'Jean Dupont',
      product: 'Produits artisanaux',
      amount: '25€',
      status: 'delivered',
      date: '2024-12-13'
    }
  ];

  const topProducts = [
    { name: 'Bouquets de saison', sales: 23, revenue: '1,035€' },
    { name: 'Paniers bio', sales: 18, revenue: '576€' },
    { name: 'Pâtisseries', sales: 15, revenue: '420€' },
    { name: 'Produits artisanaux', sales: 12, revenue: '360€' }
  ];

  const contracts = [
    {
      id: 1,
      type: 'Livraison express',
      partner: 'EcoDeli Premium',
      status: 'active',
      commission: '8%',
      startDate: '2024-01-15'
    },
    {
      id: 2,
      type: 'Livraison standard',
      partner: 'Réseau local',
      status: 'pending',
      commission: '5%',
      startDate: '2024-12-20'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-blue-100 text-blue-800';
      case 'in_transit': return 'bg-sky-100 text-sky-800';
      case 'preparing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered': return 'Livré';
      case 'in_transit': return 'En cours';
      case 'preparing': return 'Préparation';
      default: return 'Inconnu';
    }
  };

  const getContractStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'expired': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
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
          Gérez votre boutique, suivez vos performances et développez votre réseau de livraison
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
        {/* Recent Orders */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Commandes récentes
            </h2>
            <Button size="sm">Voir toutes</Button>
          </div>
          
          <Card className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Commande</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Client</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Montant</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Statut</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-100">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-gray-900">{order.id}</p>
                          <p className="text-sm text-gray-600">{order.product}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-900">{order.customer}</td>
                      <td className="py-3 px-4 font-medium text-gray-900">{order.amount}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {getStatusText(order.status)}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <Button size="sm" variant="outline">
                          Voir
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Contracts */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Contrats et partenariats
            </h2>
            <Button size="sm" variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Nouveau contrat
            </Button>
          </div>
          
          <Card>
            <div className="space-y-4">
              {contracts.map((contract) => (
                <div key={contract.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">{contract.type}</h3>
                      <p className="text-sm text-gray-600">Partenaire: {contract.partner}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getContractStatusColor(contract.status)}`}>
                      {contract.status === 'active' ? 'Actif' : 'En attente'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Commission: {contract.commission}</span>
                    <span>Début: {new Date(contract.startDate).toLocaleDateString('fr-FR')}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Actions rapides</h3>
            <div className="space-y-2">
              <Button className="w-full justify-start" variant="outline" size="sm">
                <Package className="h-4 w-4 mr-2" />
                Créer une annonce
              </Button>
              <Button className="w-full justify-start" variant="outline" size="sm">
                <BarChart3 className="h-4 w-4 mr-2" />
                Statistiques détaillées
              </Button>
              <Button className="w-full justify-start" variant="outline" size="sm">
                <CreditCard className="h-4 w-4 mr-2" />
                Gérer les paiements
              </Button>
              <Button className="w-full justify-start" variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Planifier les livraisons
              </Button>
              <Button className="w-full justify-start" variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Factures PDF
              </Button>
            </div>
          </Card>

          {/* Top Products */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Produits populaires</h3>
            <div className="space-y-3">
              {topProducts.map((product, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{product.name}</p>
                    <p className="text-xs text-gray-600">{product.sales} ventes</p>
                  </div>
                  <span className="font-bold text-blue-600 text-sm">{product.revenue}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Performance Metrics */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Performance</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Satisfaction client</span>
                <div className="flex items-center">
                  <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  <span className="text-sm font-medium">4.6/5</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Délai de livraison</span>
                <div className="flex items-center">
                  <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                    <div className="bg-sky-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                  <span className="text-sm font-medium">1.2j</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Taux de retour</span>
                <div className="flex items-center">
                  <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <span className="text-sm font-medium">2.1%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MerchantDashboard;