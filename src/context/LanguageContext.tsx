import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  fr: {
    // Navigation
    'nav.dashboard': 'Tableau de bord',
    'nav.announcements': 'Annonces',
    'nav.routes': 'Trajets',
    'nav.payments': 'Paiements',
    'nav.profile': 'Profil',
    'nav.logout': 'Déconnexion',
    'nav.admin': 'Administration',
    
    // Common
    'common.welcome': 'Bienvenue',
    'common.save': 'Enregistrer',
    'common.cancel': 'Annuler',
    'common.delete': 'Supprimer',
    'common.edit': 'Modifier',
    'common.view': 'Voir',
    'common.create': 'Créer',
    'common.search': 'Rechercher',
    'common.filter': 'Filtrer',
    'common.loading': 'Chargement...',
    
    // Auth
    'auth.login': 'Se connecter',
    'auth.register': 'S\'inscrire',
    'auth.email': 'Email',
    'auth.password': 'Mot de passe',
    'auth.firstName': 'Prénom',
    'auth.lastName': 'Nom',
    'auth.phone': 'Téléphone',
    'auth.role': 'Rôle',
    'auth.chooseRole': 'Choisir un rôle',
    'auth.forgotPassword': 'Mot de passe oublié ?',
    
    // Roles
    'role.client': 'Client',
    'role.delivery': 'Livreur',
    'role.merchant': 'Commerçant',
    'role.service': 'Prestataire',
    'role.admin': 'Administrateur',
    
    // Home
    'home.title': 'EcoDeli - Livraison collaborative',
    'home.subtitle': 'La plateforme qui connecte les particuliers pour des livraisons éco-responsables',
    'home.cta': 'Commencer maintenant',
    'home.howItWorks': 'Comment ça marche',
    'home.forClients': 'Pour les clients',
    'home.forDelivery': 'Pour les livreurs',
    'home.forMerchants': 'Pour les commerçants',
    
    // Dashboard
    'dashboard.overview': 'Vue d\'ensemble',
    'dashboard.recentActivity': 'Activité récente',
    'dashboard.stats': 'Statistiques',
    'dashboard.quickActions': 'Actions rapides',
    
    // Announcements
    'announcements.title': 'Annonces',
    'announcements.create': 'Créer une annonce',
    'announcements.myAnnouncements': 'Mes annonces',
    'announcements.available': 'Disponibles',
    'announcements.pickup': 'Lieu de récupération',
    'announcements.delivery': 'Lieu de livraison',
    'announcements.price': 'Prix',
    'announcements.weight': 'Poids',
    'announcements.dimensions': 'Dimensions',
    'announcements.description': 'Description',
    
    // Status
    'status.active': 'Actif',
    'status.completed': 'Terminé',
    'status.cancelled': 'Annulé',
    'status.pending': 'En attente',
    'status.paid': 'Payé',
    'status.overdue': 'En retard'
  },
  en: {
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.announcements': 'Announcements',
    'nav.routes': 'Routes',
    'nav.payments': 'Payments',
    'nav.profile': 'Profile',
    'nav.logout': 'Logout',
    'nav.admin': 'Administration',
    
    // Common
    'common.welcome': 'Welcome',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.view': 'View',
    'common.create': 'Create',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.loading': 'Loading...',
    
    // Auth
    'auth.login': 'Login',
    'auth.register': 'Register',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.firstName': 'First Name',
    'auth.lastName': 'Last Name',
    'auth.phone': 'Phone',
    'auth.role': 'Role',
    'auth.chooseRole': 'Choose a role',
    'auth.forgotPassword': 'Forgot password?',
    
    // Roles
    'role.client': 'Client',
    'role.delivery': 'Delivery Person',
    'role.merchant': 'Merchant',
    'role.service': 'Service Provider',
    'role.admin': 'Administrator',
    
    // Home
    'home.title': 'EcoDeli - Collaborative Delivery',
    'home.subtitle': 'The platform connecting individuals for eco-friendly deliveries',
    'home.cta': 'Get Started',
    'home.howItWorks': 'How it works',
    'home.forClients': 'For clients',
    'home.forDelivery': 'For delivery persons',
    'home.forMerchants': 'For merchants',
    
    // Dashboard
    'dashboard.overview': 'Overview',
    'dashboard.recentActivity': 'Recent Activity',
    'dashboard.stats': 'Statistics',
    'dashboard.quickActions': 'Quick Actions',
    
    // Announcements
    'announcements.title': 'Announcements',
    'announcements.create': 'Create announcement',
    'announcements.myAnnouncements': 'My announcements',
    'announcements.available': 'Available',
    'announcements.pickup': 'Pickup location',
    'announcements.delivery': 'Delivery location',
    'announcements.price': 'Price',
    'announcements.weight': 'Weight',
    'announcements.dimensions': 'Dimensions',
    'announcements.description': 'Description',
    
    // Status
    'status.active': 'Active',
    'status.completed': 'Completed',
    'status.cancelled': 'Cancelled',
    'status.pending': 'Pending',
    'status.paid': 'Paid',
    'status.overdue': 'Overdue'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};