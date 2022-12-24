import React from "react";
import './App.css';
import Lista from './Lista';
import data from '../data/words.json'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ExampleWrapper from './ListWrapper';
import Paneeli from './Paneeli';


// if (buttonName === "AC") {
//   return {
//     total: null,
//     next: null,
//     operation: null,
//   };
// }

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default class App extends React.Component {

  state = {
    selectedWord: null,
    description: null
  };

  handleClick = wordName => {
    //this.setState(calculate(this.state, buttonName));
    // console.log('click');
    // console.log(wordName);

    if(this.state.selectedWord !== wordName) {
      // console.log(`New selected word: ${wordName}`);
      this.setState({selectedWord: wordName});

      let item = data.find(el => el.word === wordName);
      // console.log(item.content);
      this.setState({description: JSON.parse(item.content)});
    }

  };

  render() {
    return (
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App example
          </Typography>
          
          <ExampleWrapper words={data} clickHandler={this.handleClick} />
          <Paneeli name={this.state.selectedWord} description={this.state.description} />

          <Lista words={data} />          
          <Copyright />
        </Box>
      </Container>
    );
  }
}


// function App() {

//   state = {
//     total: null,
//     next: null,
//     operation: null,
//   };

//   handleClick = buttonName => {
//     //this.setState(calculate(this.state, buttonName));
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box sx={{ my: 4 }}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Create React App example
//         </Typography>
//         <Lista words={data} />
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }

// export default App;


