
import { Assessment, assessments } from "@/data/assessments";

// Simple similarity function using keyword matching
export const recommendAssessments = (query: string, limit: number = 10): Assessment[] => {
  if (!query || query.trim() === '') {
    return [];
  }
  
  const normalizedQuery = query.toLowerCase();
  
  // Calculate a simple relevance score for each assessment
  const scoredAssessments = assessments.map(assessment => {
    let score = 0;
    
    // Check for keyword matches
    assessment.keywords.forEach(keyword => {
      if (normalizedQuery.includes(keyword.toLowerCase())) {
        score += 10;
      }
    });
    
    // Check for partial matches in description
    if (assessment.description.toLowerCase().split(' ').some(word => 
      normalizedQuery.includes(word.toLowerCase()) && word.length > 3)) {
      score += 5;
    }
    
    // Check for matches in name
    if (assessment.name.toLowerCase().split(' ').some(word => 
      normalizedQuery.includes(word.toLowerCase()) && word.length > 3)) {
      score += 8;
    }
    
    // Check for test type matches
    if (normalizedQuery.includes(assessment.testType.toLowerCase())) {
      score += 15;
    }
    
    return { assessment, score };
  });
  
  // Sort by score and take the top results
  return scoredAssessments
    .sort((a, b) => b.score - a.score)
    .filter(item => item.score > 0)
    .slice(0, limit)
    .map(item => item.assessment);
};

// Function to handle URL input
export const fetchJobDescription = async (url: string): Promise<string> => {
  try {
    // In a real implementation, this would fetch the content from the URL
    // For this demo, we'll simulate a delay and return a mock response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("This is a simulated job description fetched from the provided URL. " +
                "It might include keywords like programming, leadership, and analysis.");
      }, 1500);
    });
  } catch (error) {
    throw new Error("Failed to fetch job description from URL");
  }
};
