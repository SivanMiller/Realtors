import {Component} from "react";
import './sidebar.style.css'
import * as HomeIcons from 'react-icons/ai';
import {Route, Routes, Router, Link} from "react-router-dom";
import * as PropTypes from "prop-types";
import Properties from "../../pages/properties";

class SideBar extends Component {
    render() {

        return (
            <div className='sidebar'>
                <HomeIcons.AiOutlineHome></HomeIcons.AiOutlineHome>

            </div>);
    }
}

export default SideBar;