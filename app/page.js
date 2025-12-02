import Link from 'next/link';
import { ArrowRight, Users, Percent, FileCheck, MapPin, Calendar, DollarSign } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="glass shadow-xl sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            👷 ELSIP
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/problem" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors">Problems</Link>
            <Link href="/solution" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors">Solution</Link>
            <Link href="/register" className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg">
              Start Now
            </Link>
            <Link href="/admin" className="bg-gray-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-lg">
              🔐 Admin
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
            ELSIP
            <span className="block text-yellow-400 text-6xl md:text-7xl lg:text-8xl">Digital Ecosystem</span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Revolutionizing Ministry of Labor service delivery through{' '}
            <span className="font-bold text-yellow-300">6 integrated innovation pillars</span>
          </p>
          
          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            <div className="glass p-10 rounded-4xl text-center">
              <div className="text-6xl font-black text-yellow-400 mb-4">70%</div>
              <div className="text-2xl font-bold">Efficiency Increase</div>
            </div>
            <div className="glass p-10 rounded-4xl text-center">
              <div className="text-6xl font-black text-yellow-400 mb-4">95%</div>
              <div className="text-2xl font-bold">Time Reduction</div>
            </div>
            <div className="glass p-10 rounded-4xl text-center">
              <div className="text-6xl font-black text-yellow-400 mb-4">99%</div>
              <div className="text-2xl font-bold">Fraud Elimination</div>
            </div>
          </div>

          <Link 
            href="/register"
            className="glass inline-flex items-center px-12 py-8 text-2xl font-black rounded-4xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border-2 border-white/30 max-w-max mx-auto group"
          >
            🚀 Start AI Skills Assessment
            <ArrowRight className="ml-6 w-10 h-10 group-hover:translate-x-3 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* 3 Main Pillars */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <Link href="/register" className="group">
              <div className="glass p-12 rounded-4xl h-full hover:shadow-3xl hover:-translate-y-6 transition-all duration-500 hover:border-blue-200 border-2">
                <div className="text-7xl mb-8 group-hover:scale-110 transition-transform duration-300">🤖</div>
                <h2 className="text-4xl font-black mb-6 text-gray-900">AI Skills Matching</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">Reduces matching time from weeks to minutes (95% reduction). Personalized upskilling recommendations.</p>
                <div className="flex items-center text-blue-600 font-bold text-2xl group-hover:underline">
                  Register Now <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/credentials" className="group">
              <div className="glass p-12 rounded-4xl h-full hover:shadow-3xl hover:-translate-y-6 transition-all duration-500 hover:border-green-200 border-2">
                <div className="text-7xl mb-8 group-hover:scale-110 transition-transform duration-300">🔗</div>
                <h2 className="text-4xl font-black mb-6 text-gray-900">Blockchain Credentials</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">99% fraud-free digital certificates with instant QR verification worldwide.</p>
                <div className="flex items-center text-green-600 font-bold text-2xl group-hover:underline">
                  View Credentials <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/inspections" className="group">
              <div className="glass p-12 rounded-4xl h-full hover:shadow-3xl hover:-translate-y-6 transition-all duration-500 hover:border-orange-200 border-2">
                <div className="text-7xl mb-8 group-hover:scale-110 transition-transform duration-300">🏭</div>
                <h2 className="text-4xl font-black mb-6 text-gray-900">Mobile Inspections</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">3x faster digital inspections with photo documentation and real-time analytics.</p>
                <div className="flex items-center text-orange-600 font-bold text-2xl group-hover:underline">
                  Start Inspection <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Proposal Sections */}
      <section className="py-32 bg-gradient-to-t from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-6xl font-black text-center mb-20 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Complete Proposal Coverage
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { href: '/problem', title: 'Problem Statement', icon: '📊', desc: '6 major challenges identified' },
              { href: '/solution', title: '6 Innovation Pillars', icon: '🚀', desc: 'Integrated ecosystem solution' },
              { href: '/roadmap', title: '12-Month Roadmap', icon: '🗺️', desc: '$1.2M budget breakdown' },
              { href: '/budget', title: 'KPIs & Impact', icon: '💰', desc: 'ROI in 18 months' }
            ].map((section, i) => (
              <Link key={i} href={section.href} className="group glass/50 p-10 rounded-4xl hover:shadow-2xl hover:-translate-y-4 transition-all bg-white/20 backdrop-blur-xl border-white/30">
                <div className="text-5xl mb-6">{section.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">{section.title}</h3>
                <p className="text-lg opacity-90">{section.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-black mb-8 text-gray-900">Ready to Transform Ethiopia's Labor Market?</h2>
          <p className="text-2xl text-gray-600 mb-12">Join 5,000+ workers already registered</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/register" className="bg-blue-600 text-white px-12 py-6 rounded-4xl text-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
              🚀 Register Now
            </Link>
            <Link href="/admin" className="border-4 border-gray-200 text-gray-900 px-12 py-6 rounded-4xl text-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
              🔐 Admin Login
            </Link>
          </div>
          <p className="text-lg text-gray-500 mt-12">Ministry of Labor and Skills • Ethiopia • 2025</p>
        </div>
      </section>
    </div>
  );
}

