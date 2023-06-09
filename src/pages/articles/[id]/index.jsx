import { useRouter } from "next/router"

const ArticleId = () => {
    const router = useRouter()
    const { id } = router.query
    
    return (
        <>
            <h2>Article ID Page</h2>
            <p>{id}</p>
        </>
    )
}

export default ArticleId