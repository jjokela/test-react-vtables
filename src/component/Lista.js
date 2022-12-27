import React, { Component, Fragment } from 'react';
import { FixedSizeList as List } from 'react-window';
import PropTypes from "prop-types";

import './Lista.css';

const Row = ({ data, index, style }) => {

    //console.log(data[index].word);
    // console.log(ref);
    return (<div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
        {data[index].word}
    </div>)
};

export default class Lista extends Component {

    static propTypes = {
        words: PropTypes.array,
        clickHandler: PropTypes.func
    };

    handleClick = buttonName => {
        console.log('rararara');
        //this.props.clickHandler(buttonName);
    };

    listRef = React.createRef();

    /* <div>{this.props.value}</div> */

    render() {
        return (
            <Fragment>
                <div>
                    <button className="ExampleButton" onClick={this.scrollToRow200Auto}>
                        Scroll to row 200 (align: auto)
                    </button>
                    <button className="ExampleButton" onClick={this.scrollToRow250Smart}>
                        Scroll to row 250 (align: smart)
                    </button>
                    <button className="ExampleButton" onClick={this.scrollToRow300Center}>
                        Scroll to row 300 (align: center)
                    </button>
                </div>
                <List
                    className="List"
                    height={150}
                    itemData={this.props.words}
                    itemCount={this.props.words.length}
                    itemSize={35}
                    ref={this.listRef}
                    width={300}                    
                >
                    {Row}
                </List>
            </Fragment>
        );
    }

    scrollToRow200Auto = () => {
        this.listRef.current.scrollToItem(200);
    };
    scrollToRow250Smart = () => {
        this.listRef.current.scrollToItem(250, 'smart');
    };
    scrollToRow300Center = () => {
        this.listRef.current.scrollToItem(300, 'center');
    };
}
