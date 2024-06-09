function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        document.getElementById('result').textContent = "Please select a valid date.";
        return;
    }

    const today = new Date();
    const birthDate = new Date(birthdate);
    const ageInMilliseconds = today - birthDate;

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    const ageHours = Math.floor(ageInMilliseconds / (1000 * 60 * 60));
    const ageMinutes = Math.floor(ageInMilliseconds / (1000 * 60));
    const ageSeconds = Math.floor(ageInMilliseconds / 1000);

    document.getElementById('result').innerHTML = `
        <h1><p>Your age is:</p></h1>
        <h3><p>${ageYears} years, ${ageMonths} months, ${ageDays} days</p></h3>
        <h4><p>${ageHours} hours</p>
        <p>${ageMinutes} minutes</p>
        <p>${ageSeconds} seconds</p></h4>
    `;
}
