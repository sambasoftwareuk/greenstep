import services from "../../mocks/services.json";
import { Header1 } from "@/app/_atoms/Headers";
import { MobileSideMenu, SideMenu } from "@/app/_molecules/sideMenu";
import sideMenuData from "../../mocks/sideMenuData.json";
import Breadcrumb from "../../_molecules/breadCrumb";

export default async function ServicesDetailPage({ params }) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  const serviceMenu = sideMenuData.filter(
    (section) => section.title === "Hizmetlerimiz"
  );

  if (!service) {
    return <div className="p-6 text-red-500">Hizmet bulunamadı.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center">
        <Breadcrumb />
      </div>
      <Header1 className="text-center my-5">{service.title}</Header1>
      <div className="flex flex-col md:flex-row gap-12">
        <SideMenu
          menu={serviceMenu}
          activeHref={`/hizmetler/${service.slug}`}
        />
        <MobileSideMenu
          menu={serviceMenu}
          activeHref={`/hizmetler/${service.slug}`}
        />
        <div
          className="text-lg md:text-xl leading-relaxed w-full max-w-2xl text-justify"
          dangerouslySetInnerHTML={{ __html: service.description }}
        />
      </div>
    </div>
  );
}
