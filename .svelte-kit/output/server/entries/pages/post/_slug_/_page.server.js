import { p as posts } from "../../../../chunks/posts.js";
import { e as error } from "../../../../chunks/index.js";
const prerender = false;
async function load({ params }) {
  const { slug } = params;
  const post = posts.find((post2) => slug === post2.slug);
  if (!post) {
    throw error(404, "Post not found");
  }
  return {
    post
  };
}
export {
  load,
  prerender
};
