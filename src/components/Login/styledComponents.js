import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 1110px;
  font-family: Roboto;
  color: ${props => (props.theme === 'dark' ? '#0070c1' : '#ffffff')};
`

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  //background-color: red;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 0px gray;
`

export const LoginLogo = styled.img`
  height: 30px;
  align-self: center;
  margin: 20px;
`

export const UserNameInputType = styled.input`
  font-size: 14px;
  border: 1px solid #d7dfe9;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const UserNameTag = styled.p`
  color: #616e7c;
  margin-bottom: 0px;
  font-weight: 500;
`

export const PasswordInputType = styled.input`
  font-size: 15px;
  border: 1px solid #d7dfe9;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const PasswordTag = styled.p`
  color: #616e7c;
  margin-bottom: 0px;
  font-weight: 500;
`
export const CheckBox = styled.input``

export const ShowPassword = styled.p`
  color: black;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  padding: 10px;
  border: 0px;
  color: #fff;
  border-radius: 5px;
`

export const ErrorMsg = styled.p`
  color: red;
`
