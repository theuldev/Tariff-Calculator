import { ACCOMMODATIONS, PRICING_RULES } from "../constants/accommodation";

export function calculateTarifario(checkInStr, checkOutStr, accommodationId, adults) {
    const accommodation = ACCOMMODATIONS[accommodationId];
    if (!accommodation) return null;
    const checkIn = new Date(checkInStr);
    const checkOut = new Date(checkOutStr);
    const days_diff = checkOut - checkIn;
    const milliseconds = 1000 * 60 * 60 * 24;
    const nights_diff = Math.floor(days_diff / milliseconds);


    if (nights_diff < accommodation.minNights) {
        return { error: `A estadia mínima é de ${accommodation.minNights} noites.` };
    }

    let totalDailyRate = 0;
    let currentDate = new Date(checkIn);

    for (let d = 0; d < nights_diff; d++) {
        const dayOfWeek = currentDate.getDay();
        let currentDayPrice = accommodation.dailyPrice;
        if (dayOfWeek == 6 || dayOfWeek == 0) {
            var weekendTax = accommodation.dailyPrice * PRICING_RULES.WEEKEND_SURCHARGE
            currentDayPrice += weekendTax
        }
        totalDailyRate += currentDayPrice;
        currentDate.setDate(currentDate.getDate() + 1);
    }

    let additionalAdultsCost = 0;
    if (adults > accommodation.maxAdults) {
        const extraPeople = adults - accommodation.maxAdults;
        additionalAdultsCost = extraPeople * PRICING_RULES.ADDITIONAL_ADULT_FEE * nights_diff;
    }

    const subtotal = totalDailyRate + additionalAdultsCost + accommodation.cleaningFee;

    const discount = nights_diff > PRICING_RULES.LONG_STAY_THRESHOLD
        ? subtotal * PRICING_RULES.LONG_STAY_DISCOUNT
        : 0;
    const totalFinal = subtotal - discount;
    return {
        accommodationName: accommodation.name,
        nights: nights_diff,
        dailyRateTotal: totalDailyRate,
        cleaningFee: accommodation.cleaningFee,
        additionalAdultsCost,
        discount,
        total: totalFinal
    };

}