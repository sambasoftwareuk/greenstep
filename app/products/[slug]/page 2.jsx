// app/products/[id]/page.jsx
import products from "../../constants/bigCardProducts.json"; // adjust path if needed
import ProductCardWithImage from "@/app/_molecules/productCardWithImage";
import { CardImage } from "@/app/_atoms/images";
import Image from "next/image";
import { Header1 } from "@/app/_atoms/Headers";
import MainProductComponent from "@/app/_components/MainProductComponent.jsx";

export default async function ProductDetailPage({ params }) {
  const slug = params?.slug;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="p-6 text-red-500">Ürün bulunamadı.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Header1 className="text-center my-5">{product.title}</Header1>

      <div className="flex flex-col lg:flex-row justify-between gap-8 ">
        {/* Left Image */}
        <div className="w-full lg:w-1/4  mt-6">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="rounded-lg shadow-lg object-contain"
          />
        </div>

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
      <MainProductComponent
        products={products.filter((p) => p.slug !== slug)}
      />
    </div>
  );
}
