import Overview2 from "../dashboard/components/overview2";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function ChartRegional() {
    
    return (
        
         <div className="grid  md:grid-cols-1 lg:grid-cols-1">
            <Card >
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <Overview2 />
                    </CardContent>
            </Card>
           
                
            </div>
    )

}
