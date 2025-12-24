import styled from "styled-components";
import { Colour, FlexColMd, FlexMd, FlexSm } from "./Shared";

const SkillPyramid = () => {
  const pyramidLevels: string[][] = [
    ["TypeScript", "JavaScript", "C#", "Java", "HTML", "CSS", "SQL"],
    ["React", "Angular", "Node.js", ".NET", "Spring Boot", "Playwright"],
    ["PostgreSQL", "SQL Server", "MongoDB", "RabbitMQ", "AWS SQS"],
    ["AWS", "GCP", "Terraform"],
  ];

  const layerLabels = ["Languages", "Frameworks", "Data", "DevOps"];
  const layerColors = [
    "#2f9e44", // green
    "#f1e340ff", // red
    "#fa8c16", // orange
    "#3ebef0ff", // blue
  ];

  return (
    <Container>
      {pyramidLevels.map((level, index) => (
        <Row key={index}>
          <Label>{layerLabels[index]}</Label>
          <List $background={layerColors[index]}>
            {level.map((skill) => (
              <SkillBadge key={skill}>{skill}</SkillBadge>
            ))}
          </List>
        </Row>
      ))}
    </Container>
  );
};

export default SkillPyramid;

const Row = styled(FlexMd)`
  align-items: center;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

const Label = styled.div`
  min-width: 100px;
  text-align: right;
  font-weight: bold;
`;

const List = styled(FlexSm)<{ $background: string }>`
  flex-wrap: wrap;
  padding: 0.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  background: ${({ $background }) => $background};
`;

const SkillBadge = styled.span`
  background: ${Colour.white};
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

const Container = styled(FlexColMd)`
  align-items: flex-start; // align left to leave space for labels
`;
