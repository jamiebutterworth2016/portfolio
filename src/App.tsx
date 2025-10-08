import "./App.css";
import styled from "styled-components";
import Me from "./images/me.jpeg";
import KingsSchoolLogo from "./images/KingsSchoolLogo";
import UniversityOfDerbyLogo from "./images/UniversityOfDerbyLogo";
import NeveLearningLogo from "./images/NeveLearningLogo.jfif";
import TDXGroupLogo from "./images/TDXGroupLogo.jfif";
import OrderlyLogo from "./images/OrderlyLogo.jfif";
import NationalEPCCompanyLogo from "./images/NationalEPCCompanyLogo.jfif";
import DLNRCRCLogo from "./images/DLNRCRCLogo.jpeg";

import type { JSX } from "react";

function App() {
  const neveSkills = [
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "AWS DevOps",
    "Terraform",
    "Playwright",
  ];

  const tdxSkills = [
    "ASP.NET",
    "C#",
    "HTML/CSS",
    "JavaScript",
    "SQL Server",
    "GCP",
  ];

  const allSkills = neveSkills.concat(tdxSkills);

  return (
    <Body>
      <Section>
        <h1>Jamie Butterworth's Portfolio</h1>
      </Section>
      <IntroImage src={Me} />

      <Section>
        <h2>Introduction</h2>
        <IntroArea skills={allSkills} />
      </Section>

      <Section>
        <h2>Experience Timeline</h2>
        <TimelineItems>
          <Item
            headline="Lead Engineer, Neve Learning"
            date="September 2022 – Present"
            imageSrc={NeveLearningLogo}
            texts={[
              {
                text: "Web-based Learning Management System delivering an accessible (<strong>WCAG</strong>-compliant) and personalised, <strong>AI-driven</strong> learning experience for neurodiverse students.",
              },
              {
                text: "Leads <strong>agile development</strong> and product management, driving stand-ups, sprint planning, demos and retrospectives. Refines <strong>roadmaps</strong> and backlogs, delegating work and maintaining team morale under tight deadlines.",
              },
              {
                text: "Provides <strong>technical leadership</strong> for CivTech competitions, tenders and government stakeholder sessions. Delivers out-of-hours <strong>hotfixes</strong> and live environment support while mentoring developers and promoting best coding practices.",
              },
              {
                text: "Integrates <strong>AWS Cloud AI services</strong> to automate course creation and generate multi-format learning content. Uses <strong>AWS Polly</strong> for text-to-speech and <strong>OpenAI</strong> to extract transcripts, audio and slides from videos.",
              },
              {
                text: "Developed a <strong>Node.js</strong> worker handling in-app notifications and background <strong>AI content generation</strong> tasks.",
              },
              {
                text: "Designs and develops <strong>accessible, mobile-first</strong> software exceeding WCAG standards. Collaborates with designers via <strong>Figma</strong> prototypes.",
              },
              {
                text: "Leads <strong>AWS DevOps</strong>, deployments and testing. Built <strong>CI/CD pipelines</strong> with GitHub Actions for CloudFront, Elastic Beanstalk, ECS and RDS. Manages infrastructure with <strong>Terraform</strong> and uses <strong>Docker</strong> with microservices.",
              },
              {
                text: "Oversees regular <strong>production deployments</strong>, prepares release notes and ensures stability through manual <strong>regression testing</strong>. Writes Jest unit and <strong>Playwright</strong> end-to-end tests.",
              },
              {
                text: "Champions <strong>documentation</strong> of pipelines, standards and processes. Continuously upskills—building <strong>machine learning models</strong> with Python and Pandas and exploring <strong>Graph Databases</strong> (Neo4j, Cypher, D3.js) for data visualisation.",
              },
              {
                text: "Completed advanced <strong>React</strong>, <strong>Angular</strong>, <strong>GraphQL</strong> and software design training. Adopts a <strong>security-first</strong> approach following <strong>OWASP</strong> best practices, performing regular <strong>Fortify scans</strong> and mitigating threats like <strong>SQL Injection</strong>, <strong>XSS</strong> and <strong>SSRF</strong>.",
              },
            ]}
            skills={neveSkills}
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
            skills={tdxSkills}
          />

          <Item
            headline="Software Developer, EWS Digital - Orderly"
            date="2016 August - 2018 April"
            imageSrc={OrderlyLogo}
            texts={[]}
            skills={[]}
          />
          <Item
            headline="Network Support Engineer, The National EPC Company"
            date="2015 May - 2016 August"
            imageSrc={NationalEPCCompanyLogo}
            texts={[]}
            skills={[]}
          />
          <Item
            headline="IT Service Desk Analyst, DLNR CRC"
            date="2015 January - 2015 April"
            imageSrc={DLNRCRCLogo}
            texts={[]}
            skills={[]}
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
            skills={[]}
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
            skills={[]}
          />
        </TimelineItems>
      </Section>
    </Body>
  );
}

