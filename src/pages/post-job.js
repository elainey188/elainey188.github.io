import React from 'react';
import './post-job.css';
import axios from 'axios';

class PostJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      job_title: '',
      company_name: '',
      salary: '',
      job_description: '',
      location: '',
      industry: '',
      job_type: '',
      error: '',
      jobPostings: [],
    };
  }

  componentDidMount() {
    axios.get('/api/jobs')
      .then((response) => {
        this.setState({ jobPostings: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      job_title,
      company_name,
      salary,
      job_description,
      location,
      industry,
      job_type,
    } = this.state;

    axios
      .post('/api/jobs', {
        job_title: job_title,
        company_name: company_name,
        salary: salary,
        job_description: job_description,
        location: location,
        industry: industry,
        job_type: job_type,
      })
      .then((response) => {
        console.log(response);
        this.setState({
          error: 'Success!',
          job_title: '',
          company_name: '',
          salary: '',
          job_description: '',
          location: '',
          industry: '',
          job_type: '',
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error:
            'Failed to create job listing. Please try again.',
        });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>PUT THE CALL OUT:</h1>
          {this.state.error && <div className="error">{this.state.error}</div>}
          <label>
            Job Title:
            <input type="text" name="job_title" value={this.state.job_title} onChange={(event) => this.setState({job_title: event.target.value})} />
          </label>
          <label>
            Company Name:
            <input type="text" name="company_name" value={this.state.company_name} onChange={(event) => this.setState({company_name: event.target.value})} />
          </label>
          <label>
            Salary:
            <input type="text" name="salary" value={this.state.salary} onChange={(event) => this.setState({salary: event.target.value})} />
          </label>
          <label>
            Description:
            <textarea name="description" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})}></textarea>
          </label>
          <label>
            Location:
            <input type="text" name="location" value={this.state.location} onChange={(event) => this.setState({location: event.target.value})} />
          </label>
          <label>
            Industry:
            <input type="text" name="industry" value={this.state.industry} onChange={(event) => this.setState({industry: event.target.value})} />
          </label>
          <label>
            Type:
            <input type="text" name="type" value={this.state.type} onChange={(event) => this.setState({type: event.target.value})} />
          </label>
          <button type="submit">Submit</button>
        </form>
    
        <div>
          <h2>Job Postings</h2>
          <ul>
            {this.state.jobPostings.map((jobPosting) => (
              <li key={jobPosting.id}>
                <h3>{jobPosting.job_title}</h3>
                <p>{jobPosting.company_name}</p>
                <p>{jobPosting.description}</p>
                <p>{jobPosting.salary}</p>
                <p>{jobPosting.location}</p>
                <p>{jobPosting.industry}</p>
                <p>{jobPosting.type}</p>
                <p>{jobPosting.employer.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
    

  }
}

export default PostJob;