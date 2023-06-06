import axios, { AxiosResponse } from 'axios';
async function trendingAnimes() {
  const query = `
      query ($page: Int, $perPage: Int) {
          Page(page: $page, perPage: $perPage) {
            pageInfo {
              total
              currentPage
              lastPage
              hasNextPage
              perPage
            }
              media(type: ANIME, sort: TRENDING_DESC) {
                id
                title {
                  romaji
                  english
                }
                description
                format
                startDate {
                  year
                  month
                  day
                }
                coverImage {
                  extraLarge
                }
            }
          }
        }`;

  let variables = {
    page: 1,
    perPage: 11,
  };

  const url = 'https://graphql.anilist.co';
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  try {
    const response: AxiosResponse<any> = await axios.post(url, {
      query,
      variables
    }, options);

    const animes = response.data.data.Page.media;

    for(const anime of animes) {
      const date = new Date(anime.startDate.year, anime.startDate.month - 1, anime.startDate.day);

      const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });

      const regex = /<[^>]*>/g;
      const cleanedString = anime.description.replace(regex, '');
      anime.description = cleanedString
      anime.startDate = formattedDate;
    }
    return animes;
  } catch (error) {
    console.error('GraphQL request error:', error);
    throw ('Internal Server Error');
  }
}

const animesServices = {
  trendingAnimes
}

export default animesServices;