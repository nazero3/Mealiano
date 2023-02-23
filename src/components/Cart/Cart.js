import Modal from '../UI/Modal';
import classes from './Cart.module.css';

function Cart(props){
    const cartitems= (
        <ul className={classes['cart-items']}>
            {[{id: 'c1', name: 'sushi', amount: 2, price: 10.99}].map(item =>(
                <li>{item.name}</li>
            ))}
        </ul>
    )
    return(
        <Modal onHideCart={props.onHideCart}>
            {cartitems}
            <div className={classes.total}>
                <span>total amount</span>
                <span>23</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>close</button>
                <button className={classes.button} onClick={props.onHideCart}>order</button>

            </div>
        </Modal>
    );
}

export default Cart;