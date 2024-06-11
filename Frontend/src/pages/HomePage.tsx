import { useState } from "react"
import FeedbackForm from "../components/FeedbackForm"
import axios from "axios"
import FeedbackCards from "../components/FeedbackCards"


export default function HomePage(){
    const [disp,setDisp] = useState(0)
    const [disp2 ,setDisp2] = useState(0)
    const [feedbacks,setFeedbacks] = useState<{name:string , feedback:string}[]>([])
    const handleGetFeedbacks = async(ev:any) => {
        ev.preventDefault()
        const {data} = await axios.get<{name:string , feedback:string}[]>('/getFeedbacks')
        setFeedbacks(data)
        setDisp(disp === 1 ? 0 : 1)
    }
    return (
        <div className="bg-gray-900 min-h-screen h-auto w-full text-white  py-20">
            <div className="h-auto min-h-60 min-w-[380px] w-2/3 max-w-[400px]  mx-auto  border border-white rounded-2xl overflow-hidden flex flex-col items-center justify-center bg-black">
                <button 
                onClick={() => setDisp2(1)}
                className="text-primary w-9/12 h-[40px] py-2 my-2 hover:text-white hover:bg-primary  hover:bg-opacity-50 rounded-2xl">
                    Submit New Feedback
                </button>
                {disp2 === 1 && (
                    <FeedbackForm setFeedbacks={setFeedbacks} />
                )}
                <button 
                onClick={(ev) => handleGetFeedbacks(ev)}
                className="text-primary w-9/12 h-[40px] py-2 my-2 hover:text-white hover:bg-primary  hover:bg-opacity-50 rounded-2xl">
                    {disp == 1 ?"Hide Feedbacks" : "Retriew Feedbacks"}
                </button>
            </div>
            {
                disp === 1 && (
                    <div className="h-auto  min-w-[380px] w-2/3 max-w-[400px]  mx-auto">
                        {feedbacks.map((feedback,index) =>{
                            return(
                                <FeedbackCards feedback={feedback} key={index}/>
                            )
                        })}
                        </div>
                )
            }
        </div>
    )
}