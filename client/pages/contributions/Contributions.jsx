import React from 'react';
import ReactDOM from 'react-dom';
import Links from '../../components/Links.jsx';
import styles from './contributions.css';


export default class Contributions extends React.Component{


    render() {
    return (
        <>
<div>Future Page of Contributions to Open Source, joint, and independent projects!</div>
        <footer>
    <Links />
        </footer>
        </>
    )
    }
}

ReactDOM.render(<Contributions />, document.getElementById('contributions'));
