import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeStudio } from '../components/admin/ThemeStudio';

export const AdminPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-zinc-950">
      <ThemeStudio
        isOpen={true}
        onClose={() => navigate('/')}
      />
    </div>
  );
};
