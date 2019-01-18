import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'
import * as booksActions from '../actions/books'
import App from '../components/App'  
import orderBy from 'lodash/orderBy'

const sortBy = (books, filterBy) => {
    switch(filterBy) {
        case 'all':
            return books;

        case 'price_low':
            return  orderBy(books, 'price', 'asc');

        case 'price_hight':
            return  orderBy(books, 'price', 'desc');

        case 'author':
            return  orderBy(books, 'author', 'фыс');

        default: 
            return books
    }
}


const mapStateToProps = ({ books }) => ({
    books: sortBy(books.items, books.filterBy),
    isReady: books.isReady
})

// const mapDispathToProps = dispatch => ({
//   setBooks: books => dispatch(setBooks(books))
// }) 

const mapDispathToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch)
});

export default connect(mapStateToProps, mapDispathToProps)(App);