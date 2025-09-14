import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  image: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCard = ({ title, image, className, style }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "w-48 h-32 card-gradient shadow-feature rounded-xl border border-border/50 overflow-hidden hover:shadow-glow transition-smooth cursor-pointer group",
        className
      )}
      style={style}
    >
      <div className="relative h-full flex items-center justify-center">
        <img 
          src={image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <div className="relative z-10 text-center text-white p-4">
          <h3 className="font-semibold text-sm">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;