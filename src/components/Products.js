import React, { Component } from 'react';
import axios from 'axios';

import Card from './Card';
import styles from './Products.module.css';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        axios.get("https://fakestoreapi.com/products")
            // .then(response => console.log(response))
            .then(response => this.setState({
                products: response.data,
            }))
    }

    render() {
        const { products } = this.state;
        return (
            <div className={styles.container}>
                {
                    products.length ?
                        products.map(product => <Card key={product.id} image={product.image} name={product.title} cost={`${product.price} $`} />)
                        : <h1> Loading... </h1>
                }
            </div>   //cost: inja ba components card tafavot dare: chun onja reshte bud vali inja adad hast
        );
    }
}

export default Products;