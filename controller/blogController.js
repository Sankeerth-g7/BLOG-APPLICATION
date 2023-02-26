//blog_index,blog_details,blog_create_get,blog_create_post,blog_delete
const Blog = require('../models/blog');



const blog_index = (req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('blogs/index',{title:'All Blogs',blogs:result})
    })
    .catch((err)=>{
        console.log(err)
    })
}


const blog_create_post = (req,res)=>{
    const blog =  new Blog(req.body)
    blog.save()
    .then((result)=>{
        res.redirect('/')
    })
    .catch((err)=>{
        console.log(err)
    })
}

const blog_create_get = (req,res)=>{
    res.render('blogs/create',{title:'Create'})
}

const blog_details = (req,res)=>{
    const id = req.params.id
    console.log(id)
    Blog.findById(id)
    .then((result)=>{
        res.render('blogs/details',{blog:result,title:'Blog details'})
    })
    .catch((err)=>{
        console.log(err)
        res.status(400).render('404.ejs',{title:'Blog Not Found'})
    })
}

const blog_delete = (req,res)=>{
    const id =req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect :'/'})
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports =  {
    blog_index,
    blog_create_post,
    blog_create_get,
    blog_details,
    blog_delete
}