/*import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const categories = [
  ["Staples", "Dals & Pulses"],
  ["Dry Fruits", "Seeds"],
  ["Dairy", "Beverages"],
  ["Edibles", "Spices & Masalas"],
  ["Home Essential", "Personal Care"],
  ["Millets", "Oils"],
  ["Sweeteners", "Sweets"],
  ["Snacks", "Bakery"],
  ["Fruits & Vegetables", "Ready To Cook"],
];

const BrowseCategories = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center   rounded-md w-full"
      >
        <span > Browse All Categories</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-72 bg-white shadow-lg border rounded-md p-2">
          {categories.map(([left, right], index) => (
            <div key={index} className="flex justify-between px-2 py-1 hover:bg-gray-100 rounded-md">
              <span className="text-gray-700 cursor-pointer">{left}</span>
              <span className="text-gray-700 cursor-pointer">{right}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseCategories;
*/

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom"; 

const categories = [
  { name: "Staples", path: "/staples" },
  { name: "Dals & Pulses", path: "/dals-pulses" },
  { name: "Dry Fruits", path: "/dry-fruits" },
  { name: "Seeds", path: "/seeds" },
  { name: "Dairy", path: "/dairy" },
  { name: "Beverages", path: "/beverages" },
  { name: "Edibles", path: "/edibles" },
  { name: "Spices & Masalas", path: "/spices-masalas" },
  { name: "Home Essential", path: "/home-essential" },
  { name: "Personal Care", path: "/personal-care" },
  { name: "Millets", path: "/millets" },
  { name: "Oils", path: "/oils" },
  { name: "Sweeteners", path: "/sweeteners" },
  { name: "Sweets", path: "/sweets" },
  { name: "Snacks", path: "/snacks" },
  { name: "Bakery", path: "/bakery" },
  { name: "Fruits & Vegetables", path: "/fruits-vegetables" },
  { name: "Ready To Cook", path: "/ready-to-cook" },
];

const BrowseCategories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); 

 
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between  text-white font-semibold "
      >
        <span>Browse All Categories</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg border rounded-md p-2 z-50">
          {categories.map((category, index) => (
            <div
              key={index}
              className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 rounded-md transition-all"
              onClick={() => {
                navigate(category.path);
                setIsOpen(false); 
              }}
            >
              {category.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseCategories;
