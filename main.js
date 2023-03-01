var score;

function updateScore() {
    // Get the current score
    score = document.getElementById("score").value;

    // Update the score display
    document.getElementById("score-display").innerHTML = score;
}

function submitScore() {
    // Determine the grade based on the score
    if (score >= 80) {
        document.getElementById("grade").innerHTML = "Grade: A";
        document.getElementById("grade").className = "A";
    } else if (score >= 70 && score < 80) {
        document.getElementById("grade").innerHTML = "Grade: B";
        document.getElementById("grade").className = "B";
    } else if (score >= 60 && score < 70) {
        document.getElementById("grade").innerHTML = "Grade: C";
        document.getElementById("grade").className = "C";
    } else if (score >= 50 && score < 60) {
        document.getElementById("grade").innerHTML = "Grade: D";
        document.getElementById("grade").className = "D";
    } else {
        document.getElementById("grade").innerHTML = "Grade: F";
        document.getElementById("grade").className = "";
    }
}