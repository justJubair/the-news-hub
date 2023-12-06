export const getSingleNews =async(_id)=>{
    const res = await fetch(`https://the-news-portal-server.vercel.app/news/${_id}`,{
        cache: "no-store"
    })
    return res.json()
}