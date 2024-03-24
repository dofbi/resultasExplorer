import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const  candidatInfos = (props:any)=>{
    return (
        <Card>
        <CardHeader className="flex flex-col items-center space-y-0">
          <img
            alt="Candidate"
            className="rounded-full"
            height="96"
            src="/placeholder.svg"
            style={{
              aspectRatio: "96/96",
              objectFit: "cover",
            }}
            width="96"
          />
          <CardTitle className="text-xl font-bold">Mamadou Sall</CardTitle>
          <CardDescription className="text-sm font-medium">Independent</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-2">
          <div className="grid gap-0.5 text-center">
            <h3 className="text-sm font-medium tracking-wider uppercase">Total Votes</h3>
            <p className="text-2xl font-semibold">1,234,567</p>
          </div>
          <div className="grid gap-0.5 text-center">
            <h3 className="text-sm font-medium tracking-wider uppercase">Percentage</h3>
            <p className="text-2xl font-semibold">25.4%</p>
          </div>
        </CardContent>
      </Card>
    )
}
export default candidatInfos;