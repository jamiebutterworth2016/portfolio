import { Card, Divider, Flex, FlexCol, FlexColMd, FlexColSm } from "./Shared";
import KingsSchoolLogo from "./images/KingsSchoolLogo";
import UniversityOfDerbyLogo from "./images/UniversityOfDerbyLogo";
import NeveLearningLogo from "./images/NeveLearningLogo.jfif";
import TDXGroupLogo from "./images/TDXGroupLogo.jfif";
import OrderlyLogo from "./images/OrderlyLogo.jfif";
import NationalEPCCompanyLogo from "./images/NationalEPCCompanyLogo.jfif";
import DLNRCRCLogo from "./images/DLNRCRCLogo.jpeg";
import type { JSX } from "react";
import styled from "styled-components";

export default function TimelineArea(): JSX.Element {
  return (
    <FlexColMd>
      <Item
        headline="Lead Engineer, Neve Learning"
        date="September 2022 – Present"
        imageSrc={NeveLearningLogo}
        texts={[
          {
            text: "Web-based Learning Management System delivering an accessible (<strong>WCAG</strong>-compliant) and personalised, <strong>AI-driven</strong> learning experience for neurodiverse students.",
          },
        ]}
      />

      <Item
        headline=".NET Developer, Equifax TDX Group"
        date="2018 April - 2022 August"
        imageSrc={TDXGroupLogo}
        texts={[
          {
            text: "Developed software services for debt collection sector.",
          },
        ]}
      />

      <Item
        headline="Software Developer, EWS Digital - Orderly"
        date="2016 August - 2018 April"
        imageSrc={OrderlyLogo}
        texts={[]}
      />
      <Item
        headline="Network Support Engineer, The National EPC Company"
        date="2015 May - 2016 August"
        imageSrc={NationalEPCCompanyLogo}
        texts={[]}
      />
      <Item
        headline="IT Service Desk Analyst, DLNR CRC"
        date="2015 January - 2015 April"
        imageSrc={DLNRCRCLogo}
        texts={[]}
      />
      <Item
        headline="University of Derby"
        date="2010 - 2014"
        image={<UniversityOfDerbyLogo />}
        texts={[
          {
            year: `2014 July`,
            text: `Graduated - BSc (Hons) in Computer Networks and Security`,
          },
          {
            year: `2014 January - 2014 December`,
            text: `IT Service Technician`,
          },
          {
            year: `2012 July - 2013 August`,
            text: `Finance Systems Technician`,
          },
        ]}
      />
      <Item
        headline="King's School, Macclesfield"
        date="2008 - 2010"
        image={<KingsSchoolLogo />}
        texts={[
          {
            year: `2008 - 2010`,
            text: `A-Levels: English Language (B); Computing (D); ICT (D); AS-Level: Economics (D)`,
          },
          {
            year: `2006 - 2008`,
            text: `GCSEs: Maths (A); English Language (A); English Literature (A); French (B); History (B); Physics (B); Biology (B); Chemistry (C); and Latin (C).`,
          },
        ]}
      />
    </FlexColMd>
  );
}

type RowProps = {
  headline: string;
  date: string;
  image?: JSX.Element;
  imageSrc?: string;
  texts: Text[];
};

function Item({
  headline,
  date,
  texts,
  image,
  imageSrc,
}: RowProps): JSX.Element {
  return (
    <Card>
      <HeadlineRow>
        <FlexColSm>
          <h3>{headline}</h3>
          <p>{date}</p>
        </FlexColSm>

        {image && <Image>{image}</Image>}
        {imageSrc && (
          <Image>
            <img src={imageSrc} width={"72px"} />
          </Image>
        )}
      </HeadlineRow>
      {texts.length > 0 && (
        <FlexColMd>
          <Divider />
          {texts.map((t, i) => {
            return (
              <div key={i}>
                <FlexCol>
                  {t.year && (
                    <p>
                      <strong>{t.year}</strong>
                    </p>
                  )}
                  <p dangerouslySetInnerHTML={{ __html: t.text }} />
                </FlexCol>
              </div>
            );
          })}
        </FlexColMd>
      )}
    </Card>
  );
}

type Text = {
  text: string;
  year?: string;
};

const HeadlineRow = styled(Flex)`
  justify-content: space-between;
`;

const Image = styled(Flex)`
  justify-content: center;
  min-width: 100px;
  max-width: 100px;
  height: 100%;
  width: 100%;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
