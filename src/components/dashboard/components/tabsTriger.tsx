import { TabsTrigger } from "@radix-ui/react-tabs";
import{
TabsList,

} from "@/components/ui/tabs"

  // Utilisez les éléments générés dans votre application React
  export function TabsTriger() {
    const regions = [
        "Dakar",
        "Diourbel",
        "Fatick",
        "Kaffrine",
        "Kédougou",
        "Kaolack",
        "Kolda",
        "Louga",
        "Matam",
        "Saint-Louis",
        "Sédhiou",
        "Tambacounda",
        "Thiès",
        "Ziguinchor"
      ];
      
      const tabs = regions.map((region, index) => {
        return (
          <TabsTrigger key={index} value={`region-${index}`} disabled className="ml-3">
            {region}
          </TabsTrigger>
        );
      });

      return (
         <div>
             <TabsList>
                  {tabs}     
            </TabsList>
             
         </div>
      )
      
  }