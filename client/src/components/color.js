import react from "react";

function riskLevel() {
    if (user.riskLevel === "No preexisting conditions") {
        return 
        // green
} else if (user.riskLevel === "Age 60+") {
    return 
    // light-green
}  else if (user.riskLevel === "Chronic respiratory diseases") {
    return 
    // yellow
} else if (user.riskLevel === "Immunocompromised condition") {
    return 
    // dark-yellow
} else if (user.riskLevel === "Diabetes") {
    return 
    // orange
} else if (user.riskLevel === "Cardiovascular diseases") {
    return 
    // red
} else (user.riskLevel === "Chronic renal disease") {
    return 
    // dark-red
};

export default Color;