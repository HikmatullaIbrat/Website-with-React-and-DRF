import axios from 'axios';
import React, {useState, useEffect} from 'react';
// import category from './Category';
import { Link , useParams} from 'react-router-dom';

function BlogDetail  (props)  {
    const [blog, setBlog] = useState({});
    const params = useParams()
    useEffect(() =>{
        const slug = params.id;
        const fetchData = async () => {
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`);
                setBlog(res.data);
            }
            catch(err){
                
            }
        };
        fetchData();
    }, [params.id]);

    const createBlog = () =>{
        return {__html: blog.content}
    };
    const capitlizeFirstletter = (word) =>{
        if(word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    }

    return (
        <div className="container mt-3">
            <h1 className="display-2">{blog.title}</h1>
            <h2 className="text-muted ht-3">Category: {capitlizeFirstletter(blog.category)}</h2>
            <h4>{blog.day} {blog.month }</h4>
            <div className="mt-5 mb-5" dangerouslySetInnerHTML={createBlog()} />
            <hr />
            <p className="lead mb-5">
                <Link to = "/blogs" className='font-weight-bold'>
                    Back to Blogs
                </Link>
            </p>
        </div>
    );
};

export default BlogDetail;