import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"

function SingleBlog() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [blog, setBlog] = useState({})
    const fetchSingleBlog = async () => {
        const response = await axios.get("http://localhost:3000/blog/" + id)
        console.log(response.data.data)
        setBlog(response.data.data)
    }
    useEffect(() => {
        fetchSingleBlog()
    }, [])

    const deleteBlog = async ()=>{
        const response = await axios.delete("http://localhost:3000/blog/" + id)
        if(response.status === 200){
            navigate("/")
        }else{
            alert("Failed to delete blog")
        }
    }
    return (
        <>
            <Navbar />
           

        </>
    )
}

export default SingleBlog