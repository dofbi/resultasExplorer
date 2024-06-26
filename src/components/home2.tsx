/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/NDMX1e43VWO
 */
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
// import { ResponsiveBar } from "@nivo/bar"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export function Home2() {
  return (
    <div className="grid gap-4 md:gap-8 lg:gap-10 xl:gap-12 min-h-screen w-full">
      <header className="flex items-center px-4 py-2 border-b shrink-0 md:px-6 md:py-3">
        <a className="flex items-center gap-2" href="#">
          <Package2Icon className="w-6 h-6" />
          <span className="sr-only">Acme Inc</span>
        </a>
        <nav className="hidden items-center gap-4 text-sm font-medium md:flex md:gap-5 lg:gap-6">
          <a className="font-bold" href="#">
            Dashboard
          </a>
          <a className="text-gray-500 dark:text-gray-400" href="#">
            Voters
          </a>
          <a className="text-gray-500 dark:text-gray-400" href="#">
            Campaigns
          </a>
          <a className="text-gray-500 dark:text-gray-400" href="#">
            Issues
          </a>
        </nav>
        <div className="flex items-center gap-4 ml-auto">
          <Button className="rounded-full" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-col min-h-[calc(100vh_-_theme(spacing.16))]">
        <div className="grid gap-4 md:gap-8 lg:gap-10 xl:gap-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Presidential Election 2024</h1>
            <p className="text-gray-500 dark:text-gray-400">Live election results and candidate performance</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <img
                  alt="Candidate"
                  className="rounded-full"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <div className="grid gap-1">
                  <CardTitle>Abdoulaye Sow</CardTitle>
                  <CardDescription>Independent</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="text-4xl font-bold">12,345</div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="text-gray-500 dark:text-gray-400">Votes</div>
                  <div className="border-l border-gray-200 dark:border-gray-800 h-6" />
                  <div className="text-gray-500 dark:text-gray-400">25.4% of votes</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <img
                  alt="Candidate"
                  className="rounded-full"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <div className="grid gap-1">
                  <CardTitle>Mariam Diop</CardTitle>
                  <CardDescription>Green Party</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="text-4xl font-bold">9,876</div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="text-gray-500 dark:text-gray-400">Votes</div>
                  <div className="border-l border-gray-200 dark:border-gray-800 h-6" />
                  <div className="text-gray-500 dark:text-gray-400">20.3% of votes</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <img
                  alt="Candidate"
                  className="rounded-full"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <div className="grid gap-1">
                  <CardTitle>Omar Fall</CardTitle>
                  <CardDescription>Democratic Party</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="text-4xl font-bold">18,234</div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="text-gray-500 dark:text-gray-400">Votes</div>
                  <div className="border-l border-gray-200 dark:border-gray-800 h-6" />
                  <div className="text-gray-500 dark:text-gray-400">37.6% of votes</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <img
                  alt="Candidate"
                  className="rounded-full"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <div className="grid gap-1">
                  <CardTitle>Fatou Ndiaye</CardTitle>
                  <CardDescription>Republican Party</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="text-4xl font-bold">6,543</div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="text-gray-500 dark:text-gray-400">Votes</div>
                  <div className="border-l border-gray-200 dark:border-gray-800 h-6" />
                  <div className="text-gray-500 dark:text-gray-400">13.5% of votes</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <UsersIcon className="w-8 h-8" />
                <CardTitle>Registered Voters</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <BarChart className="w-full aspect-[2/1]" /> */}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <ActivityIcon className="w-8 h-8" />
                <CardTitle>Results</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Candidate</TableHead>
                      <TableHead>Votes</TableHead>
                      <TableHead>Percentage</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Abdoulaye Sow</TableCell>
                      <TableCell>12,345</TableCell>
                      <TableCell>25.4%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Mariam Diop</TableCell>
                      <TableCell>9,876</TableCell>
                      <TableCell>20.3%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Omar Fall</TableCell>
                      <TableCell>18,234</TableCell>
                      <TableCell>37.6%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Fatou Ndiaye</TableCell>
                      <TableCell>6,543</TableCell>
                      <TableCell>13.5%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}


function Package2Icon(props: any) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function UsersIcon(props: any) {
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


// function BarChart(props: any) {
//   return (
//     <div {...props}>
//       <div
//         data={[
//           { name: "Jan", count: 111 },
//           { name: "Feb", count: 157 },
//           { name: "Mar", count: 129 },
//           { name: "Apr", count: 150 },
//           { name: "May", count: 119 },
//           { name: "Jun", count: 72 },
//         ]}
//         keys={["count"]}
//         indexBy="name"
//         margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
//         padding={0.3}
//         colors={["#2563eb"]}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickValues: 4,
//           tickPadding: 16,
//         }}
//         gridYValues={4}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//           grid: {
//             line: {
//               stroke: "#f3f4f6",
//             },
//           },
//         }}
//         tooltipLabel={({ id }) => `${id}`}
//         enableLabel={false}
//         role="application"
//         ariaLabel="A bar chart showing data"
//       />
//     </div>
//   )
// }


function ActivityIcon(props: any) {
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}
