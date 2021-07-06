import axios from "axios";

export const getGif = async ( category ) => {
    const URL = 'https://api.giphy.com/v1/gifs/search'
    const { data } = await axios({
        url: URL,
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            limit: 10,
            q: category
        }
    })

    return data.data.map( gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url,
            username: gif.username ? gif.username : 'Anonymous',
            user_avatar: gif?.user?.avatar_url ? gif?.user?.avatar_url : void 0,
            user_profile: gif?.user?.profile_url,
            date: gif.import_dateTime
        }
    })
}
