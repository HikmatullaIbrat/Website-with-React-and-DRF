import React, {useState, useEffect} from 'react';
import { Link , useParams} from 'react-router-dom';
import axios from 'axios';
function Category  (props) {
    const [blogs, setBlogs] = useState([]);
    const [currentCategory, setCurrentCategory]= useState('');

    const params = useParams()

    const capitalizeFirstletter = (word) =>{
        if(word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    };

    useEffect(() =>{
        const category = params.id;
        setCurrentCategory(capitalizeFirstletter(category));
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        const fetchData = async () => {
            try{
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category`,
                {category},config);
                setBlogs(res.data);
            }
            catch(err){
                
            }
        };
        fetchData();

    },  [params.id]);
    
    const getCategoryBlogs = () =>{
        let list = [];
        let result = [];

        blogs.map(blogPost =>{
            return list.push(
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">
                        {capitalizeFirstletter(blogPost.category)}
                    </strong>
                    <h3 className="mb-0">{blogPost.title}</h3>
                    <div className="mb-1 text-muted">{blogPost.month} {blogPost.day}</div>
                        <p className="card-text mb-auto">{blogPost.exerpt}</p>
                        <Link to={`/blog/${blogPost.slug}`} className="stretched-link">Continue reading</Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img src={blogPost.thumbnail} alt="thumbnail" width='200' height="250" />
                </div>
            </div>
            );
        });
        for(let i = 0; i< list.length; i += 2){
            result.push(
                <div key={i} className="row mb-2">
                    <div className="col-md-6">
                        {list[i]}
                    </div>
                    <div className="col-md-6">
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div>
            )
        }

        return result;
    };
    return(
        <div className="container mt-3">
        <h3 className="display-4">{currentCategory} Category</h3>
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
                <Link className="p-2 link-secondary" to={`/blogs/category/world`}>World</Link>
                <Link className="p-2 link-secondary" to={`/blogs/category/environment`}>Environment</Link>
                <Link className="p-2 link-secondary" to={`/blogs/category/technology`}>Technology</Link>
                <Link className="p-2 link-secondary" to={`/blogs/category/design`}>Design</Link>
                <Link className="p-2 link-secondary" to={`/blogs/category/culture`}>Culture</Link>
                <Link className="p-2 link-secondary" to={`/blogs/category/business`}>Business</Link>
                <Link className="p-2 link-secondary" to={`/blogs/category/politics`}>Politics</Link>
                <Link className="p-2 link-secondary" to={`/blogs/category/opinion`}>Opinion</Link>
                <Link className="p-2 link-secondary" to={`/blogs/category/science`}>Science</Link>
                <Link className="p-2 link-secondary" to={`/blogs/category/health`}>Health</Link>
                <Link className="p-2 link-secondary" to={`/blogs/category/style`}>Style</Link>
                <Link className="p-2 link-secondary" to={`/blogs/category/travel`}>Travel</Link>
            </nav>
        </div>
        {getCategoryBlogs()}
     </div>
    );
};
    


export default Category;