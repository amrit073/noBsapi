import parser from './parse';

var escapeChars = { lt: '<', gt: '>', quot: '"', apos: "'", amp: '&' };

function unescapeHTML(str: string) {//modified from underscore.string and string.js
	return str.replace(/\&([^;]+);/g, function(entity: string, entityCode: keyof typeof escapeChars) {
		var match;

		if (entityCode in escapeChars) {
			return escapeChars[entityCode];
		} else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
			return String.fromCharCode(parseInt(match[1], 16));
		} else if (match = entityCode.match(/^#(\d+)$/)) {
			return String.fromCharCode(~~match[1]);
		} else {
			return entity;
		}
	});
}

export const getNews = async () => {
	const rss = await parser('https://english.onlinekhabar.com/feed')
	var titles: string = '';
	rss?.items.forEach(e => {
		titles = titles + `${e.title}\n`;
	})
	return unescapeHTML(titles);
}
// curl -s https://english.onlinekhabar.com/feed  | grep '<title>' | tail -n +3 | cut -d'>' -f2 | cut -d'<' -f1