type Text = {
  text: string;
  year?: string;
};

type RowProps = {
  headline: string;
  date: string;
  image?: JSX.Element;
  imageSrc?: string;
  texts: Text[];
  skills: string[];
};

function Item({
  headline,
  date,
  texts,
  image,
  imageSrc,
  skills,
}: RowProps): JSX.Element {
  return (
    <Card>
      <HeadlineRow>
        <HeadlineAndDateCol>
          <h3>
            <strong>{headline}</strong>
          </h3>
          <p>{date}</p>
          {skills.length > 0 && (
            <SkillsRow>
              {skills.map((s) => (
                <SkillLabel>{s}</SkillLabel>
              ))}
            </SkillsRow>
          )}
        </HeadlineAndDateCol>

        {image && <Image>{image}</Image>}
        {imageSrc && (
          <Image>
            <img src={imageSrc} width={"72px"} />
          </Image>
        )}
      </HeadlineRow>
      {texts.length > 0 && (
        <TextCol>
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
        </TextCol>
      )}
    </Card>
  );
}

type IntroAreaProps = {
  skills: string[];
};

function IntroArea({ skills }: IntroAreaProps): JSX.Element {
  return (
    <Card>
      <FlexColSm>
        <p>
          Hello, I'm Jamie, a lead software engineer with a 9 years' software
          industry experience.
          <br />
          During my career, I acquired many skills:
        </p>

        <SkillsRow>
          {skills.map((s) => (
            <SkillLabel>{s}</SkillLabel>
          ))}
        </SkillsRow>
        <Divider />
        <p>
          In last 3 years, I developed an accessible education platform (Neve
          Learning), for Scottish Government, to personalise the learning
          experience of neurodiverse (ADHD, Autistic, Dyslexic, etc.) and blind
          students.
        </p>
        <p>
          I recently developed software to enable a blind student to
          successfully complete a 40 question-long exam. I achieved this by
          using WCAG ARIA tags and extensive testing with a screen reader.
        </p>
        <p>Please see my experience below.</p>
      </FlexColSm>
    </Card>
  );
}

const Divider = styled.hr`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0;
`;

const Flex = styled.div`
  display: flex;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexColSm = styled(FlexCol)`
  gap: 16px;
`;

const IntroImage = styled.img`
  width: 300px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

const SkillsRow = styled(Flex)`
  gap: 8px;
  flex-wrap: wrap;
`;

const SkillLabel = styled(FlexCol)`
  background: rgba(121, 124, 188, 0.26);
  padding: 8px;
  border-radius: 4px;
  width: min-content;
  white-space: nowrap;
  height: 16px;
`;

const HeadlineAndDateCol = styled(FlexCol)`
  gap: 8px;
`;

const HeadlineRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Section = styled(FlexCol)`
  gap: 16px;
`;

const TimelineItems = styled(FlexCol)`
  gap: 8px;
  width: 100%;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100px;
  max-width: 100px;
  height: 100%;
  width: 100%;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const TextCol = styled(FlexCol)`
  gap: 12px;
`;

const Card = styled(FlexCol)`
  gap: 16px;
  padding: 16px;
  max-width: 700px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const Body = styled(FlexCol)`
  gap: 48px;
`;

export default App;
