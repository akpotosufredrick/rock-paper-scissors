import styled, { keyframes } from 'styled-components';

interface StyledButtonProps {
  icon?: string;
}

const shakeAnimation = keyframes`
  10%, 90% {
    transform: translate3d(-0.063rem, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(0.125rem, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-0.25, 0, 0);
  }

  40%, 60% {
    transform: translate3d(0.25, 0, 0);
  }
`;

export const AppContainer = styled.div`
  text-align: center;
`;

export const GameBoard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  height: fit-content;
`;

export const PlayerVsAiContainer = styled.section`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  contain: content;
`;

export const AppHeader = styled.section`
  width: 100vw;
  padding: 0.75rem;
  background: #495867;
  mix-blend-mode: normal;
`;

export const ScoreBoard = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0.5rem auto;
  contain: content;
`;

export const AppHeaderTitle = styled.div`
  position: relative;
  font-style: normal;
  font-weight: 700;
  font-size: 4rem;
  text-align: center;
  color: #F7F7FF;
`;

export const AppHeaderLogo = styled.div`
  position: relative;
  background: url(./assets/rock-paper-scissors.svg);
`;

export const User = styled.div`
  width: 14rem;
  padding: 0 2rem;
  height: 13rem;
  top: 11rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserSet = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ::nth-child(1) {
    flex-direction: row-reverse;
  }
`;

export const UserImage = styled.img`
  position: relative;
  width: 14.9rem;
  height: 10.5rem;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;

export const UserName = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 1.5rem;
  text-align: center;
  color: #000000;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
  max-width: 14.9rem;
`;

export const Score = styled.div`
  font-size: 5rem;
  font-weight: 400;
  @media ( max-width: 390px) {
    font-size: 3rem;
    padding: 0 0.5rem;
  }
`;

//-----------

export const PlayerChoices = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  margin: 1rem auto;
  width: 100vw;
  font-size: 3rem;
  text-transform: uppercase;
`;

export const PlayerChoice = styled.div`
  margin: 0 1rem;
  cursor: pointer;
`;

export const PlayerChoiceImage = styled.div`
  width: 10rem;
  padding: .3rem 0;
`;

export const GameResult = styled.div`
  font-size: 1.5rem;
`;

export const StyledButton = styled.button<StyledButtonProps>`
  background: ${props => `url(${props.icon}) no-repeat center`};
  border: none;
  cursor: pointer;
  outline: none;
  padding: 1rem;
  transition: transform 0.3s ease-in-out;
  width: 5rem;
  height: 5rem;
    
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    animation: ${shakeAnimation} 0.82s cubic-bezier(.36,.07,.19,.97) both;
  }
`;
