import React, { Component } from 'react';
import axios from 'axios';
import MenuComponents from './Menu';
import BookCard from './BookCard';
import Filter from '../containers/Filter';
import { Container } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';

class App extends Component {
    componentWillMount() {
      const { setBooks } = this.props;
      axios.get('/books.json').then(responce => {
          setBooks(responce.data)
      })
    } 

    render() {
        const { books, isReady, setFilter } = this.props;
        return (
        <Container>
                <MenuComponents />
                <Filter />
                <Card.Group itemsPerRow={4}>
                {!isReady ? 'Загрузка...' : books.map( (book, index) => (
                    <BookCard  key={index} {...book} />
                ))}
                </Card.Group>
        </Container>
        )
    }
}

export default App;