/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/b5MZ3g9NDuw
 */
import { CardTitle, CardDescription, CardContent, CardFooter, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export function Home() {
  return (
    <div className="grid gap-4 md:gap-8 lg:gap-12 xl:gap-16 min-h-screen w-full">
      <header className="flex flex-col items-center gap-2 py-6 text-center md:py-10 md:gap-4">
        <div className="flex items-center gap-2">
          <PackageIcon className="w-8 h-8" />
          <ChevronRightIcon className="w-6 h-6 opacity-25" />
          <FlagIcon className="w-8 h-8" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">Senegal Presidential Election</h1>
          <p className="text-sm tracking-wide sm:text-base">Candidate Performance Dashboard</p>
        </div>
      </header>
      <div className="grid gap-8 px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Election Results</h2>
          <p className="text-sm leading-none text-gray-500 md:text-base dark:text-gray-400">
            Last updated 2 minutes ago
          </p>
        </div>
        <div className="grid gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Total Votes</h2>
            <div className="grid gap-2 md:grid-cols-2">
              <Card>
                <CardContent className="flex flex-col items-center gap-2">
                  <UserIcon className="w-10 h-10 rounded-full bg-gray-100 p-2 dark:bg-gray-800/50" />
                  <CardTitle className="text-xl font-bold">Mamadou</CardTitle>
                  <CardDescription className="text-sm">Independent</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col gap-1">
                  <h3 className="font-semibold">Votes</h3>
                  <p className="text-4xl font-bold tracking-tighter">5,231,231</p>
                  <div />
                  <p className="text-sm text-center">35% of total votes</p>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center gap-2">
                  <User2Icon className="w-10 h-10 rounded-full bg-gray-100 p-2 dark:bg-gray-800/50" />
                  <CardTitle className="text-xl font-bold">Seydou</CardTitle>
                  <CardDescription className="text-sm">Democratic Party</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col gap-1">
                  <h3 className="font-semibold">Votes</h3>
                  <p className="text-4xl font-bold tracking-tighter">4,231,231</p>
                  <div />
                  <p className="text-sm text-center">30% of total votes</p>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Top Regions</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Region</TableHead>
                    <TableHead className="text-right">Votes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Dakar</TableCell>
                    <TableCell className="text-right">2,123,231</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Thies</TableCell>
                    <TableCell className="text-right">1,123,231</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ziguinchor</TableCell>
                    <TableCell className="text-right">1,023,231</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Saint-Louis</TableCell>
                    <TableCell className="text-right">923,231</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Tambacounda</TableCell>
                    <TableCell className="text-right">823,231</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function PackageIcon(props) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function FlagIcon(props) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function User2Icon(props) {
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
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  )
}
