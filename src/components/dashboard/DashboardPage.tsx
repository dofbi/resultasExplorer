import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
  } from "@/components/ui/card";
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
  } from "@/components/ui/tabs";
  import { MainNav } from "@/components/dashboard/components/main-nav";
  import { Overview } from "@/components/dashboard/components/overview";
  import { RecentSales } from "@/components/dashboard/components/recent-sales";
  import { Search } from "@/components/dashboard/components/search";
  import TeamSwitcher from "@/components/dashboard/components/team-switcher";
  import { UserNav } from "@/components/dashboard/components/user-nav";
  import {HeaderComponent} from "@/components/dashboard/components/header-component";
  import {CardResultat} from '@/components/dashboard/components/card-resultat';
  
  
  
  export function DashboardPage() {
    return (
      <>
        <img src="/img/Banniere_VOTE.png" />
        <div className="flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              
  
              <TeamSwitcher className="w-47" />
              <MainNav className="mx-6" />
             
              <div className="ml-auto flex items-center space-x-4">
                
              </div>
            </div>
          </div>
          <div >
          <HeaderComponent  className="w-47"  />
          </div>
          <div className="flex-1 space-y-4 p-8 pt-6">
          
            <Tabs defaultValue="overview" className="space-y-4 h-20">
         
              <TabsContent value="overview" className="space-y-2 " >
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3"
                >
                 
                 <div key="1" className="max-w-15 p-4 bg-white rounded-lg shadow-md " 
                 style={{
                      backgroundColor : "#ffb000",
                      
                 }}
                 >
                    <div className="flex justify-between">
                      <div>

                        <h2 className="text-lg font-semibold text-white pt-7 text-center">Résultats provisoires</h2>
                      
                    
                      </div>
                    
                    
                    </div>
                  </div>
                  <div key="1" className="max-w-15 p-4 bg-white rounded-lg shadow-md">
                    <div className="flex justify-between">
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900">Nombre de Voix</h2>
                        <p className="text-3xl font-bold text-gray-900">45231</p>
                    
                      </div>
                      <img src="/img/vote.svg" alt=""     width="75"   />
                    
                    </div>
                  </div>
                  <div key="1" className="max-w-15 p-4 bg-white rounded-lg shadow-md">
                    <div className="flex justify-between">
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900">Pourcentage</h2>
                        <p className="text-3xl font-bold text-gray-900">60%</p>
                    
                      </div>
                      <img src="/img/voix.svg" alt=""     width="90"   />
                    
                    </div>
                  </div>
                 
  
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Régions</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <Overview />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Recent Sales</CardTitle>
                      <CardDescription>
                        You made 265 sales this month.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentSales />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </>
    );
  }
  