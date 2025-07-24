import { Link } from 'wouter';

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-georgian">
            Welcome to Metaweb
          </h1>
          
          <div className="space-y-6">
            <p className="text-xl text-gray-200 mb-12 font-georgian">
              Your Gateway to Digital Excellence
            </p>
            
            <Link href="/">
              <button className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-6 rounded-2xl font-bold text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 font-georgian group">
                <span className="group-hover:animate-bounce mr-3">🚀</span>
                Visit Metaweb
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}