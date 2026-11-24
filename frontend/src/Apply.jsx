
import { useState } from 'react'

function Apply({ onBack }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="apply-page">
        <h1>JobConnect</h1>
        <h2>Application Submitted Successfully!</h2>
        <p>
          Thank you for applying. Your application has been received.
        </p>

        <button onClick={onBack}>
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="apply-page">
      <h1>JobConnect</h1>
      <h2>Job Application Form</h2>

      <button type="button" onClick={onBack}>
        Back to Home
      </button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          required
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          required
        />

        <input
          type="tel"
          placeholder="Enter Your Phone Number"
          required
        />

        <button type="submit">
          Submit Application
        </button>
      </form>
    </div>
  )
}

export default Apply
