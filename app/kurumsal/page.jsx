"use client";

import React from "react";
import { Header1 } from "../_atoms/Headers";
import Breadcrumb from "../_molecules/breadCrumb";

const Kurumsal = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb />

        <div className="mt-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <Header1 className="text-primary mb-6">KURUMSAL</Header1>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  GreenStep Cooling Towers, 25 yılı aşkın sektörel deneyimiyle,
                  endüstriyel soğutma sistemlerinde yenilikçi ve çevreci
                  çözümler sunan öncü bir markadır. Alanında uzman mühendis
                  kadromuzla, yüksek verimli ve düşük bakım gerektiren soğutma
                  kuleleri geliştiriyoruz.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Üretim süreçlerimizde dayanıklı ve paslanmaz PE (polietilen)
                  malzeme kullanarak, korozyon riskini en aza indiriyor; uzun
                  ömürlü ve çevre dostu sistemler sunuyoruz. Özellikle anti
                  mikrobiyel yüzey yapısı ve lejyoner hastalığına (lejyonella)
                  karşı geliştirilmiş tasarım özellikleri ile insan sağlığına
                  duyarlı kuleler üretiyoruz.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  GreenStep markası olarak; düşük enerji ve su tüketimiyle
                  çalışan, karbon ayak izini azaltan soğutma kuleleri
                  tasarlamayı ilke edindik. Çevreci yaklaşımımızla hem
                  işletmelere maliyet avantajı sağlıyor, hem de sürdürülebilir
                  bir gelecek için sorumluluk alıyoruz.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  PE malzeme teknolojisi, hijyenik tasarım, mühendislik gücü ve
                  sürdürülebilir performans GreenStep'in temel yapı taşlarını
                  oluşturur. Endüstriyel soğutma sistemlerinde sağlıklı, verimli
                  ve uzun ömürlü çözümler için doğru adrestesiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kurumsal;
