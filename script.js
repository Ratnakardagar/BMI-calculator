function calculateBMI() {
    // Get user inputs
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    
    // Check if inputs are valid
    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        alert("Please enter valid numbers for weight and height.");
        return;
    }

    // Convert height from cm to meters
    const heightM = heightCm / 100;

    // Calculate BMI
    const bmi = weight / (heightM * heightM);
    
    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }
    
    // Display results
    document.getElementById('bmi-value').textContent = `Your BMI: ${bmi.toFixed(2)}`;
    document.getElementById('bmi-category').textContent = `Category: ${category}`;
}

