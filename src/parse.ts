import { XMLParser } from 'fast-xml-parser';

interface Iitems {
	title: string;
	description: string;
}

interface Irss {
	title: string;
	description: string;
	link: string;
	image: string;
	category: string;
	items: Iitems[];
};

export default async (url: string) => {
	if (!/(^http(s?):\/\/[^\s$.?#].[^\s]*)/i.test(url)) return null;

	const datainit = await fetch(url);
	const data = await datainit.text();


	const xml = new XMLParser({
		attributeNamePrefix: '',
		textNodeName: '$text',
		ignoreAttributes: false,
	});

	const result = xml.parse(data);

	let channel = result.rss && result.rss.channel ? result.rss.channel : result.feed;
	if (Array.isArray(channel)) channel = channel[0];

	const rss: Irss = {
		title: channel.title || '',
		description: channel.description || '',
		link: channel.link && channel.link.href ? channel.link.href : channel.link,
		image: channel.image ? channel.image.url : '',
		category: channel.category || [],
		items: [],
	};

	let items = channel.item || channel.entry || [];
	if (items && !Array.isArray(items)) items = [items];

	for (let i = 0; i < items.length; i++) {
		const val = items[i];
		const media = {};

		const obj = {
			id: val.guid && val.guid.$t ? val.guid.$t : val.id,
			title: val.title && val.title.$text ? val.title.$text : val.title,
			description: val.summary && val.summary.$text ? val.summary.$text : val.description,
			link: val.link && val.link.href ? val.link.href : val.link,
		};

		Object.assign(obj, { media });

		rss.items.push(obj);
	}
	return rss;
};
