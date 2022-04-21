import { Link, useSearchParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const { data, error, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

    if (loading) {
        return (
            <div className="center">
                <h1>Loading...</h1>;
                <Spinner/>
            </div>
        )    
    }

    if (error !== "") {
        return <h1>{error}</h1>;
    }

    const handleChange = (e) => {
        let filter = e.target.value;
        if (filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
        }
    };

    return (
        <div className="center">
            <h1 className="center">Blog</h1>
            <input type="text" value={searchParams.get("filter") || ""} onChange={handleChange}/>
            {data.filter((item) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = item.title.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                .map((item) => (
                    <h4 key={item.id} className="item">
                        <Link to={`/blog/${item.id}`} className="item">
                            {item.id} - {item.title}
                        </Link>
                    </h4>
                ))}
        </div>
    );
};

export default Blog;