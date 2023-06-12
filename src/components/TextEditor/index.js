import {Component} from 'react'

import {BsTypeBold, BsTypeItalic, BsTypeUnderline} from 'react-icons/bs'

import {
  MainContainer,
  TextEditorMainContainer,
  TextEditorImgCont,
  TextEditorHeading,
  TextEditorImg,
  TextEditorCont,
  TextEditorIconsCont,
  IconItem,
  BoldIconButton,
  ItalicIconButton,
  UnderlineIconButton,
  TextAreaInput,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderlined: false, inputText: ''}

  onClickChangeBoldStatus = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickChangeItalicStatus = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickChangeUnderlineStatus = () => {
    this.setState(prevState => ({isUnderlined: !prevState.isUnderlined}))
  }

  onChangeText = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {isBold, isItalic, isUnderlined, inputText} = this.state

    // const boldColor = isBold ? '#faff00' : '#f1f5f9'
    // const italicColor = isItalic ? '#faff00' : '#f1f5f9'
    // const underlineColor = isUnderlined ? '#faff00' : '#f1f5f9'

    return (
      <MainContainer>
        <TextEditorMainContainer>
          <TextEditorImgCont>
            <TextEditorHeading>Text Editor</TextEditorHeading>
            <TextEditorImg
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditorImgCont>
          <TextEditorCont>
            <TextEditorIconsCont>
              <IconItem>
                <BoldIconButton
                  type="button"
                  onClick={this.onClickChangeBoldStatus}
                  data-testid="bold"
                  isActive={isBold}
                >
                  <BsTypeBold size={22} />
                </BoldIconButton>
              </IconItem>
              <IconItem>
                <ItalicIconButton
                  type="button"
                  onClick={this.onClickChangeItalicStatus}
                  data-testid="italic"
                  isActive={isItalic}
                >
                  <BsTypeItalic size={22} />
                </ItalicIconButton>
              </IconItem>
              <IconItem>
                <UnderlineIconButton
                  type="button"
                  onClick={this.onClickChangeUnderlineStatus}
                  data-testid="underline"
                  isActive={isUnderlined}
                >
                  <BsTypeUnderline size={22} />
                </UnderlineIconButton>
              </IconItem>
            </TextEditorIconsCont>
            <TextAreaInput
              onChange={this.onChangeText}
              isBold={isBold}
              isItalic={isItalic}
              isUnderlined={isUnderlined}
              col="15"
              row="10"
            >
              {inputText}
            </TextAreaInput>
          </TextEditorCont>
        </TextEditorMainContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
