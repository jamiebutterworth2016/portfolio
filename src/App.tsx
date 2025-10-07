import "./App.css";
import styled from "styled-components";
import KingsSchoolLogo from "./images/KingsSchoolLogo";
import UniversityOfDerbyLogo from "./images/UniversityOfDerbyLogo";
import type { JSX } from "react";

function App() {
  return (
    <Body>
      <Section>
        <h1>Jamie Butterworth's Portfolio</h1>
      </Section>

      <Section>
        <h2>Welcome</h2>
        <p>I've created this simple website as an extension of my CV.</p>
      </Section>

      <Section>
        <h2>Timeline</h2>
        <Timeline>
          <Row
            year="2010 - 2014"
            text1={`Graduated with BSc in Computer Networks and Security.`}
            text2={`University of Derby.`}
            image={<UniversityOfDerbyLogo />}
          />
          <Row
            year="2008 - 2010"
            text1={`Graduated with A-Levels in Computing and IT.`}
            text2={`King's School, Macclesfield.`}
            image={<KingsSchoolLogo />}
          />
        </Timeline>
      </Section>
    </Body>
  );
}

type RowProps = {
  year: string;
  text1: string;
  text2?: string;
  image: JSX.Element;
};

function Row({ year, text1, text2, image }: RowProps): JSX.Element {
  return (
    <RowStyle>
      <Year>
        <p>
          <strong>{year}</strong>
        </p>
      </Year>
      <TextCol>
        <p>{text1}</p>
        {text2 && <p>{text2}</p>}
      </TextCol>
      <Image>{image}</Image>
    </RowStyle>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Year = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  white-space: nowrap;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  max-width: 100px;
  height: 100%;
  width: 100%;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const TextCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  height: 100%;
  width: 100%;
`;

const RowStyle = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  width: 100%;
  height: 80px;
  padding: 16px 24px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 32px;
`;

export default App;
