import React from 'react';
import ReactDOM from 'react-dom';
import Links from '../../components/Links.jsx';
import styles from './contributions.css';


export default class Contributions extends React.Component{


    render() {
    return (
        <>
<div>This is your Contributions page</div>
        <footer>
    <Links />
        </footer>
        </>
    )
    }
}

ReactDOM.render(<Contributions />, document.getElementById('contributions'));
