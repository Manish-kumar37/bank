import { Building2, Users, Target, Award, MapPin, Calendar, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { DNAHelixSimple } from './DNAHelix';

export function About() {
  const milestones = [
    { year: '2010', event: 'SENPAI Bank founded in Shanghai' },
    { year: '2013', event: 'Expanded to 50+ branches across China' },
    { year: '2016', event: 'Launched digital banking services' },
    { year: '2019', event: 'Reached 1 million customers milestone' },
    { year: '2022', event: 'Introduced NRI banking services' },
    { year: '2025', event: 'Leading digital bank with 3 million+ customers' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Customer First',
      description: 'We prioritize customer satisfaction and deliver exceptional banking experiences',
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We maintain the highest standards of honesty and ethical conduct',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do',
    },
    {
      icon: Users,
      title: 'Innovation',
      description: 'We embrace innovation to provide cutting-edge banking solutions',
    },
  ];

  const stats = [
    { number: '3M+', label: 'Customers Served' },
    { number: '150+', label: 'Branches' },
    { number: '5000+', label: 'Employees' },
    { number: '15+', label: 'Years of Service' },
  ];

  const leadership = [
    {
      name: 'Zhang Wei',
      position: 'Chairman & CEO',
      description: 'Leading SENPAI Bank with 25+ years of banking experience',
    },
    {
      name: 'Li Ming',
      position: 'Chief Financial Officer',
      description: 'Managing financial operations and strategic investments',
    },
    {
      name: 'Wang Hua',
      position: 'Head of Digital Banking',
      description: 'Driving digital transformation and innovation',
    },
    {
      name: 'Chen Mei',
      position: 'Chief Risk Officer',
      description: 'Ensuring robust risk management and compliance',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl mb-6">About SENPAI Bank</h1>
              <p className="text-xl text-blue-100 mb-6">
                Empowering financial growth through innovative banking solutions and 
                exceptional customer service since 2010.
              </p>
              <p className="text-lg text-blue-100">
                Based in Shanghai, China, we serve millions of customers with a commitment 
                to excellence, integrity, and innovation.
              </p>
            </div>
            <div className="hidden lg:block">
              <DNAHelixSimple />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl text-blue-700 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  To provide innovative, secure, and customer-centric banking solutions 
                  that empower individuals and businesses to achieve their financial goals 
                  and contribute to economic growth.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-blue-700" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  To be the most trusted and preferred banking partner in China, 
                  recognized for excellence in service, innovation in technology, 
                  and commitment to sustainable growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-700" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Calendar className="h-8 w-8 text-blue-700" />
            <h2 className="text-3xl text-gray-900">Our Journey</h2>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl text-blue-700">{milestone.year}</div>
                </div>
                <div className="flex-grow">
                  <div className="h-3 w-3 bg-blue-700 rounded-full mt-2"></div>
                </div>
                <div className="flex-grow">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-gray-700 text-lg">{milestone.event}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals leading our vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-blue-700" />
                  </div>
                  <CardTitle className="text-lg">{leader.name}</CardTitle>
                  <p className="text-sm text-blue-700">{leader.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="h-10 w-10" />
              <h2 className="text-4xl">Visit Us</h2>
            </div>
            <p className="text-xl text-blue-100 mb-4">
              SENPAI Bank Headquarters
            </p>
            <p className="text-lg text-blue-100 mb-8">
              Lujiazui Financial District, Shanghai, China
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors">
              Find Nearest Branch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}