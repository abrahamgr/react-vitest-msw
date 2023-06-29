import styled from 'styled-components'

const HeaderContainer = styled.footer`
  border-bottom: 1px solid ${({ theme }) => theme.border.color};
  padding: 10px 20px;
`

export const Header = () => {
  return <HeaderContainer>
    I'm the header
  </HeaderContainer>
}
