import React, { Component, Fragment, PureComponent } from 'react';
import { FixedSizeList as List, areEqual } from 'react-window';
import PropTypes from "prop-types";
import { waitForElementToBeRemoved } from '@testing-library/react';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import IconButton from '@mui/material/IconButton';

import './ListWrapperTwo.css';

const Row = ({ data, index, style }) => {
    const { items, toggleItemActive } = data;
    const item = items[index];
    return (
        <div className={`word-row ${item.active ? "active" : ""}`} onClick={(e) => toggleItemActive(index)} style={style}>
            {item.word}
        </div>
    );
};

const createItemData = (items, toggleItemActive) => ({
    items,
    toggleItemActive,
});


class Example extends Component {
    constructor(props) {
        super(props);
    }

    listRef = React.createRef();

    render() {
        this.itemData = createItemData(this.props.items, this.props.toggleItemActive);
        return (
            <Fragment>
                <List
                    height={this.props.height}
                    itemCount={this.props.items.length}
                    itemData={this.itemData}
                    itemSize={35}
                    width={this.props.width}
                    className="List"
                    ref={this.listRef}
                >
                    {Row}
                </List>
                <Grid
                    container
                    spacing={1}
                >
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'É'].map((letter) => (
                        <Grid item key={letter} >
                            <Link key={letter} href="#" onClick={this.scrollToRowAuto}>{letter}</Link>
                        </Grid>
                    ))}
                </Grid>
                <Grid
                    container
                    spacing={1}
                >
                    <Grid item key="prevButton">
                        <Button variant="outlined" startIcon={<ArrowBackIosNewIcon />} onClick={this.scrollToPrev}>
                            Prev
                        </Button>
                    </Grid>
                    <Grid  item key="nextButton">
                        <Button variant="outlined" endIcon={<ArrowForwardIosIcon />} onClick={this.scrollToNext}>
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }

    scrollToNext = () => {
        console.log('next');
        let index = this.props.wordIndex + 1;

        // get the count of this.props.words
        const count = this.props.items.length;

        if (index < count) {
            this.listRef.current.scrollToItem(index, 'smart');
            this.props.toggleItemActive(index);
        }
    }

    scrollToPrev = () => {
        console.log('prev');
        let index = this.props.wordIndex - 1;
        if (index > -1) {
            this.listRef.current.scrollToItem(index, 'smart');
            this.props.toggleItemActive(index);
        }
    }

    scrollToRowAuto = (letter) => {

        console.log(this.listRef.current);

        const c = letter.target.text.toLowerCase();
        console.log(this.props.items);
        const firstElement = this.props.items.find(x => x.word.startsWith(c));
        const index = this.props.items.indexOf(firstElement);
        console.log(index);

        this.listRef.current.scrollToItem(index, 'smart');
    };
}

export default class ListWrapperTwo extends PureComponent {

    static propTypes = {
        clickHandler: PropTypes.func,
        words: PropTypes.array
    };

    // state = {
    //     selectedIndex: -1
    //   }

    //   add = () => {
    //     this.setState({
    //       cart: ['ice cream'],
    //       total: 5
    //     })
    //   }  

    toggleItemActive = (index) => {

        this.setState((state, props) => {

            // get the item that was clicked by index
            const item = props.words[index];

            //const item = props.words.find(x => x.word === label);
            //const index = props.words.indexOf(item);

            const items = props.words.concat();

            if (item) {
                items[index] = {
                    ...item,
                    isActive: !item.isActive,
                };

                this.props.clickHandler(item.word);
            }
            return { items };
        });


    }

    render() {
        return (
            <Example
                height={150}
                items={this.props.words}
                toggleItemActive={this.toggleItemActive}
                scrollToIndex={this.props.scrollToIndex}
                wordIndex={this.props.wordIndex}
                width={300}
            />
        );
    }
}