/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/0ty4XfXvvTa
 */
import { CardTitle, CardDescription, CardHeader, Card, CardContent } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export function Candidats5() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader className="flex flex-col gap-1">
        <CardTitle className="text-2xl">Candidate Dashboard</CardTitle>
        <CardDescription>Essential information about the candidate's performance.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4">
            <CardTitle className="text-base font-medium">Total Votes</CardTitle>
            <CardTitle className="text-3xl font-bold">4,231,921</CardTitle>
          </Card>
          <Card className="p-4">
            <CardTitle className="text-base font-medium">Percentage of Votes</CardTitle>
            <CardTitle className="text-3xl font-bold">47.2%</CardTitle>
          </Card>
        </div>
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-sm font-medium">Votes by Region</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table className="w-full text-sm">
              <TableHeader>
                <TableRow>
                  <TableHead>Region</TableHead>
                  <TableHead>Votes</TableHead>
                  <TableHead>Percentage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Dakar</TableCell>
                  <TableCell>1,231,921</TableCell>
                  <TableCell>29.1%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Thies</TableCell>
                  <TableCell>921,921</TableCell>
                  <TableCell>22.1%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ziguinchor</TableCell>
                  <TableCell>421,921</TableCell>
                  <TableCell>19.1%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Saint-Louis</TableCell>
                  <TableCell>321,921</TableCell>
                  <TableCell>15.1%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tambacounda</TableCell>
                  <TableCell>221,921</TableCell>
                  <TableCell>10.1%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}