import {Component} from 'react'

import {
  LoginContainer,
  LoginForm,
  LoginLogo,
  UserNameInputType,
  UserNameTag,
  PasswordInputType,
  PasswordTag,
  ShowPasswordContainer,
  CheckBox,
  ShowPassword,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
  }

  enterUserName = event => {
    const {username} = this.state
    this.setState({username: event.value})
    console.log(username)
  }

  enterPassword = event => {
    const {password} = this.state
    this.setState({password: event.value})
    console.log(password)
  }

  toggleThePassword = () => {
    const {showPassword} = this.state
    this.setState({showPassword: !showPassword})
  }

  render() {
    const {showPassword, errorMsg} = this.state
    const passwordType = showPassword ? 'Text' : 'Password'
    return (
      <LoginContainer>
        <LoginForm>
          <LoginLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
          <UserNameTag>USERNAME</UserNameTag>
          <UserNameInputType
            placeholder="Username"
            onChange={this.enterUserName}
          />
          <PasswordTag>PASSWORD</PasswordTag>
          <PasswordInputType
            placeholder="Password"
            type={passwordType}
            onChange={this.enterPassword}
          />
          <ShowPasswordContainer onClick={this.toggleThePassword}>
            <CheckBox type="checkbox" />
            <ShowPassword>Show Password</ShowPassword>
          </ShowPasswordContainer>
          <LoginButton>Login</LoginButton>
          <ErrorMsg>{errorMsg}</ErrorMsg>
        </LoginForm>
      </LoginContainer>
    )
  }
}

export default Login
