import type { JSX } from "react";
import { Divider, FlexColMd, FlexColRg, FlexXs } from "./Shared";
import styled from "styled-components";
import Image from "./components/Image";
import CSharp from "./images/certs/c_sharp_beginner.jpg";
import Java from "./images/certs/java_beginner.jpg";
import React from "./images/certs/react_advanced.jpg";
import Angular from "./images/certs/angular.jpg";
import Docker from "./images/certs/docker.jpg";
import GraphQL from "./images/certs/graphql_react.jpg";
import Neo4j from "./images/certs/neo4j.jpg";
import SystemDesignFrank from "./images/certs/system_design.jpg";
import SystemDesignMichael from "./images/certs/system_design_2.jpg";
import SystemDesignCasesMichael from "./images/certs/system_design_3.jpg";
import SystemDesignSandeep from "./images/certs/system_design_4.jpg";
import SystemDesignBeginner from "./images/certs/system_design_beginner.jpg";

export default function CertificatesArea(): JSX.Element {
  const width = 350;

  return (
    <FlexColRg>
      <FlexColMd>
        <h3>Languages & Frameworks</h3>
        <Box>
          <Image
            src={React}
            width={width}
            borderColour={metallic.gold}
            label="Advanced"
          />
          <Image
            src={Angular}
            width={width}
            borderColour={metallic.silver}
            label="Intermediate"
          />
          <Image
            src={CSharp}
            width={width}
            borderColour={metallic.bronze}
            label="Beginner"
          />
          <Image
            src={Java}
            width={width}
            borderColour={metallic.bronze}
            label="Beginner"
          />
        </Box>
        <Divider />
      </FlexColMd>
      <FlexColMd>
        <h3>System Design</h3>
        <Box>
          <Image
            src={SystemDesignMichael}
            width={width}
            borderColour={metallic.silver}
            label="Intermediate"
          />
          <Image
            src={SystemDesignSandeep}
            width={width}
            borderColour={metallic.silver}
            label="Intermediate"
          />
          <Image
            src={SystemDesignFrank}
            width={width}
            borderColour={metallic.silver}
            label="Intermediate"
          />
          <Image
            src={SystemDesignCasesMichael}
            width={width}
            borderColour={metallic.silver}
            label="Intermediate"
          />
          <Image
            src={SystemDesignBeginner}
            width={width}
            borderColour={metallic.bronze}
            label="Beginner"
          />
        </Box>
        <Divider />
      </FlexColMd>
      <FlexColMd>
        <h3>Misc</h3>
        <Box>
          <Image
            src={GraphQL}
            width={width}
            borderColour={metallic.silver}
            label="Intermediate"
          />
          <Image
            src={Docker}
            width={width}
            borderColour={metallic.bronze}
            label="Beginner"
          />
          <Image
            src={Neo4j}
            width={width}
            borderColour={metallic.bronze}
            label="Beginner"
          />
        </Box>
        <Divider />
      </FlexColMd>
    </FlexColRg>
  );
}

const Box = styled(FlexXs)`
  flex-wrap: wrap;
  min-height: 270px;
`;

const metallic = {
  gold: "linear-gradient(135deg,#f7e48b,#ffd700,#c8a200,#ffec8b,#b8860b)",
  silver: "linear-gradient(135deg,#f5f5f5,#dcdcdc,#bfbfbf,#e8e8e8,#a8a8a8)",
  bronze: "linear-gradient(135deg,#f2c197,#cd7f32,#a05a2c,#e2a06d,#8b4513)",
};
