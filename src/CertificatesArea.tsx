import type { JSX } from "react";
import { FlexColMd, FlexColRg, FlexXs } from "./Shared";
import Image from "./Image";
import CSharp from "./images/certs/c_sharp_beginner.jpg";
import Java from "./images/certs/java_beginner.jpg";
import React from "./images/certs/react_advanced.jpg";
import Angular from "./images/certs/angular.jpg";
import Docker from "./images/certs/docker.jpg";
import GraphQL from "./images/certs/graphql_react.jpg";
import Neo4j from "./images/certs/neo4j.jpg";
import SystemDesign from "./images/certs/system_design.jpg";

export default function CertificatesArea(): JSX.Element {
  const width = 350;
  const height = 270;

  return (
    <FlexColRg>
      <FlexColMd>
        <h3>Languages & Frameworks</h3>
        <FlexXs style={{ flexWrap: "wrap", minHeight: `${height}px` }}>
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
        </FlexXs>
      </FlexColMd>
      <FlexColMd>
        <h3>Other</h3>
        <FlexXs style={{ flexWrap: "wrap", minHeight: `${height}px` }}>
          <Image
            src={GraphQL}
            width={width}
            borderColour={metallic.silver}
            label="Intermediate"
          />
          <Image
            src={SystemDesign}
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
        </FlexXs>
      </FlexColMd>
    </FlexColRg>
  );
}

const metallic = {
  gold: "linear-gradient(135deg,#f7e48b,#ffd700,#c8a200,#ffec8b,#b8860b)",
  silver: "linear-gradient(135deg,#f5f5f5,#dcdcdc,#bfbfbf,#e8e8e8,#a8a8a8)",
  bronze: "linear-gradient(135deg,#f2c197,#cd7f32,#a05a2c,#e2a06d,#8b4513)",
};
