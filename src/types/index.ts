export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  avatar?: string;
  isVerified: boolean;
  createdAt: string;
  phone?: string;
  address?: Address;
}

export type UserRole = 'client' | 'delivery' | 'merchant' | 'service' | 'admin';

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
  type: 'delivery' | 'service';
  status: 'active' | 'completed' | 'cancelled';
  price: number;
  pickup: Address;
  delivery: Address;
  weight?: number;
  dimensions?: string;
  createdBy: string;
  createdAt: string;
  assignedTo?: string;
  scheduledDate?: string;
}

export interface Route {
  id: string;
  deliveryPersonId: string;
  startLocation: Address;
  endLocation: Address;
  date: string;
  availableCapacity: number;
  pricePerKm: number;
  status: 'available' | 'full' | 'completed';
}

export interface Invoice {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'paid' | 'overdue';
  dueDate: string;
  items: InvoiceItem[];
  createdAt: string;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}