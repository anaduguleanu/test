export const useNews = async () => {
  const postsResult = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await postsResult.json();
  return posts;
};
