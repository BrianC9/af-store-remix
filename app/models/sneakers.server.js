export async function getAllSneakers(){
    const response = await fetch(`${process.env.API_URL}sneakers?populate=image`)
    const result = await response.json()
    return result;
}

export async function getSneakerByURL(url){
    const response = await fetch(`${process.env.API_URL}sneakers/?filters[url]=${url}&populate=image`)
    const result = await response.json()
    return result;
}