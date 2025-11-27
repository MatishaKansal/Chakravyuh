import { AlertTriangle, Shield, Lock, Wifi } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const alerts = [
  {
    type: "info",
    icon: Shield,
    message: "Firewall rule updated",
    time: "2 min ago",
  },
  {
    type: "success",
    icon: Lock,
    message: "Encryption key rotated",
    time: "15 min ago",
  },
  {
    type: "warning",
    icon: AlertTriangle,
    message: "High bandwidth usage detected",
    time: "1 hour ago",
  },
  {
    type: "info",
    icon: Wifi,
    message: "New device connected",
    time: "2 hours ago",
  },
];

export const RecentAlertsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-primary" />
          Recent Alerts
        </CardTitle>
        <CardDescription>System notifications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert, idx) => {
            const Icon = alert.icon;
            const badgeVariant = alert.type === "warning" ? "destructive" : alert.type === "success" ? "default" : "secondary";
            
            return (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 border border-border">
                <div className={`p-2 rounded-lg ${
                  alert.type === "warning" ? "bg-warning/10" : 
                  alert.type === "success" ? "bg-success/10" : 
                  "bg-primary/10"
                }`}>
                  <Icon className={`h-4 w-4 ${
                    alert.type === "warning" ? "text-warning" : 
                    alert.type === "success" ? "text-success" : 
                    "text-primary"
                  }`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{alert.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
