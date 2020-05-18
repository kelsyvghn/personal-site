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
            <h1>Nothing to see here... YET! (Come back Later)</h1>
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
