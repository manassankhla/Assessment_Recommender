
import React, { useState } from "react";
import { 
  getRecommendations, 
  RecommendationResponse, 
  ErrorResponse 
} from "@/api/recommendationApi";
import { toast } from "@/hooks/use-toast";
import JobDescriptionInput from "@/components/JobDescriptionInput";
import AssessmentTable from "@/components/AssessmentTable";
import { Assessment } from "@/data/assessments";

const Index = () => {
  const [recommendations, setRecommendations] = useState<Assessment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = async (input: string, isUrl: boolean) => {
    setIsLoading(true);
    setHasSubmitted(true);
    
    try {
      const result = await getRecommendations({
        ...(isUrl ? { url: input } : { query: input }),
        limit: 10
      });
      
      if ('error' in result) {
        const errorResult = result as ErrorResponse;
        toast.error(errorResult.message);
        setRecommendations([]);
      } else {
        const successResult = result as RecommendationResponse;
        setRecommendations(successResult.recommendations);
        
        if (successResult.recommendations.length === 0) {
          toast.warning("No matching assessments found. Try modifying your job description.");
        } else {
          toast.success(`Found ${successResult.recommendations.length} recommended assessments.`);
        }
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setRecommendations([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-primary">
            SHL Assessment Recommender
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enter a job description or provide a URL to a job posting, and we'll recommend
            the most relevant SHL assessments for your hiring needs.
          </p>
        </header>

        <div className="grid md:grid-cols-12 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-5 lg:col-span-4">
            <JobDescriptionInput 
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
            
            <div className="mt-6 bg-white rounded-md p-4 shadow-sm border text-sm">
              <h3 className="font-medium mb-2">About the Recommender</h3>
              <p className="text-muted-foreground">
                This tool uses natural language processing to match job descriptions with 
                appropriate SHL assessments. Recommendations are sorted by relevance.
              </p>
              <div className="mt-4 pt-4 border-t">
                <h4 className="font-medium text-xs uppercase tracking-wider text-muted-foreground mb-2">API Access</h4>
                <code className="text-xs block bg-gray-50 p-2 rounded overflow-x-auto">
                  GET /api/recommend?query=job+description
                </code>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 lg:col-span-8">
            <div className="bg-white rounded-md shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-4">
                {hasSubmitted 
                  ? `Recommended Assessments (${recommendations.length})` 
                  : "Recommended Assessments"}
              </h2>
              
              <AssessmentTable 
                assessments={recommendations} 
                isLoading={isLoading} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
