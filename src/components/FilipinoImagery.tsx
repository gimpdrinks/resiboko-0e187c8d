import jeepneyIcon from "@/assets/jeepney-icon.png";
import foodIcon from "@/assets/filipino-food-icon.png";
import purchasesIcon from "@/assets/common-purchases-icon.png";
import { Receipt, Heart, Music, Sparkles, Home, MoreHorizontal } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Category {
  name: string;
  icon: string | LucideIcon;
  color: string;
  type: "image" | "lucide";
  alt?: string;
}

const categories: Category[] = [
  { 
    name: "Transport", 
    icon: jeepneyIcon, 
    color: "blue", 
    type: "image",
    alt: "Jeepney rides and transportation expenses"
  },
  { 
    name: "Food & Dining", 
    icon: foodIcon, 
    color: "green", 
    type: "image",
    alt: "Filipino food and dining expenses"
  },
  { 
    name: "Shopping", 
    icon: purchasesIcon, 
    color: "amber", 
    type: "image",
    alt: "Shopping and purchases"
  },
  { 
    name: "Bills", 
    icon: Receipt, 
    color: "purple", 
    type: "lucide"
  },
  { 
    name: "Healthcare", 
    icon: Heart, 
    color: "red", 
    type: "lucide"
  },
  { 
    name: "Entertainment", 
    icon: Music, 
    color: "pink", 
    type: "lucide"
  },
  { 
    name: "Personal Care", 
    icon: Sparkles, 
    color: "teal", 
    type: "lucide"
  },
  { 
    name: "Home & Living", 
    icon: Home, 
    color: "indigo", 
    type: "lucide"
  },
  { 
    name: "Others", 
    icon: MoreHorizontal, 
    color: "gray", 
    type: "lucide"
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
    gray: "bg-gray-500/10 border-gray-500 hover:bg-gray-500/20",
  };
  return colorMap[color] || colorMap.gray;
};

const getIconColor = (color: string) => {
  const colorMap: Record<string, string> = {
    blue: "text-blue-500",
    green: "text-green-500",
    amber: "text-amber-500",
    purple: "text-purple-500",
    red: "text-red-500",
    pink: "text-pink-500",
    teal: "text-teal-500",
    indigo: "text-indigo-500",
    gray: "text-gray-500",
  };
  return colorMap[color] || colorMap.gray;
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
                {category.type === "image" ? (
                  <img 
                    src={category.icon as string} 
                    alt={category.alt || `${category.name} expenses`}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                    loading="lazy"
                  />
                ) : (
                  (() => {
                    const IconComponent = category.icon as LucideIcon;
                    return (
                      <IconComponent 
                        className={`w-10 h-10 sm:w-12 sm:h-12 ${getIconColor(category.color)}`}
                        aria-label={`${category.name} expenses`}
                      />
                    );
                  })()
                )}
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
