export function cutText(text: string[], max: number): string {
  let newText: string = '';

  text.length < 140 - max
    ? (newText = text.splice(0, text.length).join(''))
    : (newText = text.splice(0, max).join(''));

  return newText;
}

export function tweetStorm(text: string): string[] {
  const numberOfPages: number = Number(Math.ceil(text.length / 140).toFixed(0));

  const arrayText: string[] = text.split('');

  let tweets: string[] = [];

  for (let page = 1; page < numberOfPages + 1; page += 1) {
    let tweet: string = '';
    let pagination: string = `${page}/${numberOfPages}`;

    tweet = cutText(arrayText, 140 - pagination.length);

    const tweetWithPagination: string = `${tweet} ${pagination}`;

    tweets.push(tweetWithPagination);
  }

  return tweets;
}

const testing: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was in the 1960s with the release of sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like PageMaker including versions of Lorem Ipsum."

console.log(tweetStorm(testing));
