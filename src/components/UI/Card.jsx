
import './Card.css'

function Card(props) {
    //anything we receive as a className from outside is added to 'classes'
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}
export default Card;  