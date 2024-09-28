import { useEffect, useState } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import axios from "axios"

function Home() {
    const [blogs,setBlogs] = useState([])
    const fetchBlogs = async ()=>{
        const response = await axios.get("https://mern3-node-ds5t.onrender.com/")
        setBlogs(response.data.data)
    }

    useEffect(()=>{
        fetchBlogs()
    },[])

    console.log(blogs)
    return (
        <>
            <Navbar />
            <div className="flex flex-wrap">
                {
                    blogs.map((blog)=>{
                        return(
                            <Card blog={blog} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home