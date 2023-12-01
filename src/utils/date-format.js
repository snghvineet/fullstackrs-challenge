const DateFormatter = {
	inMonthFormat: (date) => {
		return new Intl.DateTimeFormat('en-IN', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		}).format(date);
	},
};

export default DateFormatter;
