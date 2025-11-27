import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface SystemStatusCardProps {
  title: string;
  icon: LucideIcon;
  status: "active" | "warning" | "error";
  description: string;
  metrics: Array<{ label: string; value: string }>;
}

export const SystemStatusCard = ({ title, icon: Icon, status, description, metrics }: SystemStatusCardProps) => {
  const statusColors = {
    active: "success",
    warning: "warning",
    error: "destructive",
  };

  const statusColor = statusColors[status];

  return (
    <Card className={`border-${statusColor}/20 transition-all hover:scale-105`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Icon className={`h-5 w-5 text-${statusColor}`} />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <div className={`h-2 w-2 rounded-full bg-${statusColor} animate-pulse`} />
          <span className={`text-sm font-medium text-${statusColor}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
        <div className="space-y-2">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">{metric.label}</span>
              <span className="font-mono text-sm font-medium">{metric.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
