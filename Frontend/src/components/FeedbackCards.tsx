export default function FeedbackCards({ feedback }: { feedback: { name: string, feedback: string } }) {
    return (
        <div className="h-auto min-h-20 min-w-[380px] w-full max-w-[400px]  mx-auto bg-black rounded-2xl border border-white my-2 px-3 py-3">

            <span className="text-primary text-lg">{feedback.name}</span>
            <br />
            <p className=" opacity-80 ">
                {feedback.feedback}
            </p>
        </div>
    )
}