const API_URL = process.env.WP_API_URL;

async function fetchAPI(query, { variables } = {}) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { 'Content-Type': 'application/json' };

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables })
  });

  // error handling work
  const json = await res.json();

  if (json.errors) {
    console.log(json.errors);
    console.log('error details', query, variables);
    throw new Error('Failed to fetch API');
  }

  return json.data;
      
}

export async function getAllPosts(preview) {
  
  return {
   "edges":[
      {
         "node":{
            "id":"cG9zdDoyOA==",
            "date":"2020-07-09T07:18:42",
            "title":"A third post with an interesting name",
            "slug":"a-third-post-with-an-interesting-name",
            "extraPostInfo":{
               "authorExcerpt":"some excerpt details here some excerpt details here some excerpt details here some excerpt details here some excerpt details here some excerpt details here",
               "thumbImage":{
                  "mediaItemUrl":"http://demo.robkendal.co.uk/wp-content/uploads/2020/07/v7jgc6a3zn951.jpg"
               }
            }
         }
      },
       {
         "node":{
            "id":"cG9zdDoyOA==",
            "date":"2020-07-09T07:18:42",
            "title":"A ",
            "slug":"a-",
            "extraPostInfo":{
               "authorExcerpt":"soe",
               "thumbImage":{
                  "mediaItemUrl":"http://demo.robkendal.co.uk/wp-content/uploads/2020/07/v7jgc6a3zn951.jpg"
               }
            }
         }
      },
       {
         "node":{
            "id":"cG9zdDoyOA==",
            "date":"2020-07-09T07:18:42",
            "title":"A third post with an interesting name",
            "slug":"a-third-post-with-an-interesting-name",
            "extraPostInfo":{
               "authorExcerpt":"somre",
               "thumbImage":{
                  "mediaItemUrl":"http://demo.robkendal.co.uk/wp-content/uploads/2020/07/v7jgc6a3zn951.jpg"
               }
            }
         }
      },
       {
         "node":{
            "id":"cG9zdDoyOA==",
            "date":"2020-07-09T07:18:42",
            "title":"A ",
            "slug":"a",
            "extraPostInfo":{
               "authorExcerpt":"some excerpt details here",
               "thumbImage":{
                  "mediaItemUrl":"http://demo.robkendal.co.uk/wp-content/uploads/2020/07/v7jgc6a3zn951.jpg"
               }
            }
         }
      },
      {
         "node":{
            "id":"cG9zdDoyOA==",
            "date":"2020-07-09T07:18:42",
            "title":"A third post with an interesting name",
            "slug":"a-third-post-with-an-interesting-name",
            "extraPostInfo":{
               "authorExcerpt":"some excerpt details here",
               "thumbImage":{
                  "mediaItemUrl":"http://demo.robkendal.co.uk/wp-content/uploads/2020/07/v7jgc6a3zn951.jpg"
               }
            }
         }
      }
   ]
}
}
  

   

export async function getPost(slug) {
  

  return null;
}

export async function getAllPostsWithSlug() {
 
  return null;
}