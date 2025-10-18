import React from "react";
import data from "./strings.json";
import { FlexColLg, FlexColSm, FlexSm, Flex, Card } from "./Shared";
import styled from "styled-components";
import { TechSkillButton, SoftSkillButton } from "./Buttons";

type Category = {
  key: string;
  title: string;
  details: string[];
};

export default function SkillsArea() {
  const tech = data.tech as Category[];
  const soft = data.soft as Category[];

  const [techSkill, setTechSkill] = React.useState<Category>(tech[0]);
  const [softSkill, setSoftSkill] = React.useState<Category>(soft[0]);

  return (
    <Container>
      <Card>
        <FlexColLg>
          <h3>Technical Skills</h3>
          <SkillsRow>
            {tech.map((c) => (
              <TechSkillButton
                selected={techSkill.key === c.key}
                onClick={() => setTechSkill(c)}
              >
                {c.title}
              </TechSkillButton>
            ))}
          </SkillsRow>
          <FlexColSm>
            <h4>{techSkill.title}</h4>
            <ul>
              {techSkill.details.map((detail, i) => (
                <li key={i}>
                  <span dangerouslySetInnerHTML={{ __html: detail }} />
                </li>
              ))}
            </ul>
          </FlexColSm>
        </FlexColLg>
      </Card>

      <Card>
        <FlexColLg>
          <h3>Soft Skills</h3>
          <SkillsRow>
            {soft.map((c) => (
              <SoftSkillButton
                selected={softSkill.key === c.key}
                onClick={() => setSoftSkill(c)}
              >
                {c.title}
              </SoftSkillButton>
            ))}
          </SkillsRow>
          <FlexColSm>
            <h4>{softSkill.title}</h4>
            <ul>
              {softSkill.details.map((detail, i) => (
                <li key={i}>
                  <span dangerouslySetInnerHTML={{ __html: detail }} />
                </li>
              ))}
            </ul>
          </FlexColSm>
        </FlexColLg>
      </Card>
    </Container>
  );
}

const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 16px;
`;

const SkillsRow = styled(FlexSm)`
  flex-wrap: wrap;
`;
