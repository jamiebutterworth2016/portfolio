import { Card, Divider, FlexCol, FlexSmAlignCenter } from "../Shared";
import Image from "./Image";

type ClientCardProps = {
  imageSrc: string;
  heading: string;
  info: string;
  children?: React.ReactNode;
};

export default function ClientCard({
  imageSrc,
  heading,
  info,
  children,
}: ClientCardProps) {
  return (
    <Card>
      <FlexSmAlignCenter>
        <Image src={imageSrc} width={40} />
        <FlexCol>
          <h4>{heading}</h4>
          <p>{info}</p>
        </FlexCol>
      </FlexSmAlignCenter>
      {children && <Divider />}
      {children}
    </Card>
  );
}
