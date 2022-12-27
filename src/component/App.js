import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import Lista from './Lista';
import data from '../data/words.json'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ExampleWrapper from './ListWrapper';
import ListWrapperTwo from './ListWrapperTwo';
import Paneeli from './Paneeli';
import Search from './Search';
import BasicCard from './BasicCard';
import TemporaryDrawer from './Demo';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { spacing } from '@mui/system';

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

export default function App() {

  const [selectedWord, setSelectedWord] = useState(null);
  const [description, setDescription] = useState(null);
  const [wordData, setData] = useState(data);
  const [wordIndex, setWordIndex] = useState(-1);
  const [totalDataSetCount, setTotalDataSetCount] = useState(data.length);
  const [actualWordIndex, setActualWordIndex] = useState(0);

  // useLayoutEffect (() => {
  //   setData(data)
  //   console.log(wordData);
  // });

  // componentDidMount = () => {
  //   setData(data)
  // }

  const handleClick = wordName => {
    //this.setState(calculate(this.state, buttonName));
    //console.log('click');
    //console.log(wordName);

    if (selectedWord !== wordName) {

      // get the current selected element from the Original Data! The filtered data may not include the currently selected item, and
      // therefore stays as active, resulting into multiple active items
      let currentSelectedElement = data.find(el => el.word === selectedWord);

      // if it is not null or undefined, then set it to inactive
      if (currentSelectedElement) {
        currentSelectedElement.active = false;
      }

      // console.log(`New selected word: ${wordName}`);
      setSelectedWord(wordName);

      let item = wordData.find(el => el.word === wordName);

      setActualWordIndex(item.wordIndex)

      // get and set the index of item (of the possibly filtered list)
      let index = wordData.indexOf(item);
      setWordIndex(index);

      // set the new item state to active
      item.active = true;

      // console.log(item.content);
      setDescription(JSON.parse(item.content));
    }
  }

  const handleSearchStringChange = (searchString) => {
    console.log(searchString);
    const results = data.filter(word => {
      if (searchString === "") return data
      return word.word.toLowerCase().startsWith(searchString.toLowerCase())
    })
    console.log('setting data');
    setData(results)
    console.log(results);
  }

  return (
    <Container
      sx={{ height: "100vh" }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'column' }}
        spacing={{ xs: 1, sm: 1, md: 1 }}
        sx={{ bottom: 0, width: 1.0, height: '100vh', mb: 10 }}
      >
        <BasicCard name={selectedWord} description={description} 
          actualWordIndex={actualWordIndex + 1} totalDataSetCount={totalDataSetCount}
          style="margin-bottom: 10px;, margin-top: 10px;" />
        <Search searchHandler={handleSearchStringChange} />
        {/* <ExampleWrapper words={wordData} clickHandler={handleClick} /> */}
        <ListWrapperTwo words={wordData} wordIndex={wordIndex} clickHandler={handleClick}/>
        {/* <Paneeli name={selectedWord} description={description} /> */}
        <div sx={{ mb:10 }}/>
      </Stack>
    </Container>
  );
}