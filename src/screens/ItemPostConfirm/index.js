import React from 'react';
import './style.scss';
import { 
    Alert,
    Container,
    Button,
    Form,
    Row,
    Col,
    Card,
} from 'react-bootstrap';
import loadImage from 'blueimp-load-image';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../../components/Navbar';
import test from '../../images/test.jpg';

import icon from '../../images/crypt_sharing_icon.png';
import S__23519271 from '../../images/S__23519271.jpg';
import S__23519273 from '../../images/S__23519273.jpg';
import S__23519274 from '../../images/S__23519274.jpg';
import S__23519275 from '../../images/S__23519275.jpg';
import S__23519276 from '../../images/S__23519276.jpg';
import S__23519277 from '../../images/S__23519277.jpg';
import S__23519278 from '../../images/S__23519278.jpg';
import S__23519279 from '../../images/S__23519279.jpg';
import S__23519280 from '../../images/S__23519280.jpg';
import S__23519281 from '../../images/S__23519281.jpg';



export default class ItemPostConfirm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: [
                // S__23519271,
                // S__23519273,
                // S__23519274,
                // S__23519275,
                // S__23519276,
                // S__23519277,
                // S__23519278,
                // S__23519279,
                // S__23519280,
                // S__23519281,
            ],
            imageStartIndex: 0,                
            selectedImage: S__23519271,
            isOverNumOfImage: false,
        }

    }

    render() {
        return (
            <div>
               asap
            </div>

        )
    }
}
