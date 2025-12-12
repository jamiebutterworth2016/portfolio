import styled from "styled-components";
import type { JSX } from "react";
import { FlexColMd, FlexColSm, FlexSmAlignCenter } from "./Shared";

export default function NeveInfo(): JSX.Element {
  return (
    <FlexColMd>
      <FlexColSm>
        <p>
          <strong>
            Since 2022, I developed the accessible learning platform:{" "}
            <a href="https://www.nevelearning.co.uk/" target="_blank">
              Neve Learning.
            </a>
          </strong>
          <br />
        </p>
        <p>
          Neve Learning delivers a personalised, AI-driven learning experience
          for students with:
        </p>
        <Bullet>
          🧠 Neurodiverse conditions: ADHD, Autism, Dyslexia, etc.
        </Bullet>
        <Bullet>
          👁️ Visual impairments: blindness, low vision, colour blindness.
        </Bullet>
        <Bullet>
          🦾 Motor impairments: limited hand mobility, tremors, use of assistive
          devices.
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
            signed a two-year contract to use <strong>Neve Learning</strong> as
            their learning platform for government training programmes.
          </p>
        </FlexColSm>
      </AchievementCard>
    </FlexColMd>
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
