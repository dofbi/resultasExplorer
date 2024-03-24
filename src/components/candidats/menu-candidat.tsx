
import { } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function MenuCandidat() {
  return (
    <>
      <div className="bg-white p-4 shadow-lg rounded-lg flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          
        <img
                alt=""
                className="object-cover w-40 h-40"
                height="48"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48" />
        
          <div className="bg-blue-500 text-white py-2 px-4 rounded-full">Bassirou Diomaye FAYE</div>
        </div>
        <div className="grid grid-cols-4 gap-4 p-4 bg-purple-200 rounded-lg w-96" >
          <Button className="bg-purple-500 text-white py-2 px-4 rounded-full">Dakar</Button>
          <Button className="bg-purple-500 text-white py-2 px-4 rounded-full">Thiès</Button>
          <Button className="bg-purple-500 text-white py-2 px-4 rounded-full">Diourbel</Button>
          <Button className="bg-purple-500 text-white py-2 px-4 rounded-full">Fatick</Button>
          <Button className="bg-purple-500 text-white py-2 px-4 rounded-full">Kaffrine</Button>
          <Button className="bg-purple-500 text-white py-2 px-4 rounded-full">Kaolack</Button>
          <Button className="bg-purple-500 text-white py-2 px-4 rounded-full">Kédougou</Button>
          <Button className="bg-purple-500 text-white py-2 px-4 rounded-full">Kolda</Button>
          <Button className="bg-purple-500 text-white py-2 px-4 rounded-full">Louga</Button>
          <Button className="bg-purple-500 text-white py-2 px-4 rounded-full">Matam</Button>
          <Button className="bg-purple-500 text-white py-2 px-4 rounded-full">Saint-Louis</Button>
          <Button className="bg-purple-500 text-white py-2 px-4 rounded-full">Sédhiou</Button>
          <Button className="col-span-2 bg-purple-500 text-white py-2 px-4 rounded-full">Tambacounda</Button>
          <Button className="col-span-2 bg-purple-500 text-white py-2 px-4 rounded-full">Ziguinchor</Button>
        </div>
        <div className="flex items-center space-x-3">
        <img
                alt="Candidate 1"
                className="object-cover"
                
                src="/img/logodk.png"
               
                width="100"  />
        </div>
      </div>
    
    </>
  )
}


function TvIcon(props:any) {
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
      <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
      <polyline points="17 2 12 7 7 2" />
    </svg>
  )
}


function VoteIcon(props:any) {
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
      <path d="m9 12 2 2 4-4" />
      <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
      <path d="M22 19H2" />
    </svg>
  )
}


function PercentIcon(props:any) {
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
      <line x1="19" x2="5" y1="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  )
}