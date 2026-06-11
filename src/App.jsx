import { useState } from 'react'
import { fetchHoroscope } from './api/horoscope'

const ZODIAC_SYMBOLS = {
  Aries: '♈', Taurus: '♉', Gemini: '♊', Cancer: '♋',
  Leo: '♌', Virgo: '♍', Libra: '♎', Scorpio: '♏',
  Sagittarius: '♐', Capricorn: '♑', Aquarius: '♒', Pisces: '♓'
}

function getZodiacSign(dateString) {
  const date = new Date(dateString)
  const month = date.getMonth() + 1
  const day = date.getDate()

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries'
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus'
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini'
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer'
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo'
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo'
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra'
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio'
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius'
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn'
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius'
  return 'Pisces'
}

function App() {
  const [dob, setDob] = useState('')
  const [sign, setSign] = useState(null)
  const [horoscope, setHoroscope] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async () => {
    if (!dob) return

    const zodiacSign = getZodiacSign(dob)
    setSign(zodiacSign)
    setLoading(true)
    setError(null)
    setHoroscope(null)

    try {
      const reading = await fetchHoroscope(zodiacSign)
      setHoroscope(reading)
    } catch (err) {
      setError('Something went wrong, try again')
    }

    setLoading(false)
  }

  return (
    <div className="page">
      <div className="stars" aria-hidden="true" />
      <div className="card">
        <div className="moon-icon" aria-hidden="true">☽</div>
        <h1 className="title">Horoscope</h1>
        <p className="subtitle">Enter your date of birth to reveal your reading</p>
        <div className="form">
          <input
            className="date-input"
            type="date"
            value={dob}
            max={new Date().toISOString().split('T')[0]}
            onChange={(e) => setDob(e.target.value)}
          />
          <button className="btn" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Reading the stars…' : 'Get my horoscope'}
          </button>
        </div>
        {error && <p className="error">{error}</p>}
        {sign && horoscope && (
          <div className="result">
            <h2 className="sign">
              <span className="sign-symbol">{ZODIAC_SYMBOLS[sign]}</span>
              {sign.toUpperCase()}
            </h2>
            <p className="reading">{horoscope}</p>
          </div>
        )}
      </div>
    </div>
  )

}

export default App