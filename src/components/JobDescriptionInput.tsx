import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface JobDescriptionInputProps {
  onSubmit: (query: string, isUrl: boolean) => void;
  isLoading: boolean;
}

const JobDescriptionInput: React.FC<JobDescriptionInputProps> = ({ onSubmit, isLoading }) => {
  const [tabValue, setTabValue] = useState("text");
  const [textInput, setTextInput] = useState("");
  const [urlInput, setUrlInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (tabValue === "text") {
      if (!textInput.trim()) {
        toast.error("Please enter a job description.");
        return;
      }
      onSubmit(textInput, false);
    } else {
      if (!urlInput.trim()) {
        toast.error("Please enter a valid URL.");
        return;
      }
      
      try {
        new URL(urlInput); // Validate URL format
        onSubmit(urlInput, true);
      } catch (e) {
        toast.error("Please enter a valid URL format.");
      }
    }
  };

  return (
    <Card className="w-full shadow-md">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit}>
          <Tabs
            defaultValue="text"
            value={tabValue}
            onValueChange={setTabValue}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="text">Job Description</TabsTrigger>
              <TabsTrigger value="url">Job URL</TabsTrigger>
            </TabsList>
            
            <TabsContent value="text" className="mt-0">
              <div className="space-y-4">
                <Textarea
                  placeholder="Paste job description here..."
                  className="min-h-[200px] text-base"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                />
                <div className="text-xs text-muted-foreground">
                  Enter a detailed job description to get the most relevant assessment recommendations.
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="url" className="mt-0">
              <div className="space-y-4">
                <Input
                  type="url"
                  placeholder="https://example.com/job-posting"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                />
                <div className="text-xs text-muted-foreground">
                  Enter a URL to a job posting. The system will extract the job description automatically.
                </div>
              </div>
            </TabsContent>
            
            <div className="mt-6">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Getting Recommendations...
                  </>
                ) : (
                  "Get Assessment Recommendations"
                )}
              </Button>
            </div>
          </Tabs>
        </form>
      </CardContent>
    </Card>
  );
};

export default JobDescriptionInput;
