/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/GCLg7TvjnPq
 */
import { CardContent, Card, CardTitle, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Home4() {
  return (
    <div className="grid gap-4 w-full">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Senegal Presidential Election</h1>
        <p className="text-gray-500 dark:text-gray-400">June 15, 2024</p>
      </div>
      <Card>
        <CardContent className="flex flex-col gap-1">
          <div className="flex flex-row items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="text-sm font-medium">Date</div>
            <div className="ml-auto">June 15, 2024</div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <MapPinIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="text-sm font-medium">Location</div>
            <div className="ml-auto">Senegal</div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="text-sm font-medium">Registered Voters</div>
            <div className="ml-auto">5,230,120</div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <CheckCircleIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <div className="text-sm font-medium">Voter Turnout</div>
            <div className="ml-auto">3,810,220 (73%)</div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <CardTitle>Election Results</CardTitle>
          <Button className="ml-auto rounded-full" size="sm" variant="outline">
            Print
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 text-sm md:grid-cols-2">
            <div className="flex flex-row items-center gap-2">
              <div className="font-semibold">Candidate 1</div>
              <div className="ml-auto">2,210,120 votes (58%)</div>
              <div className="w-full max-w-[200px] rounded-lg" />
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="font-semibold">Candidate 2</div>
              <div className="ml-auto">1,600,100 votes (42%)</div>
              <div className="w-full max-w-[200px] rounded-lg" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <CardTitle>Interactive Map</CardTitle>
          <Button className="rounded-full" size="sm" variant="outline">
            View All
            <Maximize2Icon className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="h-[300px]">
          <img
            alt="Map"
            className="aspect-video overflow-hidden rounded-md object-cover object-center"
            height="200"
            src="/placeholder.svg"
            width="400"
          />
        </CardContent>
      </Card>
    </div>
  )
}


function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
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


function CheckCircleIcon(props) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}


function Maximize2Icon(props) {
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
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" x2="14" y1="3" y2="10" />
      <line x1="3" x2="10" y1="21" y2="14" />
    </svg>
  )
}
