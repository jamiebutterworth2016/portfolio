import type { JSX } from "react";
import { FlexColMd, FlexXs } from "./Shared";
import Image from "./Image";
import CSharpBasics from "./images/certs/c_sharp_basics.jpg";
import Docker from "./images/certs/docker.jpg";
import GraphQL from "./images/certs/graphql_react.jpg";
import Neo4j from "./images/certs/neo4j.jpg";
import React from "./images/certs/react_advanced.jpg";
import Angular from "./images/certs/angular.jpg";

export default function CertificatesArea(): JSX.Element {
  const width = 350;
  const height = 270;

  return (
    <FlexColMd style={{ maxWidth: "1200px" }}>
      <FlexColMd>
        <h3>Advanced</h3>
        <FlexXs style={{ flexWrap: "wrap", minHeight: `${height}px` }}>
          <Image src={React} width={width} borderColour={metallic.gold} />
        </FlexXs>
      </FlexColMd>
      <FlexColMd>
        <h3>Intermediate</h3>
        <FlexXs style={{ flexWrap: "wrap", minHeight: `${height}px` }}>
          <Image src={Angular} width={width} borderColour={metallic.silver} />
          <Image src={GraphQL} width={width} borderColour={metallic.silver} />
        </FlexXs>
      </FlexColMd>
      <FlexColMd>
        <h3>Beginner</h3>
        <FlexXs style={{ flexWrap: "wrap", minHeight: `${height}px` }}>
          <Image
            src={CSharpBasics}
            width={width}
            borderColour={metallic.bronze}
          />
          <Image src={Docker} width={width} borderColour={metallic.bronze} />
          <Image src={Neo4j} width={width} borderColour={metallic.bronze} />
        </FlexXs>
      </FlexColMd>
    </FlexColMd>
  );
}

const metallic = {
  gold: "linear-gradient(135deg,#f7e48b,#ffd700,#c8a200,#ffec8b,#b8860b)",
  silver: "linear-gradient(135deg,#f5f5f5,#dcdcdc,#bfbfbf,#e8e8e8,#a8a8a8)",
  bronze: "linear-gradient(135deg,#f2c197,#cd7f32,#a05a2c,#e2a06d,#8b4513)",
};
