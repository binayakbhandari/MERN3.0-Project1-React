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
        const response = await axios.get("https://mern3-node-ds5t.onrender.com/" + id)
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
        const response = await axios.patch("https://mern3-node-ds5t.onrender.com/" + id, data, {
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
            <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
                <div className="text-center mb-16">
                    <Link to="">
                        <img src="https://avatars.githubusercontent.com/u/173297872?v=4" alt="logo" className='w-24 h-24 mb-3 rounded-full shadow-lg inline-block' />
                    </Link>
                    <h4 className="text-gray-800 text-base font-semibold mt-6">Edit Your Own Blog</h4>
                </div>

                <form onSubmit={editBlog}>
                    <div className="grid sm:grid-cols-1 gap-8">
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Title</label>
                            <input name="title" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter title" onChange={handleChange} value={data.title} />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Subtitle</label>
                            <input name="subtitle" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter subtitle" onChange={handleChange} value={data.subtitle} />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Image</label>
                            <input name="image" type="file" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" onChange={handleChange}  />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Description</label>
                            <textarea name="description" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter description" onChange={handleChange} value={data.description} />
                        </div>
                    </div>

                    <div className="!mt-12">
                        <button type="submit" className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                            Edit Blog
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditBlog