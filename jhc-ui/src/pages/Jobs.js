import React, { useState, useEffect } from 'react';

function AppliedJobsPage() {
  const [jobs] = useState([]);

  useEffect(() => {
    // TODO: fetch list of applied jobs from backend and update `jobs` state
  }, []);

  return (
    <div>
      <h1>Applied Jobs</h1>
      <p>You have nothing here yet!</p>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company_name}</p>
            {/* add other job details */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppliedJobsPage;
