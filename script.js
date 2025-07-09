document.getElementById('calorie-form').addEventListener('submit', calculateCalories);

function calculateCalories(e) {
    e.preventDefault();

    const age = parseFloat(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activityLevel = document.getElementById('activity-level').value;
    const gender = document.getElementById('gender').value;

    let basalMetabolicRate;
    if (gender === 'male') {
        basalMetabolicRate = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        basalMetabolicRate = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    let activityMultiplier;
    switch (activityLevel) {
        case 'sedentary':
            activityMultiplier = 1.2;
            break;
        case 'lightly-active':
            activityMultiplier = 1.375;
            break;
        case 'moderately-active':
            activityMultiplier = 1.55;
            break;
        case 'very-active':
            activityMultiplier = 1.725;
            break;
        case 'extra-active':
            activityMultiplier = 1.9;
            break;
        default:
            activityMultiplier = 1.2;
    }

    const dailyCalories = basalMetabolicRate * activityMultiplier;
    document.getElementById('result').innerText = `Your daily calorie needs: ${dailyCalories.toFixed(2)}`;
}