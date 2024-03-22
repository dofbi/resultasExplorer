/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/hFmZ53UX6f7
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

export function CandidatsVote() {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl">Election Results</CardTitle>
        <CardDescription>Results by candidate</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-3 items-start gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-full overflow-hidden border w-12 h-12">
              <img
                alt="Candidate 1"
                className="object-cover w-full h-full"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
            </div>
            <div className="grid gap-1.5">
              <div className="font-semibold">Candidate 1</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Description for Candidate 1</div>
            </div>
          </div>
          <div className="grid gap-1.5">
            <div className="font-semibold">Votes</div>
            <div className="text-2xl font-bold">12,345</div>
          </div>
          <div className="grid gap-1.5">
            <div className="font-semibold">Percentage</div>
            <div className="text-2xl font-bold">33.3%</div>
          </div>
        </div>
        <div className="grid grid-cols-3 items-start gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-full overflow-hidden border w-12 h-12">
              <img
                alt="Candidate 2"
                className="object-cover w-full h-full"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
            </div>
            <div className="grid gap-1.5">
              <div className="font-semibold">Candidate 2</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Description for Candidate 2</div>
            </div>
          </div>
          <div className="grid gap-1.5">
            <div className="font-semibold">Votes</div>
            <div className="text-2xl font-bold">9,876</div>
          </div>
          <div className="grid gap-1.5">
            <div className="font-semibold">Percentage</div>
            <div className="text-2xl font-bold">26.7%</div>
          </div>
        </div>
        <div className="grid grid-cols-3 items-start gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-full overflow-hidden border w-12 h-12">
              <img
                alt="Candidate 3"
                className="object-cover w-full h-full"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
            </div>
            <div className="grid gap-1.5">
              <div className="font-semibold">Candidate 3</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Description for Candidate 3</div>
            </div>
          </div>
          <div className="grid gap-1.5">
            <div className="font-semibold">Votes</div>
            <div className="text-2xl font-bold">8,765</div>
          </div>
          <div className="grid gap-1.5">
            <div className="font-semibold">Percentage</div>
            <div className="text-2xl font-bold">23.7%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}