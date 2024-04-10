async function getNews(){
    
    const response = await fetch('/news.json');

    if (!response.ok){
        const fallbackError = "We cannot display any articles a=right now!";
        const data = await response.json().catch(() => {throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error (errorMessage);
    }
    return await response.json();

} export default getNews;