import styled from 'styled-components'

export const PostContainer = styled.div`
  padding: 0 18rem;

  @media screen and (max-width: 1200px) {
    padding: 0 5rem;
  }
`

export const HeaderInfo = styled.div`
  width: 100%;
  height: 10.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  background: ${props => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BaseboardIcons = styled.div`
  display: flex;
  gap: 2rem;
  color: ${props => props.theme['base-label']};

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    > span {
      color: ${props => props.theme['base-span']};
      line-height: 1.6rem;
    }
  }
`
