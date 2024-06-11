import axios from "axios"
import { useState } from "react"
export default function FeedbackForm({setFeedbacks}:{setFeedbacks:(data:{name:string , feedback:string}[]) => void}){
    const [name, setName] = useState("")
    const [feedback,setFeedback] = useState("")
    const handleGetFeedbacks = async(ev:any) => {
        ev.preventDefault()
        const {data} = await axios.get<{name:string , feedback:string}[]>('/getFeedbacks')
        setFeedbacks(data)
    }
    
    const handleSubmit = async(ev:any) => {
        ev.preventDefault();
        if(name === "" || feedback === ""){
            window.alert("Please fill all the fields")
            return
        }
        try {
            await axios.post('/addFeedback',{name,feedback})
            setName("")
            setFeedback("")
            handleGetFeedbacks(ev)
            window.alert("Feedback submitted successfully!")
        } catch (error) {
            window.alert("Rate limit implemented. You can only submit feedback once every 10 seconds. Please try again later.")
        }
        
        
        
    }
    
    return (
        <form  className="w-11/12 h-auto flex flex-col items-center justify-center " onSubmit={(ev) => handleSubmit(ev)}>
            <input type="text" className="w-full h-[40px] bg-gray-900 text-white px-4 py-2 my-2 resize-none rounded-xl" placeholder="Name" 
                value={name} onChange={(ev) => setName(ev.target.value)}
            />
            <textarea className="w-full h-[100px] bg-gray-900 text-white px-4 py-2 my-2 resize-none rounded-xl" placeholder="Feedback ..."
                value={feedback} onChange={ev => setFeedback(ev.target.value)}
            ></textarea>
            <button type="submit" className="w-full h-[40px] bg-primary rounded-xl my-2">Submit</button>
        </form>
    )
}