import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  PhoneCall, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Users, 
  Brain,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Dashboard = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCallActive, setIsCallActive] = useState(false);
  const [conversationLogs, setConversationLogs] = useState([
    {
      id: 1,
      time: '14:30:15',
      caller: '+91-9876543210',
      duration: '3:45',
      status: 'completed',
      sentiment: 'positive',
      transcript: 'Customer inquiry about product features and pricing.'
    },
    {
      id: 2,
      time: '14:15:22',
      caller: '+1-555-0123',
      duration: '7:12',
      status: 'completed',
      sentiment: 'neutral',
      transcript: 'Technical support call regarding software installation.'
    },
    {
      id: 3,
      time: '13:58:07',
      caller: '+91-8765432109',
      duration: '2:30',
      status: 'missed',
      sentiment: 'unknown',
      transcript: 'Call not answered - voicemail left.'
    }
  ]);

  const dashboardFeatures = [
    {
      icon: MessageSquare,
      title: 'Sentiment Analysis',
      description: 'Real-time emotion detection',
      stats: '94% Accuracy',
      color: 'text-green-500'
    },
    {
      icon: Shield,
      title: 'Number Privacy',
      description: 'Secure call routing',
      stats: '100% Protected',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      title: 'Call Barging',
      description: 'Supervisor monitoring',
      stats: '12 Active Sessions',
      color: 'text-purple-500'
    },
    {
      icon: Brain,
      title: 'Deep Data Learning',
      description: 'AI-powered insights',
      stats: '500K+ Analyzed',
      color: 'text-coral'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Performance metrics',
      stats: '+15% This Week',
      color: 'text-primary'
    },
    {
      icon: Phone,
      title: 'Call Management',
      description: 'Advanced telephony',
      stats: '99.9% Uptime',
      color: 'text-orange-500'
    }
  ];

  const handleMakeCall = () => {
    if (phoneNumber.trim()) {
      setIsCallActive(true);
      // Simulate call duration
      setTimeout(() => {
        setIsCallActive(false);
        // Add to conversation logs
        const newLog = {
          id: conversationLogs.length + 1,
          time: new Date().toLocaleTimeString(),
          caller: phoneNumber,
          duration: '0:00',
          status: 'completed',
          sentiment: 'neutral',
          transcript: 'Outbound call initiated from dashboard.'
        };
        setConversationLogs([newLog, ...conversationLogs]);
        setPhoneNumber('');
      }, 3000);
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'bg-green-500';
      case 'negative': return 'bg-red-500';
      case 'neutral': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'missed': return <AlertCircle className="w-4 h-4 text-red-500" />;
      default: return <Clock className="w-4 h-4 text-yellow-500" />;
    }
  };

  return (
    <section id="dashboard" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Interactive <span className="text-primary">Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience our powerful communication platform with real-time controls and insights.
          </p>
        </div>

        {/* Dashboard Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {dashboardFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="card-gradient shadow-card hover:shadow-feature transition-smooth cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-muted/50 ${feature.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      {feature.stats}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Make Call Section */}
          <Card className="card-gradient shadow-feature">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-primary" />
                Make a Call
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="+91-9876543210"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full"
                  disabled={isCallActive}
                />
              </div>
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
            </CardContent>
          </Card>

          {/* Conversation Logs */}
          <Card className="card-gradient shadow-feature">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Conversation Logs
                </span>
                <Badge variant="outline">{conversationLogs.length} Calls</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {conversationLogs.map((log) => (
                  <div key={log.id} className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-smooth">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(log.status)}
                        <span className="font-medium text-sm">{log.caller}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${getSentimentColor(log.sentiment)}`} />
                        <span className="text-xs text-muted-foreground">{log.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span>Duration: {log.duration}</span>
                      <Badge variant="outline" className="text-xs">
                        {log.sentiment}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{log.transcript}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;