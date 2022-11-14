import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 25rem;
  height: 16.25rem;

  border-radius: 10px;
  padding: 2rem;

  background: ${props => props.theme['base-post']};

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    color: ${props => props.theme['base-text']};
    line-height: 1.6rem;
  }
`

export const HeaderText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;

  h1 {
    color: ${props => props.theme['base-title']};
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 2rem;
    flex: 1;
  }

  span {
    color: ${props => props.theme['base-span']};
    font-size: 0.875rem;
    line-height: 1.4rem;
    padding-top: 5px;
  }
`
