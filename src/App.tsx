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
            year="2022 September - current"
            text1={`Lead Engineer`}
            text2={`Neve Learning`}
            imageSrc={`src/images/NeveLearningLogo.jfif`}
          />

          <Row
            year="2018 April - 2022 August"
            text1={`.NET Developer`}
            text2={`TDX Group - Equifax`}
            imageSrc={`src/images/TDXGroupLogo.jfif`}
          />

          <Row
            year="2016 August - 2018 April"
            text1={`Software Developer`}
            text2={`EWS Digital - Orderly`}
            imageSrc={`src/images/OrderlyLogo.jfif`}
          />

          <Row
            year="2015 May - 2016 August"
            text1={`Network Support Engineer`}
            text2={`The National EPC Company`}
            imageSrc={`src/images/NationalEPCCompanyLogo.jfif`}
          />

          <Row
            year="2015 January - 2015 April"
            text1={`IT Service Desk Analyst`}
            text2={`DLNR CRC Probation Centre`}
            imageSrc={`src/images/DLNRCRCLogo.jpeg`}
          />

          <Row
            year="2014"
            text1={`Graduated as BSc in Computer Networks and Security`}
            text2={`University of Derby`}
            image={<UniversityOfDerbyLogo />}
          />
          <Row
            year="2014 January - 2014 December"
            text1={`IT Service Technician`}
            text2={`University of Derby`}
            image={<UniversityOfDerbyLogo />}
          />
          <Row
            year="2012 July - 2013 August"
            text1={`Finance Systems Technician`}
            text2={`University of Derby`}
            image={<UniversityOfDerbyLogo />}
          />
          <Row
            year="2010"
            text1={`Started BSc in Computer Networks and Security`}
            text2={`University of Derby`}
            image={<UniversityOfDerbyLogo />}
          />
          <Row
            year="2008 - 2010"
            text1={`Graduated with A-Levels in Computing and IT.`}
            text2={`King's School, Macclesfield`}
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
  image?: JSX.Element;
  imageSrc?: string;
};

function Row({ year, text1, text2, image, imageSrc }: RowProps): JSX.Element {
  return (
    <RowStyle>
      <TextCol>
        <Year>
          <p>
            <strong>{year}</strong>
          </p>
        </Year>
        <p>{text1}</p>
        {text2 && <p>{text2}</p>}
      </TextCol>
      {image && <Image>{image}</Image>}
      {imageSrc && (
        <Image>
          <img src={imageSrc} width={"72px"} />
        </Image>
      )}
    </RowStyle>
  );
}

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled(FlexCol)`
  align-items: start;
  width: 100%;
`;

const Timeline = styled(FlexCol)`
  gap: 4px;
`;

const Year = styled(FlexCol)`
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

const TextCol = styled(FlexCol)`
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
  height: 80px;
  padding: 16px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
`;

const Body = styled(FlexCol)`
  align-items: start;
  width: 100%;
  gap: 32px;
`;

export default App;
