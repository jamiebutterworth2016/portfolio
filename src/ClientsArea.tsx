import type { JSX } from "react";
import { FlexMd } from "./Shared";
import Starbucks from "./images/clients/starbucks.svg";
import Morrisons from "./images/clients/morrisons.png";
import TDX from "./images/clients/tdx.png";
import Neve from "./images/clients/neve.jpg";
import ClientCard from "./components/ClientCard";
import NeveInfo from "./NeveInfo";

export default function ClientsArea(): JSX.Element {
  return (
    <FlexMd style={{ flexWrap: "wrap" }}>
      <ClientCard
        imageSrc={Neve}
        heading={"Neve Learning"}
        info={"Accessible learning management system."}
      >
        <NeveInfo />
      </ClientCard>
      <ClientCard
        imageSrc={Starbucks}
        heading={"Starbucks"}
        info={"Recipe and stock system."}
      />
      <ClientCard
        imageSrc={Morrisons}
        heading={"Morrisons Flowerworld"}
        info={"Bouquet production system."}
      />
      <ClientCard
        imageSrc={TDX}
        heading={"TDX Group"}
        info={"Insolvency system."}
      />
    </FlexMd>
  );
}
