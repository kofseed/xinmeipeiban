function calculateHourlyRate(hour) {
    if (8 <= hour && hour < 18) {
        return 60;
    } else if (18 <= hour && hour < 22) {
        return 75;
    } else {
        return 100;
    }
}

function calculateCost() {
    const startTime = new Date(document.getElementById('start_time').value);
    const endTime = new Date(document.getElementById('end_time').value);
    const includeTravel = document.getElementById('include_travel').value === 'yes';
    const includeDrink = document.getElementById('include_drink').value === 'yes';

    let totalCost = 0;
    let currentTime = startTime;

    while (currentTime < endTime) {
        const nextTime = new Date(currentTime.getTime() + 60 * 1000);
        const hourlyRate = calculateHourlyRate(currentTime.getHours());
        totalCost += (hourlyRate / 60);
        currentTime = nextTime;
    }

    if (includeTravel) {
        totalCost += 100;
    }
    if (includeDrink) {
        totalCost += 150;
    }

    document.getElementById('result').innerText = `总费用为：${totalCost.toFixed(2)}元`;
}