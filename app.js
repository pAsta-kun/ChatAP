const subreddit = 'APStudents';
const api_url = `https://www.reddit.com/r/${subreddit}/new.json?limit=100`;
let prompt = 'Im going to give you a bunch of information from the r/APStudents subreddit. The information Im giving you will include a question and an answer. Here are the questions and answers. ';

const fetchPosts = async () => {
  let after = '';
  let posts = [];

  for (let i = 1; i < 18; i++) {  // loop through past 1.5 years (18 months)
    const response = await fetch(`${api_url}&after=${after}`);
    const data = await response.json();

    after = data.data.after;
    posts.push(...data.data.children);
  }

  return posts;
};

const fetchComments = async (post) => {
  const response = await fetch(`https://www.reddit.com/comments/${post.data.id}.json`);
  const data = await response.json();
  
  try {
    const comment = data[1].data.children[0].data.body;
    return comment;
  } catch (error) {
    const comment = "No Answer Available";
    return comment;
  }

};

const getPostData = async () => {
  const posts = await fetchPosts();

  for (const post of posts) {
    const postData = {
      title: post.data.title,
      content: post.data.selftext,
      comment: await fetchComments(post)
    };

    prompt += "Question: " + postData.title.replace(/["'\n]+/g, '') + postData.content.substring(0,200).replace(/["'\n]+/g, '') + " Possible Answer: " + postData.comment.replace(/["'\n]+/g, '')
    console.log("{role: \"system\", content: \"" + prompt + "\"},");  // do something with the post data
  }
};

console.log("test")
getPostData();
