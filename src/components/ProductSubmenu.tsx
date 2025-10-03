import { FC } from 'react';
import { ChevronDown } from 'lucide-react';

interface ProductCategory {
  name: string;
  subcategories: string[];
}

const categories: ProductCategory[] = [
  {
    name: "Industrial Pumps",
    subcategories: [
      "Centrifugal Pumps",
      "Submersible Pumps",
      "End Suction Pumps",
      "Split Case Pumps"
    ]
  },
  {
    name: "Process Pumps",
    subcategories: [
      "Chemical Process Pumps",
      "Slurry Pumps",
      "Oil & Gas Pumps",
      "Food Grade Pumps"
    ]
  },
  {
    name: "Specialty Pumps",
    subcategories: [
      "Fire Fighting Pumps",
      "Mining Pumps",
      "Sewage Pumps",
      "Marine Pumps"
    ]
  }
];

interface Props {
  onCategorySelect: (category: string, subcategory: string) => void;
}

const ProductSubmenu: FC<Props> = ({ onCategorySelect }) => {
  return (
    <nav className="bg-gray-100 border-b border-gray-200 sticky top-[4rem] z-40">
      <div className="max-w-[90rem] mx-auto">
        <ul className="flex">
          {categories.map((category) => (
            <li 
              key={category.name} 
              className="group relative"
            >
              <button className="flex items-center gap-[0.5rem] px-[1.5rem] py-[1rem] text-gray-700 hover:text-orange-500 font-medium">
                {category.name}
                <ChevronDown className="w-[1rem] h-[1rem]" />
              </button>
              
              <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg rounded-b-[0.5rem] min-w-[16rem] py-[0.5rem]">
                {category.subcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => onCategorySelect(category.name, sub)}
                    className="block w-full text-left px-[1.5rem] py-[0.75rem] text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ProductSubmenu;