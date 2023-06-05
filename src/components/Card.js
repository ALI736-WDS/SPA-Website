import React, { Component } from 'react';

import styles from "./Card.module.css";
import down from "../images/down.svg"
import up from "../images/up.svg"
import { Link } from 'react-router-dom';

class Card extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
        }
    }

    downHandler = () => {
        if (this.state.counter >= 1) {
            this.setState(prevState => ({
                counter: prevState.counter - 1,
            }))
        }
    }

    upHandler = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
        }))
    }

    render() {
        //destructuring ; kholase sazi code
        const { image, name, cost, id } = this.props;
        const { counter } = this.state;
        //end destructuring
        return (
            <div className={styles.container}>
                <img src={image} alt="smart phone" />
                <h3>
                    <Link to={`/products/${id}`}>{name}</Link>
                </h3>
                {/* split(" ")[0]: cost="500 $" faghat 500 begir*/}
                <p> {cost} {counter ? `* ${counter} = ${counter * Number(cost.split(" ")[0])} $` : ""} </p>

                <div className={styles.counter}>
                    {/* <img className={counter ? "" : styles.deactive} src={down} alt="arrow" onClick={this.downHandler} /> */}
                    {/* conditional rendering ba && niazi baraye code false budane shart nist */}
                    <img className={!counter ? styles.deactive : ""} src={down} alt="arrow" onClick={this.downHandler} />
                    <span>{counter}</span>
                    <img src={up} alt="arrow" onClick={this.upHandler} />
                </div>
            </div>
        );
    }
}

export default Card;