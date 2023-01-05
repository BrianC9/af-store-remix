export async function getAllPosts(){
    const response = await fetch(`${process.env.API_URL}posts?populate=image`)
    const result = await response.json()
    return result;
}
export async function getPostByURL(url){
    const response = await fetch(`${process.env.API_URL}posts/?filters[url]=${url}&populate=image`)
    const result = await response.json()
    return result;
}