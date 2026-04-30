import { ACCOMMODATION, PRICING_RULES } from "../constants/accommodation";

function parseLocalDate(dateString) {
    if (!dateString) return new Date(""); 
    const [year, month, day] = dateString.split('-');
    return new Date(year, month - 1, day);
}

export function calculateTarifario(checkInStr, checkOutStr, accommodationId, adultsStr) {
    const accommodation = ACCOMMODATION[accommodationId];
    if (!accommodation) {
        return { error: "Acomodação não encontrada." };
    }

    const adults = Number(adultsStr);
    if (isNaN(adults) || adults <= 0) {
        return { error: "Número de adultos deve ser maior que zero." };
    }

    const checkIn = parseLocalDate(checkInStr);
    const checkOut = parseLocalDate(checkOutStr);

    if (isNaN(checkIn.getTime()) || isNaN(checkOut.getTime())) {
        return { error: "Datas inválidas fornecidas." };
    }

    checkIn.setHours(0, 0, 0, 0);
    checkOut.setHours(0, 0, 0, 0);

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const days_diff = checkOut.getTime() - checkIn.getTime();

    const nights_diff = Math.round(days_diff / millisecondsPerDay);

    if (nights_diff <= 0) {
        return { error: "A data de check-out deve ser posterior à data de check-in." };
    }

    if (nights_diff < accommodation.minNights) {
        return { error: `A estadia mínima para esta acomodação é de ${accommodation.minNights} noites.` };
    }

    let totalDailyRate = 0;
    let currentDate = new Date(checkIn);

    for (let d = 0; d < nights_diff; d++) {
        const dayOfWeek = currentDate.getDay();
        let currentDayPrice = accommodation.dailyPrice;
        
        if (dayOfWeek === 6 || dayOfWeek === 0) {
            const weekendTax = accommodation.dailyPrice * PRICING_RULES.WEEKEND_SURCHARGE;
            currentDayPrice += weekendTax;
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