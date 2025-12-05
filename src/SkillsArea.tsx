import React from "react";
import data from "./strings.json";
import {
  FlexColLg,
  FlexSm,
  Card,
  FlexColMd,
  Divider,
  Colour,
  FlexBetween,
  FlexColSm,
  FlexColBetween,
  FlexEnd,
  FlexStart,
} from "./Shared";
import styled from "styled-components";
import { TechSkillButton, SoftSkillButton, Button } from "./Buttons";

type Category = {
  key: string;
  title: string;
  details: string[];
};

export default function SkillsArea() {
  const tech = data.tech as Category[];
  const soft = data.soft as Category[];

  const [selectedSkill, setSelectedSkill] = React.useState<Category>();

  let previousSkill: Category | undefined;
  let nextSkill: Category | undefined;

  if (selectedSkill) {
    const allSkills = tech.concat(soft);
    const currentIndex = allSkills.findIndex(
      (s) => s.key === selectedSkill.key
    );

    if (currentIndex > 0) {
      //not first
      previousSkill = allSkills.find((_, i) => i === currentIndex - 1);
    }

    if (currentIndex < allSkills.length) {
      //not last
      nextSkill = allSkills.find((_, i) => i === currentIndex + 1);
    }
  }

  return (
    <>
      <Card>
        <FlexColLg>
          <p>
            <strong>Click a skill to find out more:</strong>
          </p>
          <FlexColMd>
            <h3>⚙️ Technical Skills</h3>
            <SkillsRow>
              {tech.map((c, i) => (
                <TechSkillButton
                  key={i}
                  selected={selectedSkill?.key === c.key}
                  onClick={() => setSelectedSkill(c)}
                >
                  {c.title}
                </TechSkillButton>
              ))}
            </SkillsRow>
          </FlexColMd>

          <FlexColMd>
            <h3>🤝 Soft Skills</h3>
            <SkillsRow>
              {soft.map((c, i) => (
                <SoftSkillButton
                  key={i}
                  selected={selectedSkill?.key === c.key}
                  onClick={() => setSelectedSkill(c)}
                >
                  {c.title}
                </SoftSkillButton>
              ))}
            </SkillsRow>
          </FlexColMd>
        </FlexColLg>
      </Card>

      {selectedSkill && (
        <SkillModal
          onClose={() => setSelectedSkill(undefined)}
          skill={selectedSkill}
          previousSkill={previousSkill}
          nextSkill={nextSkill}
          setSelectedSkill={setSelectedSkill}
        />
      )}
    </>
  );
}

const SkillsRow = styled(FlexSm)`
  flex-wrap: wrap;
`;

type ModalProps = {
  onClose: () => void;
  skill: Category;
  previousSkill?: Category;
  nextSkill?: Category;
  setSelectedSkill: React.Dispatch<React.SetStateAction<Category | undefined>>;
};

function SkillModal({
  onClose,
  skill,
  previousSkill,
  nextSkill,
  setSelectedSkill,
}: ModalProps) {
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []); //eslint-disable-line

  let navigation = <></>;

  if (!previousSkill && nextSkill) {
    navigation = (
      <FlexEnd>
        <Button
          onClick={() => setSelectedSkill(nextSkill)}
          style={{ width: "375px", textAlign: "right" }}
        >
          {`Next: ${nextSkill.title} →`}
        </Button>
      </FlexEnd>
    );
  } else if (previousSkill && !nextSkill) {
    navigation = (
      <FlexStart>
        <Button
          onClick={() => setSelectedSkill(previousSkill)}
          style={{
            width: "375px",
          }}
        >
          {`← Previous: ${previousSkill.title}`}
        </Button>
      </FlexStart>
    );
  } else if (previousSkill && nextSkill) {
    navigation = (
      <FlexBetween>
        <Button
          onClick={() => setSelectedSkill(previousSkill)}
          style={{
            width: "375px",
          }}
        >
          {`← Previous: ${previousSkill.title}`}
        </Button>
        <Button
          onClick={() => setSelectedSkill(nextSkill)}
          style={{ width: "375px", textAlign: "right" }}
        >
          {`Next: ${nextSkill.title} →`}
        </Button>
      </FlexBetween>
    );
  }

  return (
    <ModalBackground>
      <ModalBody>
        <FlexColSm>
          <FlexColMd>
            <FlexBetween>
              <h3>{skill.title}</h3>

              <Button onClick={onClose} aria-label="Close">
                Close
              </Button>
            </FlexBetween>
            <Divider />
          </FlexColMd>

          <ul>
            {skill.details.map((detail, i) => (
              <li key={i}>
                <span dangerouslySetInnerHTML={{ __html: detail }} />
              </li>
            ))}
          </ul>
        </FlexColSm>
        <FlexColMd>
          <Divider />
          {navigation}
        </FlexColMd>
      </ModalBody>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled(FlexColBetween)`
  height: 400px;
  max-width: 900px;
  position: relative;
  top: 300px;
  left: 50px;
  background: ${Colour.white};
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
`;
