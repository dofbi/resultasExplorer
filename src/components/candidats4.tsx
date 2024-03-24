/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/YlwnacNO4Xz
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

export function Candidats4() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="flex flex-col gap-1">
        <CardTitle className="text-2xl">Candidate Dashboard</CardTitle>
        <CardDescription>
          Essential information about the candidate's performance in the 2024 Senegal Presidential Election.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">Total Votes</h2>
            <p className="text-3xl font-bold">1,234,567</p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">Percentage of Votes</h2>
            <p className="text-3xl font-bold">45.6%</p>
          </div>
        </div>
        <Card className="w-full">
          <CardHeader className="flex flex-col gap-1">
            <CardTitle className="text-lg">Votes by Region</CardTitle>
            <CardDescription className="text-xs">Basic breakdown of votes by region.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <MapIcon className="w-4 h-4" />
                  <span>Dakar</span>
                </div>
                <span>345,678</span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <MapIcon className="w-4 h-4" />
                  <span>Thiès</span>
                </div>
                <span>234,567</span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <MapIcon className="w-4 h-4" />
                  <span>Saint-Louis</span>
                </div>
                <span>123,456</span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <MapIcon className="w-4 h-4" />
                  <span>Ziguinchor</span>
                </div>
                <span>98,765</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}


function MapIcon(props: any) {
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
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  )
}
