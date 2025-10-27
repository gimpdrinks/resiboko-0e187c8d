import jeepneyIcon from "@/assets/jeepney-icon.png";
import foodIcon from "@/assets/filipino-food-icon.png";
import purchasesIcon from "@/assets/common-purchases-icon.png";

const FilipinoImagery = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-muted-foreground text-lg">
            Track all your everyday Filipino expenses
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-3">
            <img 
              src={jeepneyIcon} 
              alt="Jeepney rides and transportation expenses" 
              className="w-24 h-24 object-contain"
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground text-center">Transport</p>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <img 
              src={foodIcon} 
              alt="Filipino food and dining expenses" 
              className="w-24 h-24 object-contain"
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground text-center">Food & Dining</p>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <img 
              src={purchasesIcon} 
              alt="Common Filipino purchases and groceries" 
              className="w-24 h-24 object-contain"
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground text-center">Daily Purchases</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilipinoImagery;
