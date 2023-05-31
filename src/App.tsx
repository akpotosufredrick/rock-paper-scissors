import {useEffect, useState} from 'react'
import './App.styled'
import {
  AppHeader,
  AppHeaderLogo,
  AppHeaderTitle,
  GameBoard,
  PlayerChoice,
  PlayerChoiceImage,
  PlayerChoices,
  PlayerVsAiContainer,
  Score,
  ScoreBoard,
  User,
  UserImage,
  UserName,
  UserSet,
  StyledButton
} from './App.styled'

/**
 * player and computer
 * options
 * rules on what beats what
 * handler that when user preses on of the options computer selects his options as well
 * comparision of what beats what and who won
 */

const Rock = () => (
  <StyledButton>
    
  </StyledButton>
);


// define usrPlayer and aiPlayer as type Player
export type Player = {
  name: string,
  choice: any,//string,
  score: number
}

function App() {
  
  const [usrPlayer, setUsrPlayer] = useState({
    name: 'Player',
    choice: '',
    score:0
  })
  const [lastWin, setLastWin] = useState('')

  const [aiPlayer, setAiPlayer] = useState({
    name: 'Ai',
    choice: '',
    score:0
  })

  
  const choices = [
    { value: 'rock', icon:'./assets/rock.svg' },
    {value: 'paper', icon: './assets/paper.svg'},
    {value: 'scissors', icon: './assets/scissor.svg'}
  ]
  
  const aiChoice = choices[Math.floor(Math.random() * choices.length)].value

  const setWinner = (plyrA:Player, plyrB:Player)=> {
    const winners = {
      plyrB: (usr: { choice: string }, ai: { choice: string }) => 
        (usr.choice === 'rock' && ai.choice === 'paper') ||
        (usr.choice === 'paper' && ai.choice === 'scissors') ||
        (usr.choice === 'scissors' && ai.choice === 'rock'),
      plyrA: (usr: { choice: string }, ai: { choice: string }) => 
        (usr.choice === 'rock' && ai.choice === 'scissors') ||
        (usr.choice === 'paper' && ai.choice === 'rock') ||
        (usr.choice === 'scissors' && ai.choice === 'paper')
    }

    return winners.plyrA(plyrA,plyrB) ? updateScores(plyrA) : winners.plyrB(plyrA,plyrB) ? updateScores(plyrB) : updateScores('draw')
  }

  const play = (usrChoice: string) => {
    console.log(usrChoice, {...usrPlayer, ...{choice:usrChoice}});
    setUsrPlayer({...usrPlayer, ...{choice:usrChoice}})
    setAiPlayer({...aiPlayer, ...{choice:aiChoice}})
  }

  const updateScores = (player: { name: any; choice?: string; score: any } | string ) => {
    if (typeof(player) === 'string' && player === 'draw') {
      setLastWin('draw')
      return
    }
    else {
      if (typeof(player) != 'string' && player.name === 'Player') {
        setLastWin('Player')
        setUsrPlayer({...usrPlayer, ...{score: usrPlayer.score + 1}})
      } else {
        setLastWin('Ai')
        setAiPlayer({...aiPlayer, ...{score: aiPlayer.score + 1}})
      }
    }
    
  }

  const showChoices = choices.map((choice, index)=>{
    return (
      <PlayerChoice key={`${choice.value}-${index}`} onClick={() => { play(choice.value) }}>
        <PlayerChoiceImage>
          <StyledButton icon={choice.icon}>
            {/*<img src={choice.icon} alt="paper" />*/}
          </StyledButton>
        </PlayerChoiceImage>
      </PlayerChoice>
    ) 
  })

  useEffect(() =>{
    setWinner(usrPlayer, aiPlayer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[usrPlayer.choice, aiPlayer.choice])

  return (
    <GameBoard>
      <AppHeader>
        <AppHeaderLogo/>
        <AppHeaderTitle>
          Rock Paper Scissors
        </AppHeaderTitle>
      </AppHeader>
      
      <ScoreBoard>
        <User>
          <UserSet>
            <span>
              <UserImage src="./assets/programmer.svg" />
              <UserName>{`${usrPlayer.name}`}</UserName>
            </span>
            <Score>{usrPlayer.score}</Score>
          </UserSet>
        </User>
        <User>
          <UserSet>
            <Score>{aiPlayer.score}</Score>
            <span>
              <UserImage src="./assets/robot.svg" />
              <UserName>{`${aiPlayer.name}`}</UserName>
            </span>
          </UserSet>
        </User>
      </ScoreBoard>

      <PlayerVsAiContainer>
        <PlayerChoices>
          <PlayerChoice>{usrPlayer?.choice}</PlayerChoice>
          <span>{ lastWin === 'Player' ? '>' : lastWin ==='Ai' ? '<' : 'X' }</span>
          <PlayerChoice>{aiPlayer?.choice}</PlayerChoice>
        </PlayerChoices>
        <PlayerChoices>
          {showChoices}
        </PlayerChoices>
      </PlayerVsAiContainer>
    </GameBoard>
  );
}

export default App;
