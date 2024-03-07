export async function getTrendingToken(settrending) {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        settrending(data.coins)
    } catch (error) {
        console.error('Error fetching data:', error);
        
    }
}



export async function getTokendata(id,setdata) {
   
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=inr%2Cusd`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
     setdata(data)
       
    } catch (error) {
        console.error('Error fetching data:', error);

    }
}
