/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/yYEt1WdWDQt
 */


export function CandidatsVote3() {
  return (
    <div className="grid items-start max-w-6xl px-4 mx-auto gap-6">
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
        <div className="grid gap-2">
          <h1 className="font-bold text-3xl lg:text-4xl">Election Results</h1>
          <p className="text-gray-500 dark:text-gray-400">Results for the 2024 Presidential Election</p>
        </div>
        <div className="grid gap-2 md:ml-auto">
          <div className="flex items-center gap-2">
            <UsersIcon className="h-6 w-6" />
            <div className="grid gap-0.5">
              <h2 className="font-semibold text-base">Voters</h2>
              <h2 className="font-semibold text-base">40,000,000</h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="h-6 w-6" />
            <div className="grid gap-0.5">
              <h2 className="font-semibold text-base">Valid Votes</h2>
              <h2 className="font-semibold text-base">39,500,000</h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <XCircleIcon className="h-6 w-6" />
            <div className="grid gap-0.5">
              <h2 className="font-semibold text-base">Invalid Votes</h2>
              <h2 className="font-semibold text-base">500,000</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <h2 className="font-semibold text-xl">Presidential Candidates</h2>
          <p className="text-sm leading-none">
            *Note: The order of the candidates is based on the number of votes received.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <img
                  alt="Candidate"
                  className="aspect-square rounded-full object-cover"
                  height="100"
                  src="/placeholder.svg"
                  width="100"
                />
                <div className="grid gap-0.5">
                  <h3 className="font-bold text-xl">John Smith</h3>
                  <h3 className="font-bold text-xl">Democratic Party</h3>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <TrendingUpIcon className="h-6 w-6" />
                <div className="grid gap-0.5">
                  <h3 className="font-bold text-xl">25,000,000</h3>
                  <h3 className="font-bold text-xl">Votes</h3>
                </div>
              </div>
            </div>
            <div className="h-[1px] bg-gray-200 dark:bg-gray-800" />
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4">
                  <img
                    alt="Candidate"
                    className="aspect-square rounded-full object-cover"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                  />
                  <div className="grid gap-0.5">
                    <h3 className="font-bold text-xl">Emma Johnson</h3>
                    <h3 className="font-bold text-xl">Republican Party</h3>
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <TrendingUpIcon className="h-6 w-6" />
                  <div className="grid gap-0.5">
                    <h3 className="font-bold text-xl">20,000,000</h3>
                    <h3 className="font-bold text-xl">Votes</h3>
                  </div>
                </div>
              </div>
              <div className="h-[1px] bg-gray-200 dark:bg-gray-800" />
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4">
                  <img
                    alt="Candidate"
                    className="aspect-square rounded-full object-cover"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                  />
                  <div className="grid gap-0.5">
                    <h3 className="font-bold text-xl">Michael Williams</h3>
                    <h3 className="font-bold text-xl">Independent</h3>
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <TrendingUpIcon className="h-6 w-6" />
                  <div className="grid gap-0.5">
                    <h3 className="font-bold text-xl">15,000,000</h3>
                    <h3 className="font-bold text-xl">Votes</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function UsersIcon(props:any) {
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


function CheckCircleIcon(props:any) {
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


function XCircleIcon(props:any) {
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
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  )
}


function TrendingUpIcon(props:any) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}
