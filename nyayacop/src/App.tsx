import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import type { AnalysisResult, Judgment, Language } from './types'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ComplaintForm from './components/ComplaintForm'
import ResultCard from './components/ResultCard'
import JudgmentModal from './components/JudgmentModal'
import Footer from './components/Footer'
import About from './pages/About'
import Toast from './components/Toast'
import { mockAnalysisResult } from './data/mockData'
import './App.css'

function Home() {
  const [showResults, setShowResults] = useState(false)
  const [isCitizenMode, setIsCitizenMode] = useState(false)
  const [selectedJudgment, setSelectedJudgment] = useState<Judgment | null>(null)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
  const [toast, setToast] = useState<{ message: string; type: 'error' | 'success' | 'warning' } | null>(null)

  const handleAnalyze = (complaint: string, language: Language) => {
    if (!complaint.trim()) {
      setToast({
        message: 'Please enter your complaint before analyzing',
        type: 'error'
      })
      return
    }

    // Simulate API call with mock data
    setTimeout(() => {
      setAnalysisResult(mockAnalysisResult)
      setShowResults(true)
    }, 1000)
  }

  const handleCancel = () => {
    setShowResults(false)
    setAnalysisResult(null)
  }

  const handleJudgmentClick = (judgment: Judgment) => {
    setSelectedJudgment(judgment)
  }

  return (
    <>
      <Hero />
      <main className="main-content">
        <div className="mode-toggle">
          <label className="switch">
            <input
              type="checkbox"
              checked={isCitizenMode}
              onChange={(e) => setIsCitizenMode(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span className="mode-label">Citizen Mode</span>
        </div>

        <ComplaintForm
          onAnalyze={handleAnalyze}
          onCancel={handleCancel}
          isCitizenMode={isCitizenMode}
          hasResults={showResults}
        />

        {showResults && analysisResult && (
          <div className="results-container">
            <div className="suggestions-section">
              <h2>Suggested Legal Sections</h2>
              {analysisResult.suggestions.map((suggestion, index) => (
                <ResultCard
                  key={index}
                  suggestion={suggestion}
                  isCitizenMode={isCitizenMode}
                />
              ))}
            </div>

            {!isCitizenMode && (
              <>
                <div className="judgments-section">
                  <h2>Relevant Judgments</h2>
                  {analysisResult.judgments.map((judgment, index) => (
                    <div
                      key={index}
                      className="judgment-card"
                      onClick={() => handleJudgmentClick(judgment)}
                    >
                      <h3>{judgment.title} ({judgment.year})</h3>
                      <p>{judgment.summary}</p>
                    </div>
                  ))}
                </div>

                <div className="procedural-steps">
                  <h2>Procedural Steps</h2>
                  <ol>
                    {analysisResult.proceduralSteps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              </>
            )}
          </div>
        )}
      </main>

      {selectedJudgment && (
        <JudgmentModal
          judgment={selectedJudgment}
          onClose={() => setSelectedJudgment(null)}
        />
      )}

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
