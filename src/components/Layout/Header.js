import { Fragment } from 'react';
import classes from './Header.module.css';
import imageMeal from '../../assets/meals.jpg'
import CartButton from './CartButton';
function Header(props){
    return(
        <Fragment >
            <header className={classes.header}>
                <h1>Mealiano Food</h1>
                <CartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes.mainImage}>
                <img src={imageMeal} alt="table full of food"/>
            </div>
            
        </Fragment>

    );
}

export default Header;