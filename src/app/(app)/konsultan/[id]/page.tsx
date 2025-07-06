import { generateStaticParams } from "./actions";
import DetailConsultanComponent from "./components/detailConsultanComponent";
import Content from "@/app/Content.json";

export { generateStaticParams };

export default function DetailConsultanPage({
  params,
}: {
  params: { id: string };
}) {
  const consultant = Content.Consultations.find((item) => item.path === params.id);

  if (!consultant) {
    return <div>Consultant not found</div>;
  }

  return <DetailConsultanComponent consultant={consultant} />;
}
