import apiClient from './client'

const getAll= async() =>{
    
    try{
        const response = await apiClient.get('/news')

        if(response.data.success){
            return response.data.news
        }
    
    }catch(error){
        return []
        console.log('error while geting all news',error.message)
    }
}
const getByCategory= async (category,qty)=>{
    const endpoint=qty ? `/news/${category}/${qty}` : `/news/${category}`

    try{
        const response = await apiClient.get(endpoint)

        if(response.data.success){
            return response.data.news
        }
    
    }catch(error){
        return []
        console.log('error while geting categori news',error.message)
    }
}

export default {
    getAll,
    getByCategory
}