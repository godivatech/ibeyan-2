
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type ProductCardProps = {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  origin: string;
};

const ProductCard = ({ id, name, image, shortDescription, origin }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <span className="text-xs uppercase tracking-wider bg-purple-600/80 px-2 py-1 rounded">
            Origin: {origin}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{shortDescription}</p>
        <Link 
          to={`/products/${id}`}
          className="flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors group"
        >
          View Details
          <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${isHovered ? 'transform translate-x-1' : ''}`} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
