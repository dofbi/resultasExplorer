import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const CandidatInfos = (props:any) => {
    return (
        <Card>
        <CardHeader className="flex flex-col items-center space-y-0">
          <img
            alt="Candidate"
            className="rounded-full"
            height="96"
            src={`/img/${props.img}.png`}
            style={{
              aspectRatio: "96/96",
              objectFit: "cover",
            }}
            width="96"
          />
          <CardTitle className="text-xl font-bold">{props.nom}</CardTitle>
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

export default CandidatInfos;