import React from "react";
import Image from "next/image";
import { Header1 } from "@/app/_atoms/Headers";
import { MobileSideMenu, SideMenu } from "@/app/_molecules/sideMenu";
import sideMenuData from "../../mocks/sideMenuData.json";
import Breadcrumb from "../../_molecules/breadCrumb";
import MainItemGrid from "@/app/_components/MainItemGrid";
import spareParts from "../../mocks/spareParts.json";

export default async function SparePartDetailPage({ params }) {
  const { slug } = await params;
  const sparePart = spareParts.find((s) => s.slug === slug);

  const sparePartMenu = sideMenuData.filter(
    (section) => section.title === "Yedek Parçalar"
  );

  if (!sparePart) {
    return <div className="p-6 text-red-500">Yedek Parça bulunamadi. </div>;
  }
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center">
        <Breadcrumb title={sparePart.title} />
      </div>
      <Header1 className="text-center my-5"> {sparePart.title}</Header1>
      <div className="flex flex-col lg:flex-row  justify-between  gap-8 ">
        <SideMenu
          menu={sparePartMenu}
          activeHref={`/yedek-parcalar/${sparePart.slug}`}
        />
        <MobileSideMenu
          menu={sparePartMenu}
          activeHref={`/yedek-parcalar/${sparePart.slug}`}
        />

        {/* Description Center */}
        <div
          className="prose prose-lg w-full lg:w-1/2 max-w-2xl text-justify"
          dangerouslySetInnerHTML={{ __html: sparePart.description }}
        />
        {/* Right Image */}
        <div className="w-full lg:w-1/4 flex md:block justify-center  mt-6">
          <Image
            src={sparePart.image}
            alt={sparePart.title}
            width={300}
            height={300}
            className="rounded-lg shadow-lg object-contain"
          />
        </div>
      </div>
      <Header1 className="text-center mt-8">Diğer Yedek Parçalar</Header1>
      <MainItemGrid
        items={spareParts.filter((s) => s.slug !== slug)}
        baseHref="yedek-parcalar"
        gridClassName="grid-cols-1 md:grid-cols-3"
        cardProps={{ button: false, variant: 2 }}
      />
    </div>
  );
}
