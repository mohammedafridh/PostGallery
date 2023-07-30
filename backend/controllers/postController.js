import postModel from "../models/postModel.js";

export const createPost = async(req,res)=>{

    const{image,description} = req.body

    try{
        if(!image && !description){
            throw Error('*Image and description cannot be empty!')
        }else{
            const userId = req.user._id
            const post = await postModel.create({image,description,userId})
            res.status(200).json(post)
        }
    }catch(error){
        res.status(500).json({error:error.message})
    }
}


export const viewSinglePost = async(req,res)=>{
    const id = req.params.id

    const post = await postModel.findById(id)

    try{
        if(!post){
            throw Error('*No such post!')
        }else{
            res.status(200).json(post)
        }
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

export const viewAllPosts = async(req,res)=>{

try{
    const posts  = await postModel.find().sort({createdAt:-1})
    res.status(200).json(posts)
}catch(error){
    res.status(500).json({error:'*Error retreiving posts!'})
}
}

export const viewMyPosts = async (req, res) => {
    const userId = req.user._id;
  
    try {
      const posts = await postModel.find({ userId: userId }).sort({createdAt:-1});
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

export const updatePost = async(req,res)=>{
    const{image,description} = req.body
    const id = req.params.id

    try{
        const post =  await postModel.findByIdAndUpdate(id, req.body, {new:true})
        res.status(200).json(post)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

export const deletePost = async(req,res)=>{
    const id = req.params.id

    try{
        const post = await postModel.findByIdAndDelete(id)
        res.status(200).json('Post deleted successfully')
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

export const likePost = async(req,res)=>{
    const postId = req.params.id
    // const {userId} = req.body
    const userId = req.user._id

    try{
        const post = await postModel.findById(postId)

        if(!post.likes.includes(userId)){
            await post.updateOne({$push:{likes:userId}})
            res.status(200).json('Post Liked!')
        }else{
            await post.updateOne({$pull:{likes:userId}})
            res.status(200).json('Post unliked!')
        }
    }catch(error){
        res.status(500).json({error:error.message})
    }
}