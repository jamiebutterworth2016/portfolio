import type { JSX } from "react";
import { Card, FlexColMd, FlexColSm, FlexMd } from "./Shared";
import SkillPyramid from "./SkillPyramid";
import SkillsCard from "./SkillsArea";
import CertificatesArea from "./CertificatesArea";

export default function Home(): JSX.Element {
  return (
    <FlexMd style={{ flexWrap: "wrap" }}>
      <IntroCard/>
      <SkillsCard />
      <CertificatesArea />
    </FlexMd>
  );
}

function IntroCard() {
  return (
    <Card>
      <FlexColMd>
        <FlexColSm>
          <p>
            <strong>
              👋 Hello, I'm Jamie, a lead full-stack developer with 9 years'
              industry experience and a BSc (Hons) in Computer Networks and
              Security.
            </strong>
            <ul>
              <li>6 years with C# .NET Microservices.</li>
              <li>3 years with React TypeScript and Node.js.</li>
            </ul>
          </p>
          <p>Over my career, I acquired a strong skillset:</p>
        </FlexColSm>
        <SkillPyramid />
      </FlexColMd>
    </Card>
  );
}
