import "./App.css";
import styled from "styled-components";
import {
  FlexColMd,
  FlexColSm,
  FlexEnd,
  FlexSm,
  Colour,
  FlexCol,
} from "./Shared";
import React, { type JSX } from "react";
import { Button } from "./components/Buttons";
import Home from "./Home";
import EmployeesArea from "./EmployeesArea";
import { type Tab, Tabs } from "./Tabs";
import ClientsArea from "./ClientsArea";

function App() {
  const [activeTab, setActiveTab] = React.useState<Tab>("intro");

  return (
    <Container>
      <FlexColSm>
        <HeaderRow>
          <h1>Jamie Butterworth</h1>
        </HeaderRow>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </FlexColSm>

      {activeTab === "intro" && (
        <Content
          heading={"Introduction"}
          area={<Home />}
          nextTitle="View my clients"
          nextClick={() => {
            setActiveTab("clients");
          }}
        />
      )}
      {activeTab === "clients" && (
        <Content
          heading={"Clients"}
          area={<ClientsArea />}
          nextTitle="View my employers"
          nextClick={() => {
            setActiveTab("employers");
          }}
        />
      )}
      {activeTab === "employers" && (
        <Content heading={"Employers"} area={<EmployeesArea />} />
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

const HeaderRow = styled(FlexSm)`
  justify-content: space-between;
  align-items: center;
  max-width: 850px;
  width: 100%;
`;

// const IntroImage = styled.img`
//   width: 120px;
//   border-radius: 16px;
// `;

export default App;
