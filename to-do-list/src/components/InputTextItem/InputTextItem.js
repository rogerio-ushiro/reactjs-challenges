
import './InputTextItem.css';
import React from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


class InputTextItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { taskName: '', addButtonEnabled: false };
  }

  handleTaskNameChange = (value) => {
    console.log(value)
    this.props.childToParent(value);
    this.setState({ taskName: '' });
  }

  add = () => { this.handleTaskNameChange(this.state.taskName) }
  keyEnter = (evt) => {
    setTimeout(() => { this.setState({ taskName: evt.target.value, addButtonEnabled: evt.target.value.length > 0 }) });
    if (evt.key === 'Enter') { this.handleTaskNameChange(evt.target.value) }
  }

  render() {
    return (
      <div className="InputTextItem">
        <p>{this.state.taskList}</p>
        <Stack className='Stack' direction="row" spacing={2}>
          <TextField id="TextField" autoComplete='off' label="Type a task name" variant="standard" onKeyDown={this.keyEnter} />
          <Button variant="outlined" endIcon={<AddCircleOutlineIcon />} disabled={!this.state.addButtonEnabled} onClick={this.add} >Add</Button>
        </Stack>
      </div>
    )
  }
}

export default InputTextItem;





