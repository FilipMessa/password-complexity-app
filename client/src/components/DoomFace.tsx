import styled from 'styled-components';
import faces from '../assets/faces.jpg';

const faceType = {
  0: '-93px -571px',
  1: `-278px -571px`,
  2: '-472px -571px',
  3: '-472px -337px',
  4: '-472px -109px',
};

interface ImagesProps {
  type: 0 | 1 | 2 | 3 | 4;
}

export const DoomFace = styled.div<ImagesProps>`
  width: 187px;
  height: 235px;
  display: ${({ type }) => (type !== undefined ? 'block' : 'none')};
  background: url(${faces}) ${({ type }) => faceType[type]};
  transition: visibility 0s, opacity 0.5s linear;
`;
