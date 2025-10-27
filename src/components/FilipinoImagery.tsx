import jeepneyIcon from "@/assets/jeepney-icon.png";
import foodIcon from "@/assets/filipino-food-icon.png";
import shoppingIcon from "@/assets/common-purchases-icon.png";
import groceriesIcon from "@/assets/groceries-icon.png";
import utilitiesIcon from "@/assets/utilities-icon.png";
import entertainmentIcon from "@/assets/entertainment-icon.png";
import healthIcon from "@/assets/health-icon.png";
import travelIcon from "@/assets/travel-icon.png";
import rentIcon from "@/assets/rent-icon.png";

interface Category {
  name: string;
  icon: string;
  color: string;
  alt: string;
}

const categories: Category[] = [
  { 
    name: "Food & Drink", 
    icon: foodIcon, 
    color: "green",
    alt: "Filipino food and dining expenses"
  },
  { 
    name: "Groceries", 
    icon: groceriesIcon, 
    color: "amber",
    alt: "Sari-sari store and grocery shopping"
  },
  { 
    name: "Transportation", 
    icon: jeepneyIcon, 
    color: "blue",
    alt: "Jeepney, tricycle and transportation expenses"
  },
  { 
    name: "Shopping", 
    icon: shoppingIcon, 
    color: "pink",
    alt: "Shopping and purchases"
  },
  { 
    name: "Utilities", 
    icon: utilitiesIcon, 
    color: "yellow",
    alt: "Electricity, water, and utility bills"
  },
  { 
    name: "Entertainment", 
    icon: entertainmentIcon, 
    color: "purple",
    alt: "Videoke, leisure and entertainment expenses"
  },
  { 
    name: "Health & Wellness", 
    icon: healthIcon, 
    color: "red",
    alt: "Pharmacy, healthcare and wellness expenses"
  },
  { 
    name: "Travel", 
    icon: travelIcon, 
    color: "teal",
    alt: "Travel and transportation expenses"
  },
  { 
    name: "Rent", 
    icon: rentIcon, 
    color: "indigo",
    alt: "Housing and rent expenses"
  },
];

const getColorClasses = (color: string) => {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-500/10 border-blue-500 hover:bg-blue-500/20",
    green: "bg-green-500/10 border-green-500 hover:bg-green-500/20",
    amber: "bg-amber-500/10 border-amber-500 hover:bg-amber-500/20",
    purple: "bg-purple-500/10 border-purple-500 hover:bg-purple-500/20",
    red: "bg-red-500/10 border-red-500 hover:bg-red-500/20",
    pink: "bg-pink-500/10 border-pink-500 hover:bg-pink-500/20",
    teal: "bg-teal-500/10 border-teal-500 hover:bg-teal-500/20",
    indigo: "bg-indigo-500/10 border-indigo-500 hover:bg-indigo-500/20",
    yellow: "bg-yellow-500/10 border-yellow-500 hover:bg-yellow-500/20",
  };
  return colorMap[color] || colorMap.blue;
};


const FilipinoImagery = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-muted-foreground text-lg">
            Track all your everyday Filipino expenses
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center gap-3">
              <div 
                className={`
                  w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 
                  flex items-center justify-center p-4 
                  transition-all duration-300 ease-in-out
                  hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-xl
                  ${getColorClasses(category.color)}
                `}
              >
                <img 
                  src={category.icon} 
                  alt={category.alt}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground text-center font-medium">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilipinoImagery;
