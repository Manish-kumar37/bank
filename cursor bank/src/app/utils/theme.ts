export type UserType = 'personal' | 'nri' | 'business';

export const getThemeColors = (userType: UserType) => {
  const themes = {
    personal: {
      primary: 'blue',
      gradient: 'from-blue-600 to-blue-800',
      bg: 'bg-blue-700',
      bgHover: 'bg-blue-800',
      text: 'text-blue-700',
      border: 'border-blue-200',
      bgLight: 'bg-blue-50',
      bgCard: 'bg-blue-100',
    },
    nri: {
      primary: 'red',
      gradient: 'from-red-600 to-red-800',
      bg: 'bg-red-700',
      bgHover: 'bg-red-800',
      text: 'text-red-700',
      border: 'border-red-200',
      bgLight: 'bg-red-50',
      bgCard: 'bg-red-100',
    },
    business: {
      primary: 'orange',
      gradient: 'from-orange-600 to-orange-800',
      bg: 'bg-orange-700',
      bgHover: 'bg-orange-800',
      text: 'text-orange-700',
      border: 'border-orange-200',
      bgLight: 'bg-orange-50',
      bgCard: 'bg-orange-100',
    },
  };

  return themes[userType];
};
