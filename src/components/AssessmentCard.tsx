
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Assessment } from "@/data/assessments";

interface AssessmentCardProps {
  assessment: Assessment;
}

const AssessmentCard: React.FC<AssessmentCardProps> = ({ assessment }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-2">{assessment.name}</h3>
        
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline">{assessment.testType}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-3.5 w-3.5 mr-1" />
            {assessment.duration}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
          <div className="flex items-center">
            <span className="mr-2">Remote Testing:</span>
            {assessment.remoteTestingSupport ? (
              <Check className="text-green-500" size={16} />
            ) : (
              <X className="text-red-500" size={16} />
            )}
          </div>
          <div className="flex items-center">
            <span className="mr-2">Adaptive:</span>
            {assessment.adaptiveSupport ? (
              <Check className="text-green-500" size={16} />
            ) : (
              <X className="text-red-500" size={16} />
            )}
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground">{assessment.description}</p>
      </CardContent>
      <CardFooter className="bg-muted/50 px-6 py-4">
        <Button 
          asChild 
          className="w-full"
          variant="outline"
          size="sm"
        >
          <a href={assessment.url} target="_blank" rel="noopener noreferrer">
            View Assessment <ExternalLink className="h-3.5 w-3.5 ml-2" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AssessmentCard;
