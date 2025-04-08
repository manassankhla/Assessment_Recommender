
import React from "react";
import { Assessment } from "@/data/assessments";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import AssessmentCard from "./AssessmentCard";

interface AssessmentTableProps {
  assessments: Assessment[];
  isLoading: boolean;
}

const AssessmentTable: React.FC<AssessmentTableProps> = ({ assessments, isLoading }) => {
  const isMobile = useIsMobile();

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center py-10">
        <div className="animate-pulse space-y-4 w-full">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-100 rounded-md w-full"></div>
          ))}
        </div>
      </div>
    );
  }

  if (assessments.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        No assessments to display. Try submitting a job description.
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="space-y-4 pt-4">
        {assessments.map((assessment) => (
          <AssessmentCard key={assessment.id} assessment={assessment} />
        ))}
      </div>
    );
  }

  return (
    <Table className="animate-fade-in">
      <TableCaption>List of recommended SHL assessments based on your job description.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[250px]">Assessment Name</TableHead>
          <TableHead>Test Type</TableHead>
          <TableHead className="text-center">Remote Testing</TableHead>
          <TableHead className="text-center">Adaptive/IRT</TableHead>
          <TableHead>Duration</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {assessments.map((assessment) => (
          <TableRow key={assessment.id}>
            <TableCell className="font-medium">
              <a 
                href={assessment.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {assessment.name}
              </a>
            </TableCell>
            <TableCell>
              <Badge variant="outline">{assessment.testType}</Badge>
            </TableCell>
            <TableCell className="text-center">
              {assessment.remoteTestingSupport ? (
                <Check className="inline-block text-green-500" size={20} />
              ) : (
                <X className="inline-block text-red-500" size={20} />
              )}
            </TableCell>
            <TableCell className="text-center">
              {assessment.adaptiveSupport ? (
                <Check className="inline-block text-green-500" size={20} />
              ) : (
                <X className="inline-block text-red-500" size={20} />
              )}
            </TableCell>
            <TableCell>{assessment.duration}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AssessmentTable;
