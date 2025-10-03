import React from 'react';
import CountUp from 'react-countup';
import { Users, Award, Star, Building2 } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-[2rem] h-[2rem] text-orange-500" />,
      value: 1000,
      label: 'Happy Clients',
      suffix: '+'
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      value: 15,
      label: 'Years of Excellence',
      suffix: '+'
    },
    {
      icon: <Star className="w-8 h-8 text-orange-500" />,
      value: 500,
      label: 'Projects Completed',
      suffix: '+'
    },
    {
      icon: <Building2 className="w-8 h-8 text-orange-500" />,
      value: 50,
      label: 'Service Centers',
      suffix: '+'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-[1.5rem] rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-[1rem]">
                {stat.icon}
              </div>
              <div className="text-[2.5rem] font-bold text-orange-500 mb-[0.5rem]">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  suffix={stat.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;