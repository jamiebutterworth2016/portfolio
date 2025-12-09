import type { JSX } from "react";
import styled from "styled-components";
import { Flex } from "./Shared";

type ImageProps = {
  src: string;
  width: number;
  borderColour: string;
  label?: string;
};

export default function Image({
  src,
  width,
  borderColour,
  label,
}: ImageProps): JSX.Element {
  return (
    <ImageContainer
      style={{
        width: `${width}px`,
        border: `5px solid transparent`,
        borderImage: `${borderColour} 1`,
        borderImageSlice: 1,
      }}
    >
      {label && <Label style={{ background: borderColour }}>{label}</Label>}
      <img src={src} width={`${width}px`} />
    </ImageContainer>
  );
}

const ImageContainer = styled(Flex)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
`;

const Label = styled.div`
  position: absolute;
  top: 19px;
  left: 85px;
  padding: 4px 8px;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  border-radius: 8px;
  backdrop-filter: brightness(0.8); // helps visibility on gradients
`;
