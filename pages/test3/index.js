export const handleDay = () => {
	let day = new Date();
	let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	return week[day.getDay()];
};
