import { FC } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Banner } from '../components/ui/banner';
import heroImage from '../assets/hero-pumps.jpg';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Evolution of Industrial Pumps",
    description: "Discover how industrial pumps have evolved over the decades and what the future holds for this essential technology.",
    date: "2025-09-24",
    image: "/src/assets/hero-pumps.jpg"
  },
  {
    id: 2,
    title: "Maintaining Your Kirloskar Pumps",
    description: "Essential maintenance tips to keep your Kirloskar pumps running efficiently and extend their lifespan.",
    date: "2025-09-20",
    image: "/src/assets/kirloskar-parts.jpg"
  },
  {
    id: 3,
    title: "Understanding Pump Efficiency",
    description: "Learn about the key factors that affect pump efficiency and how to optimize your pumping systems.",
    date: "2025-09-15",
    image: "/src/assets/image.png"
  }
];

const Blog: FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Banner
        title="Blogs"
        subtitle="Stay updated with the latest news and insights from the world of industrial pumps"
        backgroundImage={heroImage}
      />
      <div className="container mx-auto py-[2rem]">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] px-[1rem]">
          {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-[15rem] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader className="space-y-[0.5rem]">
              <CardTitle className="text-[1.25rem] text-gray-800 hover:text-orange-500 transition-colors">
                {post.title}
              </CardTitle>
              <CardDescription className="text-[0.875rem] text-gray-500">
                {new Date(post.date).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[1rem] text-gray-600 leading-[1.6]">{post.description}</p>
            </CardContent>
            <CardFooter className="pt-[1rem]">
              <Button 
                variant="outline" 
                className="w-full hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
