import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
border: 2px solid #4CAF50;
background-color: #4CAF50;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 24px;
border-radius: 5px;
cursor: pointer;
transition: all 0.3s ease 0s;
`;



const Home = () => {
    return (
        <div className='home'>
        <div style={{ textAlign: 'center', padding: '50px', color: 'white' }}>
            <h1>Miracle For Paws Rescue Inc.</h1>
            <p style={{ fontSize: '26px' }}>We are dedicated to rescuing and re-homing abandoned and stray dogs.</p>
            {/* <div>
                <img
                    src="/puppy1.jpg"
                    alt=""
                    style={{ width: '300px', borderRadius: '10px' }}
                />
            </div> */}
            <div style={{ marginTop: '20px' }}>
                {/* <button
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Adopt a Puppy
                </button> */}
                {/* <StyledButton>Adopt a Puppy</StyledButton> */}
            </div>
        </div>
        </div>
    );
};

export default Home;
