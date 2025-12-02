import type { JSX } from "react";
import styled from "styled-components";
import { Flex } from "./Shared";

type ImageProps = {
  src: string;
  width: number;
  borderColour: string;
};

export default function Image({
  src,
  width,
  borderColour,
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
      <img src={src} width={`${width}px`} />
    </ImageContainer>
  );
}

const ImageContainer = styled(Flex)`
  border-radius: 12px;
  overflow: hidden;
`;
