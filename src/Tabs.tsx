import styled from "styled-components";
import { TabButton } from "./components/Buttons";
import { Flex, Colour } from "./Shared";

export type Tab = "intro" | "clients" | "employers";

type TabsProps = {
  activeTab: Tab;
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
};

export function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <TabsRow>
      <TabButton
        selected={activeTab === "intro"}
        onClick={() => setActiveTab("intro")}
      >
        Intro
      </TabButton>
      <TabButton
        selected={activeTab === "clients"}
        onClick={() => setActiveTab("clients")}
      >
        Clients
      </TabButton>
      <TabButton
        selected={activeTab === "employers"}
        onClick={() => setActiveTab("employers")}
      >
        Employers
      </TabButton>
    </TabsRow>
  );
}

const TabsRow = styled(Flex)`
  gap: 1rem;
  border-bottom: 2px solid ${Colour.blue};
`;
