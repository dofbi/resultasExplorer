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
                {/* <Search />
                <UserNav /> */}
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
  
              <img
                alt="Candidate 1"
                className="object-cover w-40 h-40"
                height="48"
                src="/img/BDF.png"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48" />
              <h3 className="text-lg font-bold tracking-tight">Bassirou Diomaye Diakher Faye </h3>
              <div>
                <div>Dakar</div>
                <div>Thies</div>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/img/logodk.png" alt="" srcset="" className="w-40" />
              </div>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="Dakar">
                  Dakar
                </TabsTrigger>
                <TabsTrigger value="Thies" disabled>
                  Thies
                </TabsTrigger>
                <TabsTrigger value="Diourbel" disabled>
                  Diourbel
                </TabsTrigger>
                <TabsTrigger value="Fatick" disabled>
                  Fatick
                </TabsTrigger>
                <TabsTrigger value="Kaffrine" disabled>
                  Kaffrine
                </TabsTrigger>
                <TabsTrigger value="Kaolack" disabled>
                  Kaolack
                </TabsTrigger>
                <TabsTrigger value="Kédougou" disabled>
                  Kédougou
                </TabsTrigger>
                <TabsTrigger value="Kolda" disabled>
                  Kolda
                </TabsTrigger>
                <TabsTrigger value="Louga" disabled>
                  Louga
                </TabsTrigger>
                <TabsTrigger value="Matam" disabled>
                  Matam
                </TabsTrigger>
                <TabsTrigger value="Saint-Louis" disabled>
                  Saint-Louis
                </TabsTrigger>
                <TabsTrigger value="Sédhiou" disabled>
                  Sédhiou
                </TabsTrigger>
                <TabsTrigger value="Tambacounda" disabled>
                  Tambacounda
                </TabsTrigger>
                <TabsTrigger value="Ziguinchor" disabled>
                  Ziguinchor
                </TabsTrigger>
  
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3"
                >
                  <Card style={{
                    backgroundColor: '#ffb000',
                  }}>
                    <CardContent>
                      <div className="flex items-center justify-center mt-11">
                        <h1 className="text-bold text-xl text-white">Resultats Provisoires</h1>
                      </div>
  
                    </CardContent>
                  </Card>
                  <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Nombre de Voix
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">45231</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
  
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Pourcentage
                    </CardTitle>
                    <img src="/img/voix.svg"   className="h-20 w-20 text-muted-foreground"  alt="" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">45%</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
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
  