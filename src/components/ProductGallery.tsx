
import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "turmeric",
    name: "Turmeric Powder",
    image: "/assets/images/turmeric-1.jfif",
    shortDescription:
      "Premium turmeric with 3-5% curcumin content, FSSAI certified, 100% natural with no additives or preservatives.",
    origin: "Andhra Pradesh",
  },
  {
    id: "pepper",
    name: "Black Pepper",
    image: "/assets/images/black-pepper1.png",
    shortDescription:
      "High-quality pepper with ≥6% piperine content, FSSAI and HACCP certified, available in 4mm, 5mm, and bold sizes.",
    origin: "Andhra Pradesh",
  },
  {
    id: "honey",
    name: "Wild Honey",
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    shortDescription:
      "100% pure and natural wild forest honey with golden to dark amber color, harvested using traditional methods by tribal communities.",
    origin: "Andhra Pradesh",
  },
  {
    id: "coffee",
    name: "Coffee Beans",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    shortDescription:
      "Premium-quality Arabica and Robusta coffee beans, sustainably grown and handpicked directly from tribal farmers in lush forest regions.",
    origin: "Andhra Pradesh",
  },
  {
    id: "annatto",
    name: "Annatto Seeds",
    image: "/assets/images/annetoseeds-1.jfif",
    shortDescription:
      "100% pure and natural annatto seeds with vibrant reddish-brown color, ethically sourced from tribal communities for natural coloring.",
    origin: "Andhra Pradesh",
  },
];

const ProductGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium uppercase tracking-wider text-purple-600 mb-3 block">
            Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Premium Products from Nature
          </h2>
          <p className="text-gray-600">
            Explore our range of high-quality agricultural products sourced
            directly from farmers and tribal communities across India. All our products are
            100% natural with no additives, preservatives, or artificial colors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-700 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
