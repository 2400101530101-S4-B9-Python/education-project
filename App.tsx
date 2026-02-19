
import React, { useState, useEffect } from 'react';
import { User, UserRole } from './types';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import AdminDashboard from './components/AdminDashboard';
import LiveSession from './components/LiveSession';
import Header from './components/Header';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);

  // Load state from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('edu_user');
    const savedSession = localStorage.getItem('edu_active_session');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedSession) {
      setActiveSessionId(savedSession);
    }
  }, []);

  const handleLogin = (u: User) => {
    setUser(u);
    localStorage.setItem('edu_user', JSON.stringify(u));
  };

  const handleLogout = () => {
    setUser(null);
    setActiveSessionId(null);
    localStorage.removeItem('edu_user');
    localStorage.removeItem('edu_active_session');
  };

  const handleEnterLive = (id: string) => {
    setActiveSessionId(id);
    localStorage.setItem('edu_active_session', id);
  };

  const handleEndLive = () => {
    setActiveSessionId(null);
    localStorage.removeItem('edu_active_session');
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  if (activeSessionId) {
    return (
      <LiveSession 
        sessionId={activeSessionId} 
        user={user} 
        onEnd={handleEndLive} 
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header user={user} onLogout={handleLogout} />
      <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8 max-w-7xl">
        <div className="transition-all duration-300 ease-in-out">
          {user.role === UserRole.STUDENT && (
            <StudentDashboard user={user} onEnterLive={handleEnterLive} />
          )}
          {user.role === UserRole.TEACHER && (
            <TeacherDashboard user={user} onEnterLive={handleEnterLive} />
          )}
          {user.role === UserRole.ADMIN && (
            <AdminDashboard user={user} />
          )}
        </div>
      </main>
      <footer className="py-6 border-t border-slate-200 text-center text-slate-400 text-xs">
        &copy; 2024 EduConnect Live Platform. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
