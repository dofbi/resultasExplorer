/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/4GiVoDKRpoY
 */
import { CardTitle, CardHeader, CardContent, Card, CardDescription } from "@/components/ui/card"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { ResponsiveBar } from "@nivo/bar"

export function dashboard2() {
  return (
    <div className="flex flex-col h-screen w-full">
      <header className="bg-gray-100 dark:bg-gray-900 p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">Election Dashboard</h1>
        </div>
      </header>
      <section className="flex-1 p-4">
        <div className="container mx-auto grid gap-4">
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="flex items-center gap-2">
                <UsersIcon className="w-5 h-5" />
                <CardTitle className="text">Registered Voters</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-8">
                <div className="text-4xl font-semibold">2,500,000</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5" />
                <CardTitle>Cast Votes</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-8">
                <div className="text-4xl font-semibold">1,200,000</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5" />
                <CardTitle>Remaining Votes</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-8">
                <div className="text-4xl font-semibold">1,300,000</div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4">
            <Card>
              <CardHeader className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar className="w-10 h-10">
                    <AvatarImage alt="Image" src="/placeholder-person.jpg" />
                    <div>AD</div>
                  </Avatar>
                  <div className="flex flex-col">
                    <CardTitle className="text sm:text-base">Adam Davidson</CardTitle>
                    <CardDescription className="text sm:text-sm">Unity Party</CardDescription>
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold">5,000</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar className="w-10 h-10">
                    <AvatarImage alt="Image" src="/placeholder-person.jpg" />
                    <div>JS</div>
                  </Avatar>
                  <div className="flex flex-col">
                    <CardTitle className="text sm:text-base">Jessica Smith</CardTitle>
                    <CardDescription className="text sm:text-sm">Liberty Party</CardDescription>
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold">4,200</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar className="w-10 h-10">
                    <AvatarImage alt="Image" src="/placeholder-person.jpg" />
                    <div>MM</div>
                  </Avatar>
                  <div className="flex flex-col">
                    <CardTitle className="text sm:text-base">Michael Miller</CardTitle>
                    <CardDescription className="text sm:text-sm">Progress Party</CardDescription>
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold">3,800</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar className="w-10 h-10">
                    <AvatarImage alt="Image" src="/placeholder-person.jpg" />
                    <div>CB</div>
                  </Avatar>
                  <div className="flex flex-col">
                    <CardTitle className="text sm:text-base">Christina Brown</CardTitle>
                    <CardDescription className="text sm:text-sm">Hope Party</CardDescription>
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold">2,500</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Avatar className="w-10 h-10">
                    <AvatarImage alt="Image" src="/placeholder-person.jpg" />
                    <div>RP</div>
                  </Avatar>
                  <div className="flex flex-col">
                    <CardTitle className="text sm:text-base">Rachel Parker</CardTitle>
                    <CardDescription className="text sm:text-sm">Future Party</CardDescription>
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold">1,800</CardTitle>
              </CardHeader>
            </Card>
          </div>
          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Vote Distribution</CardTitle>
                <CardDescription>Vote distribution across different regions.</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-8">
                <BarChart className="w-full aspect-[2/1]" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}
