import parser from './parse';

export const getNews = async () => {
	const rss = await parser('https://english.onlinekhabar.com/feed')
	return JSON.stringify(rss, null, 3)
}

// curl -s https://english.onlinekhabar.com/feed  | grep '<title>' | tail -n +3 | cut -d'>' -f2 | cut -d'<' -f1

