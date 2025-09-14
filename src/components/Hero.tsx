import { Button } from '@/components/ui/button';
import FeatureCard from './FeatureCard';
import heroSentiment from '@/assets/hero-sentiment.jpg';
import heroPrivacy from '@/assets/hero-privacy.jpg';
import heroBarging from '@/assets/hero-barging.jpg';
import heroLearning from '@/assets/hero-learning.jpg';

const Hero = () => {
  const features = [
    {
      title: 'Sentiment Analysis',
      image: heroSentiment,
      position: 'top-20 right-10',
      delay: 0
    },
    {
      title: 'Number Privacy',
      image: heroPrivacy,
      position: 'top-40 left-10',
      delay: 1000
    },
    {
      title: 'Call Barging',
      image: heroBarging,
      position: 'bottom-32 right-20',
      delay: 2000
    },
    {
      title: 'Deep Data Learning',
      image: heroLearning,
      position: 'bottom-20 left-20',
      delay: 3000
    }
  ];

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-coral/5" />
      
      {/* Floating Feature Cards */}
      <div className="absolute inset-0 hidden lg:block">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            image={feature.image}
            className={`absolute ${feature.position} floating-animation`}
            style={{ animationDelay: `${feature.delay}ms` }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-foreground">Empowering Every</span>
            <span className="block text-foreground">Interaction.</span>
            <span className="block bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent mt-4">
              Transforming
            </span>
            <span className="block text-2xl md:text-4xl font-semibold text-primary mt-2">
              Customer Experience
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Advanced communication platform powered by AI to deliver exceptional customer interactions 
            and streamline your business communications.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="lg" className="px-8 py-6 text-lg">
              Start your free trial
            </Button>
            <Button variant="feature" size="lg" className="px-8 py-6 text-lg">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10k+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500M+</div>
            <div className="text-muted-foreground">Calls Processed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-muted-foreground">Countries</div>
          </div>
        </div>
      </div>

      {/* Company Logos */}
      <div className="relative z-10 bg-muted/50 py-12 mt-20">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            <div className="text-lg font-semibold">XYLEM</div>
            <div className="text-lg font-semibold">Indian Navy</div>
            <div className="text-lg font-semibold">RENAULT</div>
            <div className="text-lg font-semibold">CIAL</div>
            <div className="text-lg font-semibold">MALABAR</div>
            <div className="text-lg font-semibold">KSRTC</div>
            <div className="text-lg font-semibold">INDUS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;