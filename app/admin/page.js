'use client';
import { useState, useEffect } from 'react';
import { Users, FileCheck, AlertCircle, BarChart3, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [stats, setStats] = useState({
    workers: 5234,
    jobs: 1247,
    inspections: 247,
    matchRate: 92,
    certificates: 1500
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
      fetchStats();
    }
  }, []);

  const login = async () => {
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'admin@elsip.gov.et',
          password: 'MoLS2025!'
        })
      });

      if (response.ok) {
        const token = await response.text();
        localStorage.setItem('adminToken', token);
        setIsAuthenticated(true);
        fetchStats();
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats', {
        headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` }
      });
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="glass/50 p-16 rounded-4xl text-center max-w-md w-full mx-8 border border-white/20 shadow-2xl">
          <div className="text-8xl mb-8">🔐</div>
          <h1 className="text-5xl font-black mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ELSIP Admin Portal
          </h1>
          <p className="text-2xl text-gray-300 mb-12">Ministry of Labor & Skills</p>
          <button
            onClick={login}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-12 rounded-4xl text-3xl font-black hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-4 border-white/20 shadow-xl"
          >
            Enter Dashboard
          </button>
          <p className="text-sm text-gray-400 mt-8 font-mono">
            admin@elsip.gov.et <br /> MoLS2025!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="glass/50 shadow-2xl p-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">🔐</div>
            <div>
              <h1 className="text-4xl font-black">ELSIP Admin Dashboard</h1>
              <p className="text-gray-400">Ministry of Labor & Skills</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="flex items-center space-x-3 px-8 py-4 bg-red-600/80 hover:bg-red-600 text-white rounded-3xl font-bold transition-all hover:shadow-xl"
          >
            <LogOut size={24} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="glass/50 p-10 rounded-4xl border border-white/20 hover:shadow-2xl transition-all">
            <Users className="w-16 h-16 text-blue-400 mb-6 mx-auto" />
            <div className="text-5xl font-black text-white mb-4 text-center">{stats.workers}</div>
            <div className="text-xl text-gray-400 text-center font-bold">Registered Workers</div>
          </div>

          <div className="glass/50 p-10 rounded-4xl border border-white/20 hover:shadow-2xl transition-all">
            <BarChart3 className="w-16 h-16 text-green-400 mb-6 mx-auto" />
            <div className="text-5xl font-black text-white mb-4 text-center">{stats.matchRate}%</div>
            <div className="text-xl text-gray-400 text-center font-bold">Match Rate</div>
          </div>

          <div className="glass/50 p-10 rounded-4xl border border-white/20 hover:shadow-2xl transition-all">
            <FileCheck className="w-16 h-16 text-purple-400 mb-6 mx-auto" />
            <div className="text-5xl font-black text-white mb-4 text-center">{stats.certificates}</div>
            <div className="text-xl text-gray-400 text-center font-bold">Credentials</div>
          </div>

          <div className="glass/50 p-10 rounded-4xl border border-white/20 hover:shadow-2xl transition-all">
            <AlertCircle className="w-16 h-16 text-orange-400 mb-6 mx-auto" />
            <div className="text-5xl font-black text-white mb-4 text-center">{stats.inspections}</div>
            <div className="text-xl text-gray-400 text-center font-bold">Inspections</div>
          </div>

          <div className="glass/50 p-10 rounded-4xl border border-white/20 hover:shadow-2xl transition-all md:col-span-2 lg:col-span-1">
            <DollarSign className="w-16 h-16 text-yellow-400 mb-6 mx-auto" />
            <div className="text-3xl font-black text-white mb-4 text-center">$1.2M</div>
            <div className="text-xl text-gray-400 text-center font-bold">Budget Deployed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

