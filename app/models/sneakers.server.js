export async function getAllSneakers(){
    const response = await fetch(`${process.env.API_URL}sneakers?populate=image`)
    const result = await response.json()
    return result;
}