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
        const response = await axios.post("https://mern3-node-ds5t.onrender.com/blog",data,{
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

                
            </div>
        </>
    )
}

export default Form