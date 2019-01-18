import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'
import * as cartActions from '../actions/cart'
import BookCard from '../components/BookCard'


const mapStateToProps = ({ cart }, { id }) => ({
    addedCount: cart.items.reduce((count, book) => count + (book.id === id ? 1 : 0), 0 ),
})

const mapDispathToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});
  
export default connect(mapStateToProps, mapDispathToProps)(BookCard);