import { Container, Content, Row, LastRow } from './styles'

import Input from './components/Input'
import Button from './components/Buttom'
import { useState } from 'react';

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function App() {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [fristNumber, setFristNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleClear = () => {
    setCurrentNumber('0')
    setFristNumber('0')
    setOperation('')
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {

    if (fristNumber === '0') {
      setFristNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(fristNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleSubNumbers = () => {

    if (fristNumber === '0') {
      setFristNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sum = Number(fristNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMultNumbers = () => {

    if (fristNumber === '0') {
      setFristNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const sum = Number(fristNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleDivNumbers = () => {

    if (fristNumber === '0') {
      setFristNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const sum = Number(fristNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleEquals = () => {

    if (fristNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;

        case '-':
          handleSubNumbers();
          break;

          case '*':
          handleMultNumbers();
          break;

          case '/':
          handleDivNumbers();
          break;

        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={handleMultNumbers}/>
          <Button label="/" onClick={handleDivNumbers}/>
          <Button label="c" onClick={handleClear} />
          <Button label="." onClick={() => handleAddNumber('.')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleSubNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
        <LastRow>
          <Button label={<AiFillGithub />} onClick={() => window.open('https://github.com/Smch12nntynn?tab=repositories')} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label={<AiFillLinkedin />} onClick={() => window.open('https://www.linkedin.com/in/michel-marques-nntynn/')} />
        </LastRow>

      </Content>
    </Container>
  );
}

export default App;
