import styled from "styled-components";

const Sizes = {
  maxWidth: "800px",
};

const Flex = styled.div`
  display: flex;
`;

const FlexSm = styled(Flex)`
  gap: 8px;
`;

const FlexMd = styled(Flex)`
  gap: 16px;
`;

const FlexSmAlignCenter = styled(FlexSm)`
  align-items: center;
`;

const FlexStart = styled(Flex)`
  justify-content: start;
`;

const FlexEnd = styled(Flex)`
  justify-content: end;
`;

const FlexCenter = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

const FlexBetween = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`;

const FlexCol = styled(Flex)`
  flex-direction: column;
`;

const FlexColBetween = styled(FlexCol)`
  justify-content: space-between;
`;

const FlexColSm = styled(FlexCol)`
  gap: 8px;
`;

const FlexColMd = styled(FlexCol)`
  gap: 16px;
`;

const FlexColLg = styled(FlexCol)`
  gap: 32px;
`;

const Divider = styled.hr`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0;
  max-width: ${Sizes.maxWidth};
`;

const Card = styled(FlexColMd)`
  padding: 16px;
  max-width: ${Sizes.maxWidth};

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const Colour = {
  blue: "#0ea5e9",
  black: "#000000ff",
  white: "#ffffffff",
  orange: "#ff6a00ff",

  lightBlue: `color-mix(in srgb, #0ea5e9 50%, #ffffffff)`,
  lightOrange: `color-mix(in srgb, #ff6a00ff 50%, #ffffffff)`,
  lightYellow: `color-mix(in srgb, #eeff00ff 50%, #ffffffff)`,
  lightGreen: `color-mix(in srgb, #00ff04ff 50%, #ffffffff)`,
  grey: `color-mix(in srgb, #000000ff 50%, #ffffffff)`,
};

export {
  Flex,
  FlexSm,
  FlexSmAlignCenter,
  FlexMd,
  FlexStart,
  FlexEnd,
  FlexCenter,
  FlexBetween,
  FlexCol,
  FlexColSm,
  FlexColMd,
  FlexColLg,
  FlexColBetween,
  Divider,
  Card,
  Sizes,
  Colour,
};
