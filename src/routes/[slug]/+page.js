// src/routes/blog/[slug]/+page.js
export async function load({ params }){
    const post = await import(`../blog/${params.slug}.md`)
    const { title, date } = post.metadata
    const content = post.default;
    const dateStr = await toFriendlyDateStr(date);
  
    return {
      content,
      title,
      dateStr,
    }
  }

async function toFriendlyDateStr(date){
  var parts = date.split("-");
  var dt = new Date(parseInt(parts[0], 10),
                parseInt(parts[1], 10) -1,
                parseInt(parts[2], 10));

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return dt.toLocaleDateString("tr-TR", options);
}