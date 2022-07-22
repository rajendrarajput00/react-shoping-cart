import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { CartState } from '../Context/Context'



export const NavBarComponent = (props) => {

    const { searchString: { searchString }, state: { cart }, dispatchSearch } = CartState();
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                        >
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search by product name"
                                    className="me-2"
                                    aria-label="Search"
                                    value={searchString}
                                    onChange={(e) => {
                                        dispatchSearch({
                                            type: "ADD_TO_SEARCH",
                                            payload: e.target.value

                                        })
                                    }}

                                />
                                {/*  <Button variant="outline-success">Search</Button> */}
                            </Form>

                        </Nav>

                        <img className='mx-4' src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png" />
                        <small style={{
                            position: "absolute",
                            right: "20vh",
                            top: "2vh",
                            background: "red",
                            borderRadius: "50px",
                            width: "15px",
                            height: "20px"
                        }}>{cart || 0}</small>

                        <img className='mx-4' src="https://img.icons8.com/color/48/000000/user-male-circle--v1.png" />


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}
