import { Fragment } from 'react';
import classes from './Modal.module.css'
import  ReactDOM  from 'react-dom';
function Backdrop(props){
    return <div className={classes.backdrop} onClick={props.onHideCart}/>
} 

function ModalOverlary(props){
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}
const portaElement = document.getElementById('overlays');
function Modal(props){
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop  onHideCart={props.onHideCart}/>, portaElement)}
            {ReactDOM.createPortal(<ModalOverlary >{props.children}</ModalOverlary>  , portaElement)}
        </Fragment>
    );
}

export default Modal;