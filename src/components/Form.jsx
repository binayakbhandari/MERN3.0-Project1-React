import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Form({ type }) {
    const navigate = useNavigate()
    const [data, setData] = useState({
        title: "",
        subtitle: "",
        description: "",
        image: ""
    })
    const handleChange = (e) => {
        // const value = e.target.value
        // const name = e.target.name 
        const { name, value } = e.target
        setData({
            ...data,
            [name]: name === "image" ? e.target.files[0] : value
        })
    }
    console.log(data)

    const createBlog = async (e)=>{
        e.preventDefault()
        const response = await axios.post("http://localhost:3000/blog",data,{
            headers : {
                "Content-Type" : "multipart/form-data"
            }
        })

        if(response.status === 200){
            navigate("/")
        }else{
            alert("Something went wrong !")
        }
    }

    return (
        <>
            <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
                <div className="text-center mb-16">
                    <Link to="">
                        <img src="https://avatars.githubusercontent.com/u/173297872?v=4" alt="logo" className='w-24 h-24 mb-3 rounded-full shadow-lg inline-block' />
                    </Link>
                    <h4 className="text-gray-800 text-base font-semibold mt-6">{type} Your Own Blog</h4>
                </div>

                <form onSubmit={createBlog}>
                    <div className="grid sm:grid-cols-1 gap-8">
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Title</label>
                            <input name="title" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter title" onChange={handleChange} />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Subtitle</label>
                            <input name="subtitle" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter subtitle" onChange={handleChange} />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Image</label>
                            <input name="image" type="file" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" onChange={handleChange} />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Description</label>
                            <textarea name="description" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter description" onChange={handleChange} />
                        </div>
                    </div>

                    <div className="!mt-12">
                        <button type="submit" className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                            {type}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form