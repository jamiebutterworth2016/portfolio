import type { JSX } from "react";
import { Card, Divider, FlexColMd, FlexColSm, FlexMd } from "./Shared";
import SkillPyramid from "./SkillPyramid";
import SkillsArea from "./SkillsArea";
import ClientsArea from "./ClientsArea";
import CertificatesArea from "./CertificatesArea";

export default function IntroArea(): JSX.Element {
  return (
    <FlexMd style={{ flexWrap: "wrap" }}>
      <Card>
        <FlexColMd>
          <FlexColMd>
            <FlexColSm>
              <p>
                <strong>
                  👋 Hello, I'm Jamie, a lead full-stack developer with 9 years' industry experience and a BSc (Hons) in Computer Networks and Security.
                </strong>
              </p>
              <p>
                Over my career, I acquired
                a strong skillset:
              </p>
            </FlexColSm>
            <SkillPyramid />
          </FlexColMd>
        </FlexColMd>
        <Divider />
        <FlexColMd>
          <p>I've completed courses, earning many certificates:</p>
          <CertificatesArea/>

        </FlexColMd>
        <SkillsArea />
      </Card>

      <ClientsArea />
    </FlexMd>
  );
}
