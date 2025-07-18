'use client'
import services from "../mocks/services.json";
import ProductCardWithImage from "../_molecules/productCardWithImage";
import { Header1 } from "../_atoms/Headers";
import Breadcrumb from "../_molecules/breadCrumb";

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb/>
      <Header1 className="text-center">Hizmetler</Header1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ProductCardWithImage
            key={service.id}
            title={service.title}
            imageLink={service.image}
            button={false}
            variant={2}
            titleColor='text-black'
          />
        ))}
      </div>
    </div>
  );
}
