import React from 'react';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Content from '../components/Content';

const Home = () => {
    return (
        <>
        <header>
            <Container>
                <Navbar></Navbar>
            </Container>
        </header>
        <main>
            <Container>
                <Content></Content>
            </Container>
        </main>
        <footer>

        </footer>
        </>
    );
};

export default Home;