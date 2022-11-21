import { EVEN_MONTH, FEBRUARY, FIRST_DAY_OF_MONTH, FIRST_MONTH_OF_YEAR, FIRST_YEAR, JULY, LEAP_YEAR, LONG_FEBRUARY, LONG_MONTH, MONTHS_IN_YEAR, SHORT_FEBRUARY, SHORT_MONTH } from "./constants";

const calcDaysFromYear = (year: string) => {
    let totalDays = 0;
    const yearsInRange = +year - FIRST_YEAR;
    for (let i = 0; i < yearsInRange; i++) {
        totalDays += calcDaysFromMonth(MONTHS_IN_YEAR + 1, FIRST_YEAR + i);
    }
    return totalDays;
}

const calcDaysFromMonth = (month: string | number, year: string | number) => {
    let totalDays = 0;
    const monthsInRange = +month - FIRST_MONTH_OF_YEAR;
    for (let i = 0; i < monthsInRange; i++) {
        let curMonth = FIRST_MONTH_OF_YEAR + i;

        if (curMonth === FEBRUARY) {
            +year % LEAP_YEAR === 0 ? totalDays += LONG_FEBRUARY : totalDays += SHORT_FEBRUARY;
        } else if (curMonth <= JULY) {
            curMonth % EVEN_MONTH === 0 ? totalDays += SHORT_MONTH : totalDays += LONG_MONTH;
        } else {
            curMonth % EVEN_MONTH === 0 ? totalDays += LONG_MONTH : totalDays += SHORT_MONTH;
        }
    }
    return totalDays;
}

const calcDaysFromDay = (day: string) => {
    return (+day - FIRST_DAY_OF_MONTH);
}

const sumDays = (...theArgs: any) => {
    return theArgs.reduce((previous: number, current: number) => {
        return previous + current;
    });
};

const getDate = (date: string) => {
    const [day, month, year] = date.split('/');
    return { day, month, year };
}

export const calcDate = (date: string) => {
    const { day, month, year } = getDate(date);
    return sumDays(calcDaysFromYear(year), calcDaysFromMonth(month, year), calcDaysFromDay(day));
}

export const calcDateTest = (date: string) => {
    const { day, month, year } = getDate(date);
    const theDay = new Date(+year, +month, +day);
    return theDay.getTime();
}
