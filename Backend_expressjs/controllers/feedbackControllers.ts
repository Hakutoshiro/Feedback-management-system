type feedback = {name :string ,feedback:string}
let feedbacks : feedback[] = []

export const handleAddFeedback = async (req : any ,res : any) =>{
    const {name,feedback} = req.body;
    feedbacks= await [{name,feedback}, ...feedbacks]
    res.json({name,feedback});
}

export const handleGetFeedbacks = async (req : any ,res : any) =>{
    res.json(feedbacks);
}

