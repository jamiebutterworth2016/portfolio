import styled from "styled-components";

const Flex = styled.div`
  display: flex;
`;

const FlexSm = styled(Flex)`
  gap: 8px;
`;

const FlexSmAlignCenter = styled(FlexSm)`
  align-items: center;
`;

const FlexEnd = styled(Flex)`
  justify-content: end;
`;

const FlexCol = styled(Flex)`
  flex-direction: column;
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
  max-width: 700px;
`;

const Card = styled(FlexColMd)`
  padding: 16px;
  max-width: 700px;

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
};

export {
  Flex,
  FlexSm,
  FlexSmAlignCenter,
  FlexEnd,
  FlexCol,
  FlexColSm,
  FlexColMd,
  FlexColLg,
  Divider,
  Card,
  Colour,
};
