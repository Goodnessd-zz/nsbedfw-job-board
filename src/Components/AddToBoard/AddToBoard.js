import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import JobPost from '../JobPost/JobPost'
import TextFieldWrapper from '../TextFieldWrapper/TextFieldWrapper';

export default class AddToBoard extends React.Component {

  state = {
    jobPost: {
      firstName: ""
    }
  }

  constructor({handleClose, open}) {
    super({handleClose, open});
  }

  handleChange = (event) => {
    const value = event.target.value;
    const id = event.target.id;

    let jobPost = {
      ...this.state.jobPost
    };

    jobPost[id] = value;

    this.setState({jobPost})
  }

  handleClose() {
    this
      .props
      .handleClose(this.state.newJobPost);
  }

  render() {
    const {handleClose, open} = this.props;

    return (
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your information here to add yourself the Job Board!
          </DialogContentText>
          {Object.keys(this.state.jobPost).map(item => {
            return<TextFieldWrapper 
            value={item}
            onChange = {this.handleChange}/>
          })}
          <TextField
            value={this.state.jobPost.firstNameJ}
            margin="dense"
            id="firstName"
            label="First Name"
            fullWidth
            onChange={this.handleChange}/>
          <TextField
            value={this.state.jobPost.lastName}
            margin="dense"
            id="lastName"
            label="Last Name"
            fullWidth
            onChange={this.handleChange}/>
          <TextField
            value={this.state.jobPost.industry}
            margin="dense"
            id="industry"
            label="Industry"
            fullWidth
            onChange={this.handleChange}/>
          <InputLabel id="skillLevel">Skill Level</InputLabel>
          <Select
            labelId="skill-level"
            label="Skill level"
            id="skillLevel"
            fullWidth
            value={this.state.jobPost.skillLevel}
            onChange={this.handleChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Entry">Entry</MenuItem>
            <MenuItem value="Associate">Associate</MenuItem>
            <MenuItem value="Senior">Senior</MenuItem>
          </Select>
          <TextField
            value={this.state.jobPost.email}
            margin="dense"
            id="email"
            label="email"
            fullWidth
            onChange={this.handleChange}/>
        </DialogContent>
        <h1>{this.state.jobPost.firstName}</h1>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add To Board
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}