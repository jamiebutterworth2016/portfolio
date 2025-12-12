import type { JSX } from "react";
import { Card, Divider, FlexColMd, FlexColSm, FlexMd } from "./Shared";
import SkillPyramid from "./SkillPyramid";
import SkillsArea from "./SkillsArea";
import ClientsArea from "./ClientsArea";

export default function IntroArea(): JSX.Element {
  return (
    <FlexMd style={{ flexWrap: "wrap" }}>
      <Card>
        <FlexColMd>
          <FlexColMd>
            <FlexColSm>
              <p>
                <strong>
                  👋 Hello, I'm Jamie, a lead full-stack developer with 9 years' industry experience.
                </strong>
              </p>
              <p>
                Over my career, I developed many software projects and acquired
                a strong skillset:
              </p>
            </FlexColSm>
            <SkillPyramid />
          </FlexColMd>
        </FlexColMd>
        <Divider />
        <SkillsArea />
      </Card>

      <ClientsArea />
    </FlexMd>
  );
}
