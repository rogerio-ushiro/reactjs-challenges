import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import ListItem from '@mui/material/ListItem';

class TaskList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { taskList: [props.data.taskList] };
  }

  clearAll = () => {
    this.setState({ taskList: [] });
    this.props.childToParent([]);
  };

  handleListChange = (evt) => {
    console.log(evt.target.value)
    this.props.childToParent(evt.target.value);
    this.setState({ taskName: '' });
  }

  render() {
    return (
      <div>
        <List  >
          {this.props.data.taskList.map((value) => {
            return (
              <ListItem key={value} disablePadding>
                <ListItemButton>
                  <ListItemText inset primary={value} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Grid container direction="row-reverse">
          <Grid item ><Button size="small" endIcon={<DeleteIcon />} onClick={this.clearAll}>All</Button></Grid>
        </Grid>
      </div >
    );
  }
}

export default TaskList;






