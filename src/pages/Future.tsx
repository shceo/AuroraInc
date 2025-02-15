import React from 'react';
import { CreditCard, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FuturePage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div></div>
  );
}