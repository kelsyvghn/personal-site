import React from 'react';
import ReactDOM from 'react-dom';
import Links from '../../components/Links.jsx';
import Line from '../../components/Line.jsx';
import styles from './writings.css'

export default class Writings extends React.Component {
    
    render(){        
        return(
        <div className={styles.writings}>
            <div>
            <h1>Nothing to see here... YET! (Come back Later) or check out my other pages! or checkout www.everythingeverywhere.dev my more personal site!</h1>
            </div>
         <div>
            <Line color="turquoise"/>
            <Links />
         </div>
        </div> 
        )
    }
}

ReactDOM.render(<Writings />, document.getElementById('writings'));
