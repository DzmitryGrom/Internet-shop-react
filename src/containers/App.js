import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'
import * as booksActions from '../actions/books'
import App from '../components/App'  
import orderBy from 'lodash/orderBy'

const sortBy = (books, filterBy) => {
    switch(filterBy) {
        case 'price_low':
            return orderBy(books, 'price', 'asc');

        case 'price_hight':
            return orderBy(books, 'price', 'desc');

        case 'author':
            return  orderBy(books, 'author', 'asc');

        default: 
            return books
    }
    
    
}

const filterBooks = (books, searchQuery) => books.filter(
    o => 
        o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
        o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    )

const searchBooks = (books, filterBy, searchQuery) => {
    return sortBy(filterBooks(books, searchQuery), filterBy);
}


const mapStateToProps = ({ books, filter }) => ({
    books: books.items && searchBooks(books.items, filter.filterBy, filter.searchQuery),
    isReady: books.isReady
})
 
// const mapDispathToProps = dispatch => ({
//   setBooks: books => dispatch(setBooks(books))
// }) 

const mapDispathToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch)
});

export default connect(mapStateToProps, mapDispathToProps)(App);