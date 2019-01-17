import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { setBooks } from './actions/books'
import axios from 'axios';
import MenuComponents from './components/Menu';
import BookCard from './components/BookCard';
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
    const { books, isReady } = this.props;
    return (
      <Container>
        <MenuComponents />
        
        <Card.Group itemsPerRow={4}>
          {!isReady ? 'Загрузка...' : books.map( (book, index) => (
              <BookCard  key={index} {...book} />
          ))}
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = ({ books }) => ({
  books: books.items,
  isReady: books.isReady
})

const mapDispathToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispathToProps)(App);