export const useNews = () => {
  // return [
  //     {
  //         title: "S1", body: "CS1"
  //     },
  //     {
  //         title: "S2", body: "CS2"
  //     },
  //     {
  //         title: "S3", body: "CS3"
  //     }
  // ]
  const news = [];
  for (let i = 0; i <= 50; i++) {
    news.push({
      title: "S" + (i + 1),
      body: "CS" + (i + 1),
    });
  }
  return news;
};
