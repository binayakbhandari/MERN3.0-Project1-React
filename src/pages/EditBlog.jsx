import { Link, useParams, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"


function EditBlog({ type }) {
    const navigate = useNavigate()
    const {id} = useParams()
    // const [data, setData] = useState({
    //     title: "",
    //     subtitle: "",
    //     description: "",
    //     image: ""
    // })
    const [data, setData] =  useState({})
    
    const fetchBlog = async ()=>{
        const response = await axios.get("http://localhost:3000/blog/" + id)
        console.log(response.data.data)
        if(response.status === 200){
            setData(response.data.data)

        }else{
            alert("Something went wrong !")
        }
        
    }
    useEffect(()=>{
        fetchBlog()
    },[])

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: name === "image" ? e.target.files[0] : value
        })
    }

    const editBlog = async (e) => {
        e.preventDefault()
        const response = await axios.patch("http://localhost:3000/blog/" + id, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        if (response.status === 200) {
            navigate("/blog/" + id)
        } else {
            alert("Failed to edit blog !")
        }
    }

    return (
        <>
            <Navbar />
            {/* <Form type="Edit" id={id} /> */}
            
        </>
    )
}

export default EditBlog