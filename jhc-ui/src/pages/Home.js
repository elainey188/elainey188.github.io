import React, { useState } from 'react';
import './home.css';
import Header from '../components/Header';

function Home(props) {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSalary, setSelectedSalary] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedExperienceLevel, setSelectedExperienceLevel] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const jobs = props.jobs
    .map((job) => ({
      ...job,
      postingDate: new Date(job.postingDate),
    }))
    .filter((job) => {
      const regex = new RegExp(searchTerm, 'gi');
      return job.title.match(regex) || job.company.match(regex);
    });
    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
      };

  const handleSalaryChange = (e) => {
    setSelectedSalary(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleExperienceLevelChange = (e) => {
    setSelectedExperienceLevel(e.target.value);
  };

  const handleJobTypeChange = (e) => {
    setSelectedJobType(e.target.value);
  };

  const handleIndustryChange = (e) => {
    setSelectedIndustry(e.target.value);
  };
  const filteredJobs = jobs.filter(job => {

  if (searchTerm) {
    if (!job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
  }
 
  if (selectedLocation) {
    if (job.location !== selectedLocation) {
      return false;
    }
  }
  
  if (selectedSalary) {
    if (job.salary !== selectedSalary) {
      return false;
    }
  }

  if (selectedExperienceLevel) {
    if (job.experienceLevel !== selectedExperienceLevel) {
      return false;
    }
  }
 
  if (selectedJobType) {
    if (job.jobType !== selectedJobType) {
      return false;
    }
  }
  
  if (selectedIndustry) {
    if (job.industry !== selectedIndustry) {
      return false;
    }
  }
  return true;
});

  const handleFilter = () => {
    const filteredJobs = jobs
    .filter((job) => !searchTerm || job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.company.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((job) => !selectedLocation || job.location === selectedLocation)
    .filter((job) => !selectedSalary || job.salary === selectedSalary)
    .filter((job) => !selectedExperienceLevel || job.experienceLevel === selectedExperienceLevel)
    .filter((job) => !selectedJobType || job.jobType === selectedJobType)
    .filter((job) => !selectedIndustry || job.industry === selectedIndustry);
  

    return filteredJobs.map((job) => (
      <div key={job.id} className="job-listing">
        <div className="job-header">
          <h4>{job.title}</h4>
          <h3>{job.company}</h3>
        </div>
        <div className="job-body">
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Description:</strong> {job.description}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Date Posted:</strong> {job.postingDate.toLocaleDateString()}</p>
          <p><strong>Industry:</strong> {job.industry}</p>
          <p><strong>Experience Level:</strong> {job.experienceLevel}</p>
          <p><strong>Job Type:</strong> {job.jobType}</p>
        </div>
        
      </div>
    ));
  };
  handleFilter();

  return (
  
    <div className="home-container">
      <Header />
      <h1>Find Your Passion, Land Your Dream Job:</h1>
      <p style={{ fontSize: "24px" }}>Start Your Job Search Now!</p>
     
      <div className="search-filters">
        <input type="text" placeholder="Search jobs" value={searchTerm} onChange={handleSearchTermChange} />
        <div className="filter-group">
          <label htmlFor="salary">Salary:</label>
          <select id="salary" value={selectedSalary} onChange={handleSalaryChange}>
            <option value="">Any</option>
            <option value="less than 50000">Less than 50000</option>
            <option value="50000 - 100000">50000 - 100000</option>
            <option value="100000 - 150000">100000 - 150000</option>
            <option value="more than 150000">More than 150000</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="location">Location:</label>
          <select id="location" value={selectedLocation} onChange={handleLocationChange}>
            <option value="">Any</option>
            <option value="Remote/Work From Home">Remote/Work From Home</option>
            <option value="New York, NY">New York, NY</option>
            <option value="San Francisco, SF">San Francisco, SF</option>
            <option value="Chicago, IL">Chicago, IL</option>
       
       
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="experience-level">Experience Level:</label>
          <select id="experience-level" value={selectedExperienceLevel} onChange={handleExperienceLevelChange}>
            <option value="">Any</option>
            <option value="Entry Level">Entry Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="job-type">Job Type:</label>
          <select id="job-type" value={selectedJobType} onChange={handleJobTypeChange}>
            <option value="">Any</option>
            <option value="Full-time">Full-Time</option>
            <option value="Part-time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Temporary">Temporary</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="industry">Industry:</label>
          <select id="industry" value={selectedIndustry} onChange={handleIndustryChange}>
            <option value="">Any</option>
            <option value="Technology">Technology</option>
  <option value="Healthcare">Healthcare</option>
  <option value="Finance">Finance</option>
  <option value="Retail">Retail</option>
  <option value="Manufacturing">Manufacturing</option>
  <option value="Education">Education</option>
  <option value="Real Estate">Real Estate</option>
  <option value="Energy">Energy</option>
  <option value="Transportation">Transportation</option>
  <option value="Hospitality">Hospitality</option>
  <option value="Consulting">Consulting</option>
  <option value="Marketing">Marketing</option>
  <option value="Design">Design</option>
  <option value="Human Resources">Human Resources</option>

         </select>
        </div>
        <div className="filter-group" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px 0", fontFamily: "'Roboto', sans-serif", textAlign: "center" }}>
       

</div>




      </div>
      <div className="job-listings">{filteredJobs.map((job) => (
        <div key={job.id} className="job-listing">
          <div className="job-header">
            <h4>{job.title}</h4>
            <h3>{job.company}</h3>
          </div>
          <div className="job-body">
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Description:</strong> {job.description}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Industry:</strong> {job.industry}</p>
            <p><strong>Type:</strong> {job.jobType}</p>
            <p><strong>Date Posted:</strong> {job.postingDate.toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}</p>
            <button className="apply-button" onClick={() => window.location.href = 'pages/Login'}>Apply</button>
            
            </div>
            </div>
          ))}
        </div>
      </div>
  
  );
}
export default Home;
  
