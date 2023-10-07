import styled from 'styled-components'

const FooterContainer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.border.color};
  padding: 10px 20px;
`

export const Footer = () => {
  return <FooterContainer>
    I'm the footer
  </FooterContainer>
}
