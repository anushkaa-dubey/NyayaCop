import React, { useState } from 'react'
import type { AnalysisResult, Judgment, Language } from './types'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ComplaintForm from './components/ComplaintForm'
import ResultCard from './components/ResultCard'
import JudgmentModal from './components/JudgmentModal'
import Footer from './components/Footer'
import { mockAnalysisResult } from './data/mockData'
import './App.css'

function App() {
  const [showResults, setShowResults] = useState(false)
  const [isCitizenMode, setIsCitizenMode] = useState(false)
  const [selectedJudgment, setSelectedJudgment] = useState<Judgment | null>(null)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)

  const handleAnalyze = (complaint: string, language: Language) => {
    // Simulate API call with mock data
    setTimeout(() => {
      setAnalysisResult(mockAnalysisResult)
      setShowResults(true)
    }, 1000)
  }

  const handleJudgmentClick = (judgment: Judgment) => {
    setSelectedJudgment(judgment)
  }

  return (
    <div className="app">
      <Navbar />
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
          isCitizenMode={isCitizenMode}
        />

        {showResults && analysisResult && (
          <div className="results-container">
            <div className="suggestions-section">
              <h2>Suggested Legal Sections</h2>
              {analysisResult.suggestions.map((suggestion, index) => (
                <ResultCard
                  key={index}
                  section={suggestion.section}
                  description={suggestion.description}
                  act={suggestion.act}
                />
              ))}
            </div>

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
          </div>
        )}
      </main>

      {selectedJudgment && (
        <JudgmentModal
          judgment={selectedJudgment}
          onClose={() => setSelectedJudgment(null)}
        />
      )}

      <Footer />
    </div>
  )
}

export default App
