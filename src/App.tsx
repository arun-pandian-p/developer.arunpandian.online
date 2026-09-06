import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CMSProvider } from './context/CMSContext';
import { PortfolioPage } from './pages/PortfolioPage';
import { LoginPage } from './pages/LoginPage';
import { AdminPage } from './pages/AdminPage';
import { TopicDetailPage } from './pages/TopicDetailPage';

export const App: React.FC = () => {
  return (
    <CMSProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/home" element={<TopicDetailPage defaultTopic="home" />} />
          <Route path="/studio" element={<TopicDetailPage defaultTopic="home" />} />
          <Route path="/services" element={<TopicDetailPage defaultTopic="services" />} />
          <Route path="/projects" element={<TopicDetailPage defaultTopic="projects" />} />
          <Route path="/freelance" element={<TopicDetailPage defaultTopic="freelance" />} />
          <Route path="/topic/:topicId" element={<TopicDetailPage />} />
          <Route path="/topic/:topicId/:subId" element={<TopicDetailPage />} />
          <Route path="/subtopic/:subId" element={<TopicDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </CMSProvider>
  );
};
