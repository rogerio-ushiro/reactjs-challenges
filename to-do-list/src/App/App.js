import './App.css';
import InputTextItem from '../components/InputTextItem/InputTextItem';
import TaskList from '../components/TaskList/TaskList';
import React from 'react';
import { AppBar, Grid, Stack, Card, CardContent } from '@mui/material';
import ToolBarComponent from '../components/ToolBar/ToolBarComponent';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state = { taskList: [] };
  }

  updateState = (value) => {
    const newArray = this.state.taskList;
    newArray.push(value);
    this.setState({ taskList: newArray });
    console.log("app tasklist: " + this.state.taskList)
  }

  updateList = (arr) => {
    this.setState({ taskList: arr });
    console.log("app tasklist: " + this.state.taskList)
  }

  render() {

    const header = (
      <AppBar component="nav">
        <ToolBarComponent data={this.state} />
      </AppBar>);

    const components = (
      <Stack spacing={1}>
        <Card className="inputText" variant="none">
          <InputTextItem data={this.state} childToParent={this.updateState} />
        </Card>
        <Card sx={{ display: { xs: 'block' } }} >
          <TaskList data={this.state} childToParent={this.updateList} />
        </Card>
      </Stack>);

    const content = (<Grid container justifyContent="center" >
      <Card variant="none" >
        <CardContent >
          {components}
        </CardContent>
      </Card>
    </Grid>)

    return (
      <div className="App" >
        {header}
        {content}
      </div>
    );
  }

}
