import Image from 'next/image';
import Link from 'next/link';


async function getData() {
  const res = await fetch('https://jd.brightbridgeinfotech.com/wp-json/wp/v2/posts?_embed&per_page=4'); 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 

const BlogSection = async () => {

  const posts = await getData()


  return (
    <div className="bg-white py-5 blog-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <div className="main-heading mb-3">JEWELONE Latest Posts</div>
            <Link className="btn btn-outline-dark blog-section_btn" href="/blog" passHref>
              View all
            </Link>
          </div>
        </div>
        <div className="col-12 col-xl-10 m-auto">
          <div className="row">
            {posts.map(post => (
              <div key={post.id} className="col-12 col-lg-6 mb-4 d-flex justify-content-center">
                <div className="position-relative blog-section_item">
                  {post.featured_media && (
                          <Image className="img-fluid" width="585" height="339" src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered}  />
                  )}
                  <div className="position-absolute bottom-0 p-4 text-white">
                    <div className="date mb-3">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    <div className="blog-title mb-3 w-75" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    <Link className="blog-link" href={`/blog-post/${post.slug}`} passHref>
                      Read More <span className="ms-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M18.3033 4.5393L14.8372 0.856724C14.7869 0.804334 14.7269 0.762901 14.6607 0.734497C14.5945 0.706092 14.5235 0.691406 14.4517 0.691406C14.3799 0.691406 14.3089 0.706092 14.2427 0.734497C14.1765 0.762901 14.1165 0.804334 14.0662 0.856724C13.9662 0.967679 13.9106 1.11307 13.9106 1.26401C13.9106 1.41495 13.9662 1.56035 14.0662 1.6713L16.6117 4.36984H0.782639C0.633098 4.36984 0.48968 4.43068 0.383939 4.53889C0.278197 4.6471 0.21875 4.79397 0.21875 4.947C0.21875 5.10004 0.278197 5.2465 0.383939 5.35471C0.48968 5.46292 0.633098 5.52375 0.782639 5.52375H16.6117L14.0662 8.22229C13.9662 8.33325 13.9106 8.47864 13.9106 8.62958C13.9106 8.78052 13.9662 8.92591 14.0662 9.03687C14.1158 9.09043 14.1756 9.13285 14.2419 9.162C14.3082 9.19115 14.3796 9.20633 14.4517 9.20633C14.5238 9.20633 14.5952 9.19115 14.6615 9.162C14.7278 9.13285 14.7876 9.09043 14.8372 9.03687L18.3033 5.35429C18.407 5.24529 18.465 5.09916 18.465 4.947C18.465 4.79485 18.407 4.64831 18.3033 4.5393Z" fill="white"></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
