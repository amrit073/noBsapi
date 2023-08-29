const nepali_years_and_days_in_months = [
	[2000, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
	[2001, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2002, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
	[2003, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
	[2004, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
	[2005, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2006, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
	[2007, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
	[2008, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
	[2009, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2010, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
	[2011, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
	[2012, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
	[2013, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2014, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
	[2015, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
	[2016, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
	[2017, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2018, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
	[2019, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
	[2020, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
	[2021, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2022, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
	[2023, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
	[2024, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
	[2025, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2026, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
	[2027, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
	[2028, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2029, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
	[2030, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
	[2031, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
	[2032, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2033, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
	[2034, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
	[2035, 30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
	[2036, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2037, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
	[2038, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
	[2039, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
	[2040, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2041, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
	[2042, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
	[2043, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
	[2044, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2045, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
	[2046, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
	[2047, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
	[2048, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2049, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
	[2050, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
	[2051, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
	[2052, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2053, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
	[2054, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
	[2055, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2056, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
	[2057, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
	[2058, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
	[2059, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2060, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
	[2061, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
	[2062, 30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
	[2063, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2064, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
	[2065, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
	[2066, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
	[2067, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2068, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
	[2069, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
	[2070, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
	[2071, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2072, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
	[2073, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
	[2074, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
	[2075, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2076, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
	[2077, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
	[2078, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
	[2079, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
	[2080, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
	[2081, 31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
	[2082, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
	[2083, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
	[2084, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
	[2085, 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
	[2086, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
	[2087, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
	[2088, 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
	[2089, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
	[2090, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
];

let previousDate = null;



function isLeapYear(year: number) {
	if (year % 100 === 0) {
		return (year % 400 === 0);
	} else {
		return (year % 4 === 0);
	}
}

function getNepaliMonthInString(month: number) {
	let nepaliMonth = "";

	switch (month) {
		case 1:
			nepaliMonth = "बैशाख";
			break;

		case 2:
			nepaliMonth = "जेष्ठ";
			break;

		case 3:
			nepaliMonth = "असार";
			break;

		case 4:
			nepaliMonth = "श्रावन";
			break;

		case 5:
			nepaliMonth = "भाद्र";
			break;

		case 6:
			nepaliMonth = "असोज";
			break;

		case 7:
			nepaliMonth = "कार्तिक";
			break;

		case 8:
			nepaliMonth = "मंग्सिर";
			break;

		case 9:
			nepaliMonth = "पौष";
			break;

		case 10:
			nepaliMonth = "माघ";
			break;

		case 11:
			nepaliMonth = "फाल्गुन";
			break;

		case 12:
			nepaliMonth = "चैत्र";
			break;
	}
	return nepaliMonth;
}

function getEnglishMonth(month: number) {
	let englishMonth = "";

	switch (month) {
		case 1:
			englishMonth = "Baisakh";
			break;

		case 2:
			englishMonth = "Jesth";
			break;

		case 3:
			englishMonth = "Asar";
			break;

		case 4:
			englishMonth = "Srawan";
			break;

		case 5:
			englishMonth = "Bhadra";
			break;

		case 6:
			englishMonth = "Aaswin";
			break;

		case 7:
			englishMonth = "Kartik";
			break;

		case 8:
			englishMonth = "Mangsir";
			break;

		case 9:
			englishMonth = "Paush";
			break;

		case 10:
			englishMonth = "Magh";
			break;

		case 11:
			englishMonth = "Falgun";
			break;

		case 12:
			englishMonth = "Chaitra";
			break;
	}
	return englishMonth;
}

function getNepaliDayOfWeekInString(day: number | string) {
	switch (day) {
		case 1:
			day = "आइतबार ";
			break;

		case 2:
			day = "सोमबार ";
			break;

		case 3:
			day = "मंगलबार ";
			break;

		case 4:
			day = "बुधबार ";
			break;

		case 5:
			day = "बिहिबार ";
			break;

		case 6:
			day = "शुक्रबार ";
			break;

		case 7:
			day = "शनिबार ";
			break;
	}
	return day;
}

function getEnglishDayOfWeekInString(day: number | string) {
	switch (day) {
		case 1:
			day = "Sunday";
			break;

		case 2:
			day = "Monday";
			break;

		case 3:
			day = "Tuesday";
			break;

		case 4:
			day = "Wednesday";
			break;

		case 5:
			day = "Thursday";
			break;

		case 6:
			day = "Friday";
			break;

		case 7:
			day = "Saturday";
			break;
	}
	return day;
}

function convertEnglishDateToNepali(yy: number, mm: number, dd: number) {

	if (!checkIfDateIsInRange(yy, mm, dd)) {
		return "Invalid date !";
	}

	const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const leap_year_months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	const def_eyy = 1944;
	const def_nyy = 2000;
	const def_nmm = 9;
	const def_ndd = 17 - 1;
	let total_eDays = 0;

	let day = 7 - 1;
	let i, j;

	for (i = 0; i < (yy - def_eyy); i++) {
		if (isLeapYear(def_eyy + i)) {
			for (j = 0; j < 12; j++) {
				total_eDays = total_eDays + leap_year_months[j];
			}
		} else {
			for (j = 0; j < 12; j++) {
				total_eDays = total_eDays + month[j];
			}
		}
	}


	for (i = 0; i < (mm - 1); i++) {
		if (isLeapYear(yy))
			total_eDays += leap_year_months[i];
		else
			total_eDays += month[i];
	}

	total_eDays += dd;

	i = 0;
	j = def_nmm;
	let total_nDays = def_ndd;
	let m = def_nmm;
	let y = def_nyy;
	let a = 0;

	while (total_eDays !== 0) {
		a = nepali_years_and_days_in_months[i][j];
		total_nDays++;
		day++;
		if (total_nDays > a) {
			m++;
			total_nDays = 1;
			j++;
		}
		if (day > 7)
			day = 1;
		if (m > 12) {
			y++;
			m = 1;
		}
		if (j > 12) {
			j = 1;
			i++;
		}
		total_eDays--;
	}


	const dateString = y + " " + getEnglishMonth(m) + " " + total_nDays + ", " + getEnglishDayOfWeekInString(day) + '\n';
	return dateString;

}

function checkIfDateIsInRange(year: number, month: number, day: number) {
	if (year < 1944 || year > 2033) {
		return false;
	}
	if (month < 1 || month > 12) {
		return false;
	}

	return !(day < 1 || day > 31);

}






export const getDate = () => {
	const today = new Date(new Date().toLocaleString('en-US', { timeZone: "Asia/Kathmandu" }))
	return convertEnglishDateToNepali(today.getFullYear(), today.getMonth() + 1, today.getDate())
}

