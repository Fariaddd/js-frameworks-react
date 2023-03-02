import styled from "styled-components";

const  Button = styled.button`
color: white;
background-color: ${(prop) => PaymentResponse.theme.secondaryColour};

`

export const DangerButton = styled(Button)`
  background-color: ${(props) => props.theme.dangerColour};
  height: 46px;
`


export default Button