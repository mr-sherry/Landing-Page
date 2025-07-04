import React from 'react';
import styled from 'styled-components';

const Button = ({ text }) => {
    return (
        <StyledWrapper>
            <button className="btn"> {text}
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .btn {
//    width: 10em;
padding: 0 30px 0px 30px;
   height: 2.3em;
   margin: 0.5em;
   background: white;
   color: black;
   border: none;
   border-radius: 40px;
   font-size: 20px;
   font-weight: bold;
   cursor: pointer;
   position: relative;
   z-index: 1;
   overflow: hidden;
  }

  button:hover {
   color: white;
  }

  button:after {
   content: "";
   background: black;
   position: absolute;
   z-index: -1;
   left: -20%;
   right: -20%;
   top: 0;
   bottom: 0;
   transform: skewX(-45deg) scale(0, 1);
   transition: all 0.5s;
  }

  button:hover:after {
   transform: skewX(-45deg) scale(1, 1);
   -webkit-transition: all 0.5s;
   transition: all 0.5s;
  }`;

export default Button;
