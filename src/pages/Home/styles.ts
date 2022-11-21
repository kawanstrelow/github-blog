import styled from 'styled-components'

export const HomeContainer = styled.main`
  padding: 0 18rem;

  @media screen and (max-width: 1200px) {
    padding: 0 5rem;
  }
`

export const AvatarInfo = styled.div`
  width: 100%;
  height: 13.25rem;
  padding: 2rem 2.5rem;
  display: flex;
  margin-bottom: 4.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  background: ${props => props.theme['base-profile']};
  border-radius: 10px;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    margin-right: 2rem;
  }
`

export const AvatarTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TopTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > p {
    color: ${props => props.theme['base-text']};
    line-height: 1.6rem;
  }
`

export const HeaderTextInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  > h1 {
    color: ${props => props.theme['base-title']};
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.95rem;
  }

  > a {
    text-decoration: none;
    color: ${props => props.theme['blue']};
  }
`

export const GithubLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > span {
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 1.2rem;
  }
`

export const BaseboardIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${props => props.theme['base-label']};

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    span {
      color: ${props => props.theme['base-subtitle']};
      line-height: 1.6rem;
    }
  }
`

export const PublicationsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h3 {
    font-weight: bold;
    font-size: 1.125rem;
    color: ${props => props.theme['base-subtitle']};
    line-height: 1.8rem;
  }

  span {
    font-size: 0.875rem;
    color: ${props => props.theme['base-span']};
    line-height: 1.4rem;
  }
`

export const InputSearch = styled.input`
  width: 100%;
  height: 3.125rem;
  padding: 0.75rem 1rem;
  margin-top: 0.75rem;

  background: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme['base-border']};
  border-radius: 6px;
  color: ${props => props.theme['white']};

  ::placeholder {
    color: ${props => props.theme['base-label']};
  }
`

export const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 3rem 0rem;
`
