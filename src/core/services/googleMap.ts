import HTTP from "./http";

const GOOGLE_PLACES_API_URL =
  "https://maps.googleapis.com/maps/api/place/autocomplete/json";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY;

export const getLocation = async (search: string) => {
  try {
    const response = await HTTP.get(GOOGLE_PLACES_API_URL, {
      params: {
        input: search,
        key: API_KEY,
        types: "(cities)",
        language: "en",
      },
    });

    // Extract relevant data from the response
    const suggestions = response.data.predictions.map((place: any) => ({
      description: place.description,
      placeId: place.place_id,
    }));

    return suggestions;
  } catch (error) {
    console.error("Error fetching location data:", error);
    throw error;
  }
};
