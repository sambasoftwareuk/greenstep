import products from "../../constants/bigCardProducts.json";
import Image from "next/image";
import { Header1 } from "@/app/_atoms/Headers";
import { MobileSideMenu, SideMenu } from "@/app/_molecules/sideMenu";
import sideMenuData from "../../mocks/sideMenuData.json";
import Breadcrumb from "../../_molecules/breadCrumb";
import MainItemGrid from "@/app/_components/MainItemGrid";

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  const productMenu = sideMenuData.filter(
    (section) => section.title === "Ürünlerimiz"
  );

  if (!product) {
    return <div className="p-6 text-red-500">Ürün bulunamadı.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center">
        <Breadcrumb />
      </div>
      <Header1 className="text-center my-5">{product.title}</Header1>

      <div className="flex flex-col lg:flex-row justify-between gap-8 ">
        <SideMenu menu={productMenu} activeHref={`/urunler/${product.slug}`} />
        <MobileSideMenu
          menu={productMenu}
          activeHref={`/urunler/${product.slug}`}
        />

        {/* Description Center */}
        <div
          className="prose prose-lg w-full lg:w-1/2 max-w-2xl text-justify"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />

        {/* Right Image */}
        <div className="w-full lg:w-1/4  mt-6">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="rounded-lg shadow-lg object-contain"
          />
        </div>
      </div>
      <Header1 className="text-center mt-8">Diğer Ürünler</Header1>

      <MainItemGrid
        items={products.filter((p) => p.slug !== slug)}
        baseHref="urunler"
        gridClassName="grid-cols-1 md:grid-cols-3"
        cardProps={{ button: false, variant: 2 }}
      />
    </div>
  );
}
