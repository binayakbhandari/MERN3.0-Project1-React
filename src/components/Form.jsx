import { Link } from "react-router-dom"

function Form() {
    return (
        <>
            <div class="max-w-4xl mx-auto font-[sans-serif] p-6">
                <div class="text-center mb-16">
                    <Link to="">
                    <img src="https://avatars.githubusercontent.com/u/173297872?v=4" alt="logo" class='w-24 h-24 mb-3 rounded-full shadow-lg inline-block' />
                    </Link>
                    <h4 class="text-gray-800 text-base font-semibold mt-6">Create Your Own Blog</h4>
                </div>

                <form>
                    <div class="grid sm:grid-cols-1 gap-8">
                        <div>
                            <label class="text-gray-800 text-sm mb-2 block">Title</label>
                            <input name="name" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter title" />
                        </div>
                        <div>
                            <label class="text-gray-800 text-sm mb-2 block">Subtitle</label>
                            <input name="subtitle" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter subtitle" />
                        </div>
                        <div>
                            <label class="text-gray-800 text-sm mb-2 block">Description</label>
                            <textarea name="description" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter description" />
                        </div>
                        <div>
                            <label class="text-gray-800 text-sm mb-2 block">Image</label>
                            <input name="image" type="file" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Upload your image" />
                        </div>
                    </div>

                    <div class="!mt-12">
                        <button type="button" class="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                            Edit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form