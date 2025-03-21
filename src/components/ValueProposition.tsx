
import { useState, useEffect, useRef } from 'react';
import { Sparkles, Leaf, Award } from 'lucide-react';

const values = [
  {
    icon: <Leaf className="w-8 h-8 text-purple-600" />,
    title: 'Direct Farmer Sourcing',
    description: 'We work directly with farmers and tribal communities, ensuring fair prices and sustainable practices.'
  },
  {
    icon: <Award className="w-8 h-8 text-purple-600" />,
    title: 'FSSAI-Certified Quality',
    description: 'Our products adhere to the highest quality standards, guaranteed by FSSAI certification.'
  },
  {
    icon: <Sparkles className="w-8 h-8 text-purple-600" />,
    title: 'Export-Ready Packaging',
    description: 'Premium packaging designed to preserve quality during international shipping and extend shelf life.'
  }
];

const ValueProposition = () => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = elementRefs.current.findIndex((ref) => ref === entry.target);
          
          if (entry.isIntersecting && !activeIndexes.includes(index) && index !== -1) {
            setActiveIndexes((prev) => [...prev, index]);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    elementRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      elementRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [activeIndexes]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium uppercase tracking-wider text-purple-600 mb-3 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Value Proposition</h2>
          <p className="text-gray-600">
            BZHO NEXUSHUB brings premium agricultural products from tribal communities to global markets,
            maintaining the highest standards in quality and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              ref={(el) => (elementRefs.current[index] = el)}
              className={`bg-gray-50 rounded-lg p-8 transition-all duration-700 transform ${
                activeIndexes.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm mx-auto">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{value.title}</h3>
              <p className="text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
