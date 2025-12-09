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
import React, { type JSX } from "react";
import { Button, TabButton } from "./Buttons";
import IntroArea from "./IntroArea";
import CertificatesArea from "./CertificatesArea";
import TimelineArea from "./TimelineArea";

function App() {
  const [activeTab, setActiveTab] = React.useState<
    "intro" | "certificates" | "timeline"
  >("intro");

  return (
    <Container>
      <FlexColSm>
        <HeaderRow>
          <h1>Jamie Butterworth</h1>
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
            selected={activeTab === "certificates"}
            onClick={() => setActiveTab("certificates")}
          >
            Certificates
          </TabButton>
          <TabButton
            selected={activeTab === "timeline"}
            onClick={() => setActiveTab("timeline")}
          >
            Employers
          </TabButton>
        </TabsRow>
      </FlexColSm>

      {activeTab === "intro" && (
        <Content
          heading={"Introduction"}
          area={<IntroArea />}
          nextTitle="View my certificates"
          nextClick={() => {
            setActiveTab("certificates");
          }}
        />
      )}
      {activeTab === "certificates" && (
        <Content
          heading={"Certificates"}
          area={<CertificatesArea />}
          nextTitle="View my Employers"
          nextClick={() => {
            setActiveTab("timeline");
          }}
        />
      )}
      {activeTab === "timeline" && (
        <Content heading={"Employers"} area={<TimelineArea />} />
      )}
    </Container>
  );
}

const Container = styled(FlexCol)`
  padding: 8px 16px;
`;

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
      <FlexCol>
        {area}
        {nextTitle && nextClick && (
          <NextButtonRow>
            <Button onClick={nextClick}>{nextTitle} →</Button>
          </NextButtonRow>
        )}
      </FlexCol>
    </TabContent>
  );
}

const TabContent = styled(FlexColMd)`
  padding: 16px;
  background: ${`color-mix(in srgb, ${Colour.black} 5%, ${Colour.white})`};
`;

const NextButtonRow = styled(FlexEnd)`
  max-width: 800px;
  padding: 16px;
`;

const TabsRow = styled(Flex)`
  gap: 1rem;
  border-bottom: 2px solid ${Colour.blue};
`;

const HeaderRow = styled(FlexSm)`
  justify-content: space-between;
  align-items: center;
  max-width: 850px;
  width: 100%;
`;

const IntroImage = styled.img`
  width: 120px;
  border-radius: 16px;
`;

export default App;
