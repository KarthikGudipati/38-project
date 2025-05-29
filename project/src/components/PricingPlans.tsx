
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export const PricingPlans = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      period: "per month",
      description: "Perfect for getting started",
      features: [
        "10 video analyses per month",
        "Basic hashtag suggestions",
        "Standard support",
        "Export results"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "Most popular for content creators",
      features: [
        "Unlimited video analyses",
        "Advanced AI suggestions",
        "Priority support",
        "Custom branding",
        "Analytics dashboard",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "per month",
      description: "For teams and agencies",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Advanced analytics"
      ],
      popular: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {plans.map((plan, index) => (
        <Card 
          key={plan.name} 
          className={`relative ${plan.popular ? 'border-emerald-500 border-2' : 'border-gray-200'}`}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
          )}
          
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{plan.name}</CardTitle>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-emerald-600">
                {plan.price}
                <span className="text-lg text-gray-500 font-normal">/{plan.period.split(' ')[1]}</span>
              </div>
              <CardDescription>{plan.description}</CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          
          <CardFooter>
            <Button 
              className={`w-full ${plan.popular ? 'primary-btn' : 'secondary-btn'}`}
            >
              Get Started
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
