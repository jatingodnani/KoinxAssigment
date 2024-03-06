export async function getTokendata() {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Or handle the error in a different way based on your application's requirements
    }
}
