import "./App.css";
import styled from "styled-components";
import Me from "./images/me.jpeg";
import {
  FlexColMd,
  FlexColSm,
  Flex,
  FlexEnd,
  FlexSm,
  Colour,
  FlexCol,
} from "./Shared";
import IntroArea from "./IntroArea";
import SkillsArea from "./SkillsArea";
import React, { type JSX } from "react";
import TimelineArea from "./TimelineArea";
import { Button, TabButton } from "./Buttons";

function App() {
  const [activeTab, setActiveTab] = React.useState<
    "intro" | "skills" | "timeline"
  >("intro");

  return (
    <FlexCol>
      <FlexColSm>
        <HeaderRow>
          <h1>
            Jamie Butterworth's
            <br />
            Interactive CV
          </h1>
          <IntroImage src={Me} />
        </HeaderRow>

        <TabsRow>
          <TabButton
            selected={activeTab === "intro"}
            onClick={() => setActiveTab("intro")}
          >
            Introduction
          </TabButton>
          <TabButton
            selected={activeTab === "skills"}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </TabButton>
          <TabButton
            selected={activeTab === "timeline"}
            onClick={() => setActiveTab("timeline")}
          >
            Employment Timeline
          </TabButton>
        </TabsRow>
      </FlexColSm>

      {activeTab === "intro" && (
        <Content
          heading={"Introduction"}
          area={<IntroArea />}
          nextTitle="My Skills"
          nextClick={() => {
            setActiveTab("skills");
          }}
        />
      )}
      {activeTab === "skills" && (
        <Content
          heading={"Skills"}
          area={<SkillsArea />}
          nextTitle="Employment timeline"
          nextClick={() => {
            setActiveTab("timeline");
          }}
        />
      )}
      {activeTab === "timeline" && (
        <Content heading={"Employment Timeline"} area={<TimelineArea />} />
      )}
    </FlexCol>
  );
}

type ContentProps = {
  heading: string;
  area: JSX.Element;
  nextTitle?: string;
  nextClick?: () => void;
};

function Content({
  heading,
  area,
  nextTitle,
  nextClick,
}: ContentProps): JSX.Element {
  return (
    <TabContent>
      <h2>{heading}</h2>
      <FlexColSm>
        {area}
        {nextTitle && nextClick && (
          <NextButtonRow>
            <Button onClick={nextClick}>{nextTitle} →</Button>
          </NextButtonRow>
        )}
      </FlexColSm>
    </TabContent>
  );
}

const TabContent = styled(FlexColMd)`
  padding: 24px 16px 0;
  background: ${`color-mix(in srgb, ${Colour.black} 5%, ${Colour.white})`};
`;

const NextButtonRow = styled(FlexEnd)`
  max-width: 700px;
  padding: 16px;
`;

const TabsRow = styled(Flex)`
  gap: 1rem;
  border-bottom: 2px solid ${Colour.blue};
`;

const HeaderRow = styled(FlexSm)`
  justify-content: space-between;
  align-items: center;
  max-width: 700px;
`;

const IntroImage = styled.img`
  width: 120px;
  border-radius: 16px;
`;

export default App;
