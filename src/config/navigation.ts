import React from 'react';
import { FiHome, FiTrendingUp, FiUsers, FiUser } from 'react-icons/fi';

export const hiddenOnPages = [
  '/onboarding',
  '/login',
  '/signup',
  '/auth',
  '/kyc-flow',
  '/kyc-demo',
  '/a2a-playground',

  // Intentionally hide bottom navigation on profile page
  // to provide a focused profile experience
  '/hushh-user-profile',
];

export interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  path: string;
  matchPaths?: string[];
}

export const navItems: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: FiHome,
    path: '/',
    matchPaths: ['/our-philosophy'],
  },
  {
    id: 'fund',
    label: 'Fund A',
    icon: FiTrendingUp,
    path: '/discover-fund-a',
    matchPaths: ['/sell-the-wall', '/ai-powered-berkshire'],
  },
  {
    id: 'community',
    label: 'Community',
    icon: FiUsers,
    path: '/community',
    matchPaths: [],
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: FiUser,
    path: '/hushh-user-profile',
    matchPaths: ['/contact', '/faq'],
  },
];