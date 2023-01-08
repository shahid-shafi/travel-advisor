import axios from "axios"

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw, ne) => {
    console.log("RapidAPI-Key", process.env.REACT_APP_TRAVEL_ADVISOR_RAPID_API_KEY)
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw?.lat || 33.96128184675422,
                tr_latitude: ne?.lat || 34.03870051334458,
                bl_longitude: sw?.lng || 73.60895538330081,
                tr_longitude: ne?.lng || 74.39104461669925,
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_TRAVEL_ADVISOR_RAPID_API_KEY,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};