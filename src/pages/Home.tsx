import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Package, Users, Shield, MapPin, Clock, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Package className="h-8 w-8 text-blue-600" />,
      title: t('home.forClients'),
      description: 'Publiez vos annonces de livraison et trouvez des livreurs disponibles dans votre région. Réservez aussi des services personnalisés.'
    },
    {
      icon: <Truck className="h-8 w-8 text-sky-600" />,
      title: t('home.forDelivery'),
      description: 'Planifiez vos trajets et gagnez de l\'argent en livrant pour vos voisins. Optimisez vos déplacements quotidiens.'
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: t('home.forMerchants'),
      description: 'Développez votre réseau de livraison et fidélisez vos clients avec un service de proximité.'
    }
  ];

  const benefits = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'Livraison de proximité',
      description: 'Connectez-vous avec des livreurs de votre quartier'
    },
    {
      icon: <Clock className="h-6 w-6 text-sky-600" />,
      title: 'Flexibilité totale',
      description: 'Choisissez vos horaires et vos trajets'
    },
    {
      icon: <Star className="h-6 w-6 text-indigo-600" />,
      title: 'Communauté de confiance',
      description: 'Système d\'évaluation et de vérification'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Utilisateurs actifs' },
    { number: '50,000+', label: 'Livraisons réalisées' },
    { number: '500+', label: 'Villes couvertes' },
    { number: '4.8/5', label: 'Note moyenne' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50">
      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Livraison <span className="text-blue-600">collaborative</span><br />
              éco-responsable
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              EcoDeli connecte les particuliers pour des livraisons participatives. 
              Clients, livreurs, commerçants et prestataires sur une seule plateforme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  {t('home.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  {t('auth.login')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('home.howItWorks')}
            </h2>
            <p className="text-lg text-gray-600">
              Une plateforme simple et sécurisée pour tous vos besoins de livraison
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Publiez votre annonce
              </h3>
              <p className="text-gray-600">
                Décrivez votre colis ou service et indiquez les lieux de départ et d'arrivée
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Trouvez un livreur
              </h3>
              <p className="text-gray-600">
                Recevez des propositions de livreurs qui font déjà le trajet
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Suivez votre livraison
              </h3>
              <p className="text-gray-600">
                Suivez votre colis en temps réel jusqu'à sa livraison
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sécurité et confiance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tous nos utilisateurs sont vérifiés. Paiements sécurisés, assurance incluse 
              et support client disponible 7j/7.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez des milliers d'utilisateurs qui font confiance à EcoDeli
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              {t('auth.register')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;