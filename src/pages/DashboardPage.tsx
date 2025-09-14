import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  Phone, 
  PhoneCall, 
  Users, 
  BarChart3, 
  HeadphonesIcon, 
  Building2, 
  FileText, 
  Code, 
  LayoutDashboard,
  Bell,
  User,
  RefreshCw,
  PhoneIncoming,
  PhoneOutgoing
} from 'lucide-react';

const DashboardPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCallActive, setIsCallActive] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('All Calls');
  const [userActivity, setUserActivity] = useState('Available');

  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Users, label: 'Management' },
    { icon: Phone, label: 'Telephony' },
    { icon: HeadphonesIcon, label: 'Callcenter' },
    { icon: Building2, label: 'CRM' },
    { icon: FileText, label: 'Reports' },
    { icon: Code, label: 'Developer' },
  ];

  const callStats = [
    { title: 'Live Calls', count: 0, color: 'bg-blue-500', incoming: 0, outgoing: 0 },
    { title: 'Connected Calls', count: 0, color: 'bg-green-500', incoming: 0, outgoing: 0 },
    { title: 'Failed Calls', count: 0, color: 'bg-red-500', incoming: 0, outgoing: 0 },
    { title: 'Campaign Calls', count: 0, color: 'bg-cyan-500', incoming: 0, outgoing: 0 },
    { title: 'Total Calls', count: 0, color: 'bg-purple-500', incoming: 0, outgoing: 0 },
  ];

  const agentStatus = [
    { status: 'On Call', count: 0 },
    { status: 'W/A + On Break', count: 0 },
    { status: 'On Hold', count: 0 },
    { status: 'Available', count: 0 },
    { status: 'On Popup', count: 0 },
    { status: 'Total Login', count: 0 },
  ];

  const handleMakeCall = () => {
    if (phoneNumber.trim()) {
      setIsCallActive(true);
      setTimeout(() => {
        setIsCallActive(false);
        setPhoneNumber('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-secondary text-secondary-foreground p-4">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8 p-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">BV</span>
          </div>
          <span className="font-bold text-lg">VOXbay</span>
          <span className="text-coral font-bold">X</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {sidebarItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-smooth ${
                  item.active 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-secondary-foreground/10'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-primary text-primary-foreground p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
                <Menu className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-primary-foreground/80 text-sm">Admin / Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <span>00:00-24:00</span>
              </div>
              <Button variant="secondary" size="sm">Today</Button>
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-secondary-foreground/20">0</Badge>
                <Badge variant="secondary" className="bg-secondary-foreground/20">200</Badge>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
                  <Bell className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20 bg-red-500">
                  <User className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 bg-muted/30">
          <div className="space-y-6">
            {/* Welcome Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Welcome Back !</h2>
              <p className="text-muted-foreground">Here is your summary</p>
            </div>

            {/* Current Call Status */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Current Call Status</h3>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon">
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Calls">Select Department</SelectItem>
                      <SelectItem value="Sales">Sales</SelectItem>
                      <SelectItem value="Support">Support</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="today">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Select DID</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="today">
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">Week</SelectItem>
                      <SelectItem value="month">Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Call Status Cards */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {callStats.map((stat, index) => (
                  <Card key={index} className={`${stat.color} text-white shadow-card`}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Phone className="w-6 h-6" />
                        <span className="text-3xl font-bold">{stat.count}</span>
                      </div>
                      <h4 className="font-semibold mb-3">{stat.title}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span>Incoming</span>
                          <div className="flex items-center gap-2">
                            <span>{stat.incoming}</span>
                            <div className="flex gap-1">
                              <div className="w-4 h-1 bg-white/30 rounded"></div>
                              <PhoneIncoming className="w-4 h-4" />
                              <PhoneOutgoing className="w-4 h-4" />
                            </div>
                            <span>{stat.outgoing}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Outgoing</span>
                          <div className="flex items-center gap-2">
                            <span>{stat.outgoing}</span>
                            <div className="flex gap-1">
                              <div className="w-4 h-1 bg-white/30 rounded"></div>
                              <PhoneIncoming className="w-4 h-4" />
                              <PhoneOutgoing className="w-4 h-4" />
                            </div>
                            <span>{stat.outgoing}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Make Call Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <PhoneCall className="w-5 h-5 text-primary" />
                    Make a Call
                  </h3>
                  <div className="space-y-4">
                    <Input
                      type="tel"
                      placeholder="+91-9876543210"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full"
                      disabled={isCallActive}
                    />
                    <Button 
                      onClick={handleMakeCall}
                      disabled={!phoneNumber.trim() || isCallActive}
                      variant={isCallActive ? "destructive" : "coral"}
                      className="w-full"
                    >
                      {isCallActive ? (
                        <>
                          <Phone className="w-4 h-4 animate-pulse" />
                          Calling... ({phoneNumber})
                        </>
                      ) : (
                        <>
                          <PhoneCall className="w-4 h-4" />
                          Make Call
                        </>
                      )}
                    </Button>
                    {isCallActive && (
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                        <div className="pulse-glow w-16 h-16 bg-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                          <Phone className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <p className="text-sm font-medium">Call in progress...</p>
                        <p className="text-xs text-muted-foreground">Connected to {phoneNumber}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* User Activity */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">User Activity</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Select value={userActivity} onValueChange={setUserActivity}>
                        <SelectTrigger className="flex-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Available">Available</SelectItem>
                          <SelectItem value="Busy">Busy</SelectItem>
                          <SelectItem value="Break">On Break</SelectItem>
                          <SelectItem value="Offline">Offline</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select defaultValue="all">
                        <SelectTrigger className="flex-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Select department</SelectItem>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="support">Support</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select defaultValue="all">
                        <SelectTrigger className="flex-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Calls</SelectItem>
                          <SelectItem value="incoming">Incoming</SelectItem>
                          <SelectItem value="outgoing">Outgoing</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="ghost" size="icon">
                        <RefreshCw className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Agent Status */}
            <div className="flex items-center justify-center gap-8 py-4">
              {agentStatus.map((agent, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary">{agent.status}</div>
                  <div className="text-3xl font-bold">{agent.count}</div>
                </div>
              ))}
            </div>

            {/* No Data Found */}
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <div className="w-24 h-24 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                <BarChart3 className="w-12 h-12" />
              </div>
              <p className="text-lg font-medium">No Data Found</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;