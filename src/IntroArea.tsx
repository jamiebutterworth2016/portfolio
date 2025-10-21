import type { JSX } from "react";
import {
  Card,
  FlexColMd,
  Divider,
  FlexColSm,
  FlexSmAlignCenter,
} from "./Shared";
import SkillPyramid from "./SkillPyramid";
import styled from "styled-components";

export default function IntroArea(): JSX.Element {
  return (
    <Card>
      <FlexColMd>
        <FlexColMd>
          <FlexColSm>
            <p>
              <strong>
                👋 Hello, I'm Jamie, a lead engineer and full-stack developer
                with 9 years' software industry experience.
              </strong>
            </p>
            <p>
              Over my career, I developed many software projects and acquired a
              strong technical skillset:
            </p>
          </FlexColSm>
          <SkillPyramid />
          <Divider />
        </FlexColMd>

        <FlexColMd>
          <FlexColSm>
            <p>
              <strong>
                Since 2022, I've developed a web-based accessible learning
                platform: <a href="https://www.nevelearning.co.uk/" target="_blank">Neve Learning.</a>
              </strong>
              <br />
            </p>
            <p>
              Neve Learning delivers a personalised, AI-driven learning
              experience for students with:
            </p>
            <Bullet>
              🧠 Neurodiverse conditions: ADHD, Autism, Dyslexia, Dyspraxia,
              etc.
            </Bullet>
            <Bullet>
              👁️ Visual impairments: blindness, low vision, colour blindness.
            </Bullet>
            <Bullet>
              🦾 Motor impairments: limited hand mobility, tremors, use of
              assistive devices.
            </Bullet>
          </FlexColSm>
          <AchievementCard>
            <FlexColSm>
              <FlexSmAlignCenter>
                🏆
                <p>
                  <strong>Contract secured in 2025</strong>
                </p>
              </FlexSmAlignCenter>
              <p>
                In September 2025, the <strong>Scottish Digital Academy</strong>{" "}
                signed a two-year contract to use <strong>Neve Learning</strong>{" "}
                as their learning platform for government training programmes.
              </p>
            </FlexColSm>
          </AchievementCard>
        </FlexColMd>
      </FlexColMd>
    </Card>
  );
}

const AchievementCard = styled.div`
  padding: 16px;
  border-radius: 16px;
  background: linear-gradient(
    #fff5d6 0%,
    #f7d78a 30%,
    #d4a72a 60%,
    #b8860b 100%
  );
`;

const Bullet = styled.p`
  margin-left: 8px;
`;
