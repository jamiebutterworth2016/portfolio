import styled from "styled-components";
import { Colour, Flex, FlexColSm } from "./Shared";

const SkillPyramid = () => {
  const pyramidLevels: string[][] = [
    ["C#", "TypeScript", "JavaScript", "HTML/CSS"], // top
    ["React", "Node.js", "ASP.NET", "Playwright"], // middle
    ["PostgreSQL", "SQL Server", "GCP", "AWS DevOps", "Terraform"], // bottom
  ];

  const backgrounds = [
    Colour.lightGreen,
    Colour.lightYellow,
    Colour.lightOrange,
  ];

  return (
    <PyramidContainer>
      {pyramidLevels.map((level, index) => (
        <Level
          key={index}
          $widthPercent={25 + index * 25} // narrower at top, wider at bottom
          $background={backgrounds[index]}
        >
          {level.map((skill) => (
            <SkillBadge key={skill}>{skill}</SkillBadge>
          ))}
        </Level>
      ))}
    </PyramidContainer>
  );
};

export default SkillPyramid;

const Level = styled(Flex)<{ $widthPercent: number; $background: string }>`
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;

  width: ${({ $widthPercent }) => $widthPercent}%;
  background: ${({ $background }) => $background};

  padding: 0.5rem;
  border-radius: 0.5rem;
  clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
`;

const SkillBadge = styled.span`
  background: ${Colour.white};
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

const PyramidContainer = styled(FlexColSm)`
  align-items: center;
`;
