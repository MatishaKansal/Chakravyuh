import { Shield, AlertTriangle, Activity, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    title: "Threat Level",
    value: "Low",
    subtitle: "All systems secure",
    icon: Shield,
    color: "success",
    glow: "glow-success",
  },
  {
    title: "Active Threats",
    value: "0",
    subtitle: "Blocked today: 23",
    icon: AlertTriangle,
    color: "success",
    glow: "glow-success",
  },
  {
    title: "System Health",
    value: "98%",
    subtitle: "Optimal performance",
    icon: Activity,
    color: "primary",
    glow: "glow-primary",
  },
  {
    title: "Encryption",
    value: "Active",
    subtitle: "AES-256 enabled",
    icon: Lock,
    color: "primary",
    glow: "glow-primary",
  },
];

export const SecurityMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {metrics.map((metric, idx) => (
        <Card key={idx} className={`border-${metric.color}/20 ${metric.glow} transition-all hover:scale-105`}>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${metric.color}/10`}>
                <metric.icon className={`h-6 w-6 text-${metric.color}`} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">{metric.value}</h3>
            <p className="text-sm font-medium text-muted-foreground mb-1">{metric.title}</p>
            <p className="text-xs text-muted-foreground">{metric.subtitle}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
