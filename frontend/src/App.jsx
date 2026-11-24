
import { useEffect, useState } from 'react'
import './App.css'
import Apply from './Apply'

function App() {
  const [jobs, setJobs] = useState([])
  const [showApply, setShowApply] = useState(false)

  useEffect(() => {
    fetch('https://minijobportal-0jju.onrender.com/api/jobs/')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.log('Error fetching jobs:', error))
  }, [])

  if (showApply) {
    return <Apply onBack={() => setShowApply(false)} />
  }

  return (
    <div className="home-page">
      <h1>JobConnect</h1>
      <h2>Available Jobs</h2>

      <div className="jobs-container">
        {jobs.length === 0 ? (
          <p className="no-jobs">No jobs available right now.</p>
        ) : (
          jobs.map(job => (
            <div className="job-card" key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>Salary: ₹{job.salary}</p>
              <p>{job.description}</p>

              <button onClick={() => setShowApply(true)}>
                Apply Now
              </button>
            </div>
          ))
        )}
      </div>

      <footer className="footer">
        <p>© 2026 JobConnect. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App
