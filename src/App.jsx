import { useState } from 'react'
import { Search, ExternalLink, TrendingUp, Coins, Zap, Activity, Sparkles, Twitter, Star } from 'lucide-react'
import './App.css'

const estimators = [
  {
    id: 1,
    name: 'Limitless',
    description: 'A prediction market platform',
    url: 'https://limitless-airdropper.vercel.app/',
    icon: TrendingUp,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    shadow: '0 20px 60px rgba(102, 126, 234, 0.4)'
  },
  {
    id: 2,
    name: 'Solstice',
    description: 'Solana-based hub offering institutional yield on stablecoins',
    url: 'https://solstice-airdrop-est.vercel.app/',
    icon: Coins,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    shadow: '0 20px 60px rgba(240, 147, 251, 0.4)'
  },
  {
    id: 3,
    name: 'PRJX',
    description: 'DeFi hub on HyperEVM offering the most lucrative yield',
    url: 'https://prjx-airdrop-est.vercel.app/',
    icon: Zap,
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    shadow: '0 20px 60px rgba(250, 112, 154, 0.4)'
  },
  {
    id: 4,
    name: 'Lighter',
    description: 'Perpetual DEX airdrop estimator',
    url: 'https://lighter-airdrop-est.vercel.app/',
    icon: Activity,
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    shadow: '0 20px 60px rgba(48, 207, 208, 0.4)'
  }
]

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredEstimators = estimators.filter(est =>
    est.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    est.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="app">
      <div className="background-effects">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container">
        <header className="header">
          <div className="header-content">
            <div className="logo-section">
              <div className="logo-icon">
                <Sparkles size={36} strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="title">Airdrop Estimators</h1>
                <p className="subtitle">Premium calculators for crypto airdrops</p>
              </div>
            </div>
            
            <div className="header-actions">
              <a 
                href="https://app.ethos.network/profile/x/web3wikis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ethos-button"
              >
                <Star size={18} />
                <span>Review on Ethos</span>
              </a>
              <a 
                href="https://x.com/web3wikis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="twitter-button"
              >
                <Twitter size={18} />
                <span>@web3wikis</span>
              </a>
            </div>
          </div>

          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search estimators..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </header>

        <div className="cards-grid">
          {filteredEstimators.map((estimator) => {
            const Icon = estimator.icon
            return (
              <a
                key={estimator.id}
                href={estimator.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{ 
                  '--card-gradient': estimator.gradient,
                  '--card-shadow': estimator.shadow
                }}
              >
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="card-icon-wrapper">
                    <div className="card-icon">
                      <Icon size={32} strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="card-title">{estimator.name}</h3>
                  <p className="card-description">{estimator.description}</p>
                  <div className="card-footer">
                    <span className="card-link">Launch Estimator</span>
                    <ExternalLink size={18} className="external-icon" />
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {filteredEstimators.length === 0 && (
          <div className="no-results">
            <p>No estimators found matching "{searchTerm}"</p>
          </div>
        )}

        <footer className="footer">
          <p>Created by <a href="https://x.com/web3wikis" target="_blank" rel="noopener noreferrer">@web3wikis</a></p>
        </footer>
      </div>
    </div>
  )
}

export default App
