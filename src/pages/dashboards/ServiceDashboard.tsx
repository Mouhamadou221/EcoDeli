import React from 'react';
import { Wrench, Calendar, Star, CreditCard, Clock, Users, FileText, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';

const ServiceDashboard: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  const stats = [
    { label: 'Prestations ce mois', value: '18', icon: <Wrench className="h-6 w-6" />, color: 'text-blue-600' },
    { label: 'Note moyenne', value: '4.8/5', icon: <Star className="h-6 w-6" />, color: 'text-yellow-500' },
    { label: 'Revenus ce mois', value: '1,340€', icon: <CreditCard className="h-6 w-6" />, color: 'text-sky-600' },
    { label: 'Clients réguliers', value: '24', icon: <Users className="h-6 w-6" />, color: 'text-indigo-600' }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      service: 'Plomberie - Réparation fuite',
      client: 'Marie Dubois',
      date: '2024-12-15',
      time: '14:00',
      duration: '2h',
      price: '85€',
      status: 'confirmed'
    },
    {
      id: 2,
      service: 'Électricité - Installation prises',
      client: 'Pierre Martin',
      date: '2024-12-15',
      time: '16:30',
      duration: '1h30',
      price: '65€',
      status: 'confirmed'
    },
    {
      id: 3,
      service: 'Jardinage - Entretien pelouse',
      client: 'Sophie Laurent',
      date: '2024-12-16',
      time: '09:00',
      duration: '3h',
      price: '120€',
      status: 'pending'
    }
  ];

  const serviceTypes = [
    { name: 'Plomberie', active: true, bookings: 12, avgPrice: '75€', validated: true },
    { name: 'Électricité', active: true, bookings: 8, avgPrice: '68€', validated: true },
    { name: 'Jardinage', active: true, bookings: 15, avgPrice: '45€', validated: true },
    { name: 'Ménage', active: false, bookings: 0, avgPrice: '25€', validated: false }
  ];

  const recentReviews = [
    {
      id: 1,
      client: 'Marie D.',
      rating: 5,
      comment: 'Excellent travail, très professionnel !',
      service: 'Plomberie',
      date: '2024-12-10'
    },
    {
      id: 2,
      client: 'Jean L.',
      rating: 4,
      comment: 'Rapide et efficace, je recommande.',
      service: 'Électricité',
      date: '2024-12-08'
    },
    {
      id: 3,
      client: 'Sophie M.',
      rating: 5,
      comment: 'Travail soigné et dans les temps.',
      service: 'Jardinage',
      date: '2024-12-05'
    }
  ];

  const profileValidation = {
    identity: { status: 'validated', label: 'Identité vérifiée' },
    insurance: { status: 'validated', label: 'Assurance professionnelle' },
    certifications: { status: 'pending', label: 'Certifications métier' },
    background: { status: 'validated', label: 'Vérification antécédents' }
  };

  const monthlyInvoice = {
    month: 'Décembre 2024',
    amount: '1,340€',
    commission: '134€',
    net: '1,206€',
    status: 'generated'
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-sky-100 text-sky-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Confirmé';
      case 'pending': return 'En attente';
      case 'completed': return 'Terminé';
      default: return 'Inconnu';
    }
  };

  const getValidationStatusColor = (status: string) => {
    switch (status) {
      case 'validated': return 'text-blue-600';
      case 'pending': return 'text-yellow-600';
      case 'rejected': return 'text-red-600';
      default: return 'text-gray-600';
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
          Gérez vos prestations, votre calendrier et développez votre activité
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
        {/* Upcoming Appointments */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Prochains rendez-vous
            </h2>
            <Button size="sm" variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Gérer les disponibilités
            </Button>
          </div>
          
          <div className="space-y-4 mb-8">
            {upcomingAppointments.map((appointment) => (
              <Card key={appointment.id} className="hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-medium text-gray-900">{appointment.service}</h3>
                    <p className="text-sm text-gray-600">Client: {appointment.client}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                    {getStatusText(appointment.status)}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(appointment.date).toLocaleDateString('fr-FR')}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {appointment.time} ({appointment.duration})
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-bold text-blue-600 text-lg">{appointment.price}</span>
                  <div className="space-x-2">
                    <Button size="sm" variant="outline">
                      Contacter
                    </Button>
                    <Button size="sm">
                      Détails
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Recent Reviews */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Avis récents
            </h2>
            <Button size="sm">Voir tous les avis</Button>
          </div>
          
          <Card>
            <div className="space-y-4">
              {recentReviews.map((review) => (
                <div key={review.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{review.client}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">"{review.comment}"</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{review.service}</span>
                    <span>{new Date(review.date).toLocaleDateString('fr-FR')}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Profile Validation */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Validation du profil</h3>
            <div className="space-y-3">
              {Object.entries(profileValidation).map(([key, validation]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{validation.label}</span>
                  <div className="flex items-center">
                    {validation.status === 'validated' ? (
                      <CheckCircle className={`h-4 w-4 ${getValidationStatusColor(validation.status)}`} />
                    ) : (
                      <Clock className={`h-4 w-4 ${getValidationStatusColor(validation.status)}`} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Service Types */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Types de prestations</h3>
            <div className="space-y-3">
              {serviceTypes.map((service, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="flex items-center">
                      <span className={`w-2 h-2 rounded-full mr-2 ${service.active ? 'bg-blue-500' : 'bg-gray-400'}`}></span>
                      <p className="font-medium text-gray-900 text-sm">{service.name}</p>
                      {service.validated && <CheckCircle className="h-3 w-3 text-blue-600 ml-1" />}
                    </div>
                    <p className="text-xs text-gray-600 ml-4">{service.bookings} réservations</p>
                  </div>
                  <span className="font-medium text-gray-700 text-sm">{service.avgPrice}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Monthly Invoice */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Facturation mensuelle</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Période</span>
                <span className="font-medium text-gray-900">{monthlyInvoice.month}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Chiffre d'affaires</span>
                <span className="font-medium text-gray-900">{monthlyInvoice.amount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Commission EcoDeli</span>
                <span className="text-red-600">-{monthlyInvoice.commission}</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">Net à percevoir</span>
                <span className="font-bold text-blue-600">{monthlyInvoice.net}</span>
              </div>
              <Button className="w-full mt-3" size="sm" variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Télécharger la facture
              </Button>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Actions rapides</h3>
            <div className="space-y-2">
              <Button className="w-full justify-start" variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Modifier les disponibilités
              </Button>
              <Button className="w-full justify-start" variant="outline" size="sm">
                <Wrench className="h-4 w-4 mr-2" />
                Ajouter une prestation
              </Button>
              <Button className="w-full justify-start" variant="outline" size="sm">
                <Star className="h-4 w-4 mr-2" />
                Voir toutes les évaluations
              </Button>
              <Button className="w-full justify-start" variant="outline" size="sm">
                <CreditCard className="h-4 w-4 mr-2" />
                Historique des paiements
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceDashboard;