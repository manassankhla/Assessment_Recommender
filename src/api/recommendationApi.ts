
import { Assessment } from "@/data/assessments";
import { recommendAssessments, fetchJobDescription } from "@/utils/recommendationEngine";

// Interface for the recommendation request
export interface RecommendationRequest {
  query?: string;
  url?: string;
  limit?: number;
}

// Interface for the recommendation response
export interface RecommendationResponse {
  recommendations: Assessment[];
  query: string;
  timestamp: string;
  count: number;
}

// Interface for errors
export interface ErrorResponse {
  error: string;
  message: string;
}

// API function to get recommendations
export const getRecommendations = async (
  request: RecommendationRequest
): Promise<RecommendationResponse | ErrorResponse> => {
  try {
    let query = request.query || "";
    const limit = request.limit || 10;

    // If URL is provided, fetch job description from URL
    if (request.url && request.url.trim() !== "") {
      try {
        const jobDescription = await fetchJobDescription(request.url);
        query = jobDescription;
      } catch (error) {
        return {
          error: "URL_FETCH_ERROR",
          message: "Failed to fetch job description from the provided URL"
        };
      }
    }

    // Check if query is empty after all processing
    if (!query || query.trim() === "") {
      return {
        error: "EMPTY_QUERY",
        message: "Please provide a job description or a valid URL"
      };
    }

    // Get recommendations
    const recommendations = recommendAssessments(query, limit);

    return {
      recommendations,
      query,
      timestamp: new Date().toISOString(),
      count: recommendations.length
    };
  } catch (error) {
    return {
      error: "PROCESSING_ERROR",
      message: "An error occurred while processing your request"
    };
  }
};
