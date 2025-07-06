import { generateStaticParams } from "./actions";
import DetailConsultanComponent from "./components/detailConsultanComponent";
import Content from "@/app/Content.json";

export { generateStaticParams };

export default async function DetailConsultanPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const consultant = Content.Consultations.find((item) => item.path === id);

  if (!consultant) {
    return <div>Consultant not found</div>;
  }

  return <DetailConsultanComponent consultant={consultant} />;
}