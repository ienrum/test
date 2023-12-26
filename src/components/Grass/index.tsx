// GrassBlock.tsx
import React from 'react';
import styled from 'styled-components';

interface GrassBlockProps {
  color: string;
}

const Block = styled.div<GrassBlockProps>`
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => color};
  margin: 1px;
`;

const Row = styled.div`
  display: flex;
`;

interface GrassProps {
  width: number;
  height: number;
  colors: string[];
  filledIndices: number[];
}

const Grass: React.FC<GrassProps> = ({
  width,
  height,
  colors,
  filledIndices,
}) => {
  return (
    <div>
      {[...Array(height)].map((_, rowIndex) => (
        <Row key={rowIndex}>
          {[...Array(width)].map((_, colIndex) => {
            const index = rowIndex * width + colIndex;
            const color = filledIndices.includes(index)
              ? colors[index % colors.length]
              : '#ebedf0';

            return <Block key={colIndex} color={color} />;
          })}
        </Row>
      ))}
    </div>
  );
};

export default Grass;
