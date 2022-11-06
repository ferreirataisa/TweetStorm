import { cutText, tweetStorm } from './app';

describe('Testando a aplicação Typescript - TweetStorm', () => {
  test('Se a função "cutText" está definida na aplicação', () => {
    expect(cutText).toBeDefined();
  });

  test('Se a função "tweetStorm" está definida na aplicação', () => {
    expect(tweetStorm).toBeDefined();
  });

  test('Se o parâmetro "text" da função "cutText" está sendo recebido corretamente', () => {
    const testing = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

    expect(testing).toHaveLength(74);
  });

  test('Se a função "tweetStorm", ao receber um texto longo, faz a paginação correta e divide o texto em tweets', () => {
    const testing = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was in the 1960s with the release of sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like PageMaker including versions of Lorem Ipsum."

    const finalTweets = [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever s 1/4",
      'ince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv 2/4',
      'e centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was in the 1960s with the release of shee 3/4',
      'ts containing Lorem Ipsum passages, and more recently with desktop publishing software like PageMaker including versions of Lorem Ipsum. 4/4'
    ]

    expect(tweetStorm(testing)).toEqual(finalTweets);
  });  
});
