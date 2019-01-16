import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { setBooks } from './actions/books'
import { dispatch } from 'rxjs/internal/observable/range';

class App extends Component {
  render() {
    const { books } = this.props.books,
          { setBooks } = this.props,
          newBooks = [
            {id: 0, title: 'Shoping Cart - ' + new Date()}
          ];
    
    return (
      <div>
        <h1>{books[0].title}</h1>
        <button onClick = { setBooks.bind(this, newBooks) }>Set books</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispathToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispathToProps)(App);