import React from 'react';
import {fetchJobPostings} from '../../apiCalls';
import Card from '@material-ui/core/Card';
import CardConent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./JobBoard.css"
import logo from './logo.png'
import JobPost from '../JobPost/JobPost'
import Container from '@material-ui/core/Container';

export default class JobBoard extends React.Component {
  state = {
    jobPostList: [],
    searchStrings: ''
  }

  constructor(){
    super();
    this.getJobPostings()
  }

  getJobPostings = () => {
    const jobPosts = fetchJobPostings();
    this.state={jobPostList: jobPosts};
  }

  onSearchInputChange = (event) => {
    if(event.target.value){
      this.setState({searchString: event.target.value})
    }else{
      this.setState({searchString: ''})
    }
    this.getJobPostings()
  }

  render() {
    return (
      <div className ="job-board">
        <img className="nsbe-logo" src={logo}></img>
        <Container maxWidth="sm" style={{ overflow: "scroll", height: "500px", border: "solid 2px", margin: "50px auto" }}>
          {this.state.jobPostList ? (
            <div>
              {this.state.jobPostList.map(jobPost =>
                (
                  <JobPost jobPost={jobPost}> </JobPost>
                )
              )}
            </div>
          ) : "No Job Postings Found"}
        </Container>
      </div>
    )
  }
}