import React from 'react'
import { Link } from 'react-router'
import { Navbar, Nav } from 'react-bootstrap'
import '../styles/Navigation.css'

const Navigation = () => (
    <div className="Navigation">
        <Navbar fixedTop inverse >
            <Nav pullLeft>
                <Navbar.Brand>
                    <Link to="/">Mind Hypertrophy</Link>                      
                </Navbar.Brand>
            </Nav>
            <Nav pullRight>
                <Navbar.Brand>
                    <Link to="/about">About</Link>                      
                </Navbar.Brand>
                <Navbar.Brand>
                    <Link to="/contact">Contact</Link>                      
                </Navbar.Brand>                    
            </Nav>
        </Navbar>
    </div> 
)

export default Navigation
