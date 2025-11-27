import { Shield, Activity, Lock, AlertTriangle, Server, Users, Wifi, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThreatDetectionChart } from "@/components/dashboard/ThreatDetectionChart";
import { NetworkActivityChart } from "@/components/dashboard/NetworkActivityChart";
import { SystemStatusCard } from "@/components/dashboard/SystemStatusCard";
import { RecentAlertsCard } from "@/components/dashboard/RecentAlertsCard";
import { SecurityMetrics } from "@/components/dashboard/SecurityMetrics";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Shield className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-gradient">Chakravyuh</h1>
        </div>
        <p className="text-muted-foreground">Security Operations Dashboard</p>
      </header>

      <SecurityMetrics />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ThreatDetectionChart />
        <NetworkActivityChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <SystemStatusCard
          title="Firewall Status"
          icon={Shield}
          status="active"
          description="All traffic filtered"
          metrics={[
            { label: "Blocked Attempts", value: "1,247" },
            { label: "Active Rules", value: "156" },
          ]}
        />
        <SystemStatusCard
          title="Encryption"
          icon={Lock}
          status="active"
          description="AES-256 enabled"
          metrics={[
            { label: "Encrypted Files", value: "12.4K" },
            { label: "Key Rotation", value: "Daily" },
          ]}
        />
        <SystemStatusCard
          title="Network Health"
          icon={Wifi}
          status="active"
          description="All systems operational"
          metrics={[
            { label: "Active Devices", value: "42" },
            { label: "Bandwidth", value: "847 Mbps" },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Active Connections
            </CardTitle>
            <CardDescription>Real-time network connections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { ip: "192.168.1.45", device: "Workstation-01", status: "secure", data: "2.3 MB/s" },
                { ip: "192.168.1.67", device: "Mobile-Unit-03", status: "secure", data: "1.1 MB/s" },
                { ip: "192.168.1.89", device: "Server-Primary", status: "secure", data: "5.7 MB/s" },
                { ip: "192.168.1.103", device: "Tablet-05", status: "secure", data: "0.8 MB/s" },
              ].map((conn, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 border border-border">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                    <div>
                      <p className="font-mono text-sm font-medium">{conn.ip}</p>
                      <p className="text-xs text-muted-foreground">{conn.device}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-sm font-medium">{conn.data}</p>
                    <p className="text-xs text-success">Encrypted</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <RecentAlertsCard />
      </div>
    </div>
  );
};

export default Index;
