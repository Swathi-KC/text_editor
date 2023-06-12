import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #25262c;
  background-size: cover;
  min-height: 100vh;
`
export const TextEditorMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 70%;
  width: 85%;
  background-color: #1b1c22;
`
export const TextEditorImgCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 55%;
`

export const TextEditorHeading = styled.h1`
  color: #f8fafc;
  font-weight: 500;
  font-size: 26px;
  font-family: 'Roboto';
  line-height: 1.4;
  text-align: center;
`
export const TextEditorImg = styled.img`
  width: 80%;
  height: 50%;
  padding: 5px;
`

export const TextEditorCont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #25262c;
  border: 1px #334155 solid;
  border-radius: 12px;
  min-height: 100%;
  width: 40%;

  margin: 10px;
`
export const TextEditorIconsCont = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  border-bottom: 1px #334155 solid;
`
export const IconItem = styled.li`
  background-color: transparent;
  width: 10%;
`

export const BoldIconButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 10px;
  outline: none;
  cursor: pointer;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
`
export const ItalicIconButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 10px;
  outline: none;
  cursor: pointer;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
`

export const UnderlineIconButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 10px;
  outline: none;
  cursor: pointer;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
`

export const TextAreaInput = styled.textarea`
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderlined ? 'underline' : 'normal')};
  color: #f8fafc;
  background-color: transparent;
  border: none;
  outline: none;
  min-height: 84%;
  padding: 20px;
  margin-bottom: 6%;
`
