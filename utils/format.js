export const formatCurrency = (amount, decimals = 0) => {
    if (amount === null || amount === undefined || isNaN(amount)) {
        return '0';
    }
    return Number(amount).toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });
};