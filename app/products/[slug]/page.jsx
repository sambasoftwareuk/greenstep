// app/products/[id]/page.jsx
import Image from "next/image";
import products from "../../constants/bigCardProducts.json"; // adjust path if needed
import ProductCardWithImage from "@/app/_molecules/productCardWithImage";

export default async function ProductDetailPage({ params }) {
  const slug = params?.slug;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="p-6 text-red-500">Ürün bulunamadı.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
        {product.options.map((opt, index) => (
          <ProductCardWithImage
            key={index}
            title={opt.label}
            imageLink={opt.image}
            variant={3}
            button={false}
            aspectRatio="aspect-[16/16]"
          />
        ))}
      </div>
    </div>
  );
}
