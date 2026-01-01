import type { JSX } from "react";
import { Divider, Flex, FlexColMd, FlexColRg, FlexXs } from "./Shared";
import styled from "styled-components";
import CSharp from "./images/certs/c_sharp_beginner.jpg";
import Java from "./images/certs/java_beginner.jpg";
import React from "./images/certs/react_advanced.jpg";
import Angular from "./images/certs/angular.jpg";
import Docker from "./images/certs/docker.jpg";
import GraphQL from "./images/certs/graphql_react.jpg";
import Neo4j from "./images/certs/neo4j.jpg";
import SystemDesignAnurag from "./images/certs/system_design_michael.jpg";
import SystemDesignMichael from "./images/certs/system_design_michael.jpg";
import SystemDesignMichaelEvent from "./images/certs/system_design_michael_event.jpg";
import SystemDesignMichaelCases from "./images/certs/system_design_michael_cases.jpg";
import SystemDesignSandeep from "./images/certs/system_design_sandeep.jpg";
import SystemDesignFrank from "./images/certs/system_design_frank.jpg";
import SystemDesignMehmet from "./images/certs/system_design_mehmet.jpg";
import SystemDesignBeginner from "./images/certs/system_design_beginner.jpg";

export default function CertificatesArea(): JSX.Element {
  return (
    <FlexColRg>
      <FlexColMd>
        <h3>Languages & Frameworks</h3>
        <Box>
          <Certificate src={React} label="Expert" />
          <Certificate src={Angular} label="Intermediate" />
          <Certificate src={GraphQL} label="Intermediate" />
          <Certificate src={CSharp} label="Beginner" />
          <Certificate src={Java} label="Beginner" />
        </Box>
        <Divider />
      </FlexColMd>
      <FlexColMd>
        <h3>System Design</h3>
        <Box>
          <Certificate src={SystemDesignAnurag} label="Intermediate" />
          <Certificate src={SystemDesignMichael} label="Intermediate" />
          <Certificate src={SystemDesignMichaelEvent} label="Intermediate" />
          <Certificate src={SystemDesignMichaelCases} label="Intermediate" />
          <Certificate src={SystemDesignSandeep} label="Intermediate" />
          <Certificate src={SystemDesignFrank} label="Intermediate" />
          <Certificate src={SystemDesignMehmet} label="Beginner" />
          <Certificate src={SystemDesignBeginner} label="Beginner" />
        </Box>
        <Divider />
      </FlexColMd>
      <FlexColMd>
        <h3>Misc</h3>
        <Box>
          <Certificate src={Docker} label="Beginner" />
          <Certificate src={Neo4j} label="Beginner" />
        </Box>
        <Divider />
      </FlexColMd>
    </FlexColRg>
  );
}

type CertificateProps = {
  src: string;
  label: "Beginner" | "Intermediate" | "Expert";
};

function Certificate({ src, label }: CertificateProps): JSX.Element {
  let borderColour = "";
  switch (label) {
    case "Beginner":
      borderColour = metallic.bronze;
      break;
    case "Intermediate":
      borderColour = metallic.silver;
      break;
    case "Expert":
      borderColour = metallic.gold;
      break;
  }

  return (
    <CertificateContainer
      style={{
        border: `5px solid transparent`,
        borderImage: `${borderColour} 1`,
        borderImageSlice: 1,
      }}
    >
      <Label style={{ background: borderColour }}>{label}</Label>
      <img src={src} />
    </CertificateContainer>
  );
}

const CertificateContainer = styled(Flex)`
  position: relative;
  overflow: hidden;
  max-width: 15rem; /* controls overall size */
  aspect-ratio: 1600 / 1190;
`;

const Label = styled.div`
  position: absolute;
  top: 8px;
  left: 58px;
  padding: 4px 8px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
`;

const Box = styled(FlexXs)`
  flex-wrap: wrap;
`;

const metallic = {
  gold: "linear-gradient(135deg,#f7e48b,#ffd700,#c8a200,#ffec8b,#b8860b)",
  silver: "linear-gradient(135deg,#f5f5f5,#dcdcdc,#bfbfbf,#e8e8e8,#a8a8a8)",
  bronze: "linear-gradient(135deg,#f2c197,#cd7f32,#a05a2c,#e2a06d,#8b4513)",
};
