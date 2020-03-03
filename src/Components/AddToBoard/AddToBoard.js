import React, {useState} from 'react';
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
import api from '../../utility/api';

export default function AddTOBoard({open, onClose}) {

  const [newCandidate,
    setnewCandidate] = useState({firstName: "", lastName: "", email: "", industry: "", skillLevel: ""})

  const handleSubmit = () => {
    api.post('/candidates', newCandidate)
    onClose();
  }

  const isEnabled = () => {
    return newCandidate.firstName.length > 0 && newCandidate.lastName.length > 0 && newCandidate.email.length > 0 && newCandidate.industry.length > 0 && newCandidate.skillLevel.length > 0
  }
  const onChange = (e) => {
    e.preventDefault();
    let tempCandidate = {
      ...newCandidate
    };
    tempCandidate[e.target.id] = e.target.value;
    console.log(tempCandidate);
    setnewCandidate(tempCandidate);
  }

  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Candidate</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`We want to get you hired! Enter the information requested below to let our parterning
            companies know that you are interested. Email info@nsbedfw.org if you would 
            no longer like to be listed.`}
          </DialogContentText>
          <TextField
            onChange={onChange}
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            fullWidth/>
          <TextField
            onChange={onChange}
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth/>
          <TextField
            onChange={onChange}
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth/>
          <TextField
            onChange={onChange}
            margin="dense"
            id="industry"
            label="Industry"
            type="text"
            fullWidth/>
          <TextField
            onChange={onChange}
            margin="dense"
            id="skillLevel"
            label="Skill Level"
            type="text"
            fullWidth/>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button disabled={!isEnabled()} onClick={handleSubmit} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}