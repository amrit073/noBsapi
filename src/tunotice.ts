export const getNotice = async () => {
	const res = await fetch('https://www.tuiost.edu.np/');
	console.log(res);
}
