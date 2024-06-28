function runCode(level){
    const codeInput = document.getElementById('codeInput' + level).value;
    const output = document.getElementById('output' + level);
    const feedback = document.getElementById('feedback' + level);

    let isValid = false;

    if (level === 1) {
        const headingPattern = /<h1>.*<\/h1>/;
        const paragraphPattern = /<p>.*<\/p>/;
        const headingMatch = headingPattern.test(codeInput);
        const paragraphMatch = paragraphPattern.test(codeInput);
        isValid = headingMatch && paragraphMatch;
    }
    else if (level === 2) {
const olPattern = /<ol>.*<\/ol>/;
const ulPattern = /<ul>.*<\/ul>/;
const olMatch = olPattern .test(codeInput);
const ulMatch = ulPattern.test(codeInput);
isValid = olMatch && ulMatch;
    }
    else if (level === 3) {
        const imgPattern = /<img.*src=.*>/;
        const apattern = /<a.*href=.*>.*<\/a>/;
        const imgMatch = imgPattern.test(codeInput);
        const aMatch = apattern.test(codeInput);
        isValid = imgMatch && aMatch;
    }

    if (isValid) {
        output.innerHTML = codeInput;
        feedback.textContent = "Great job! You've completed the level. 😍";
        feedback.style.color = "green";
if (level < 3) {
    setTimeout(() => {
        document.getElementById('level' + level).classList.add('hidden');
        document.getElementById('level' + (level +1)).classList.remove('hidden');
    }, 2000);
}else {
    feedback.textContent = "Congratulations! You've completed all levels ";
}

    } else {
        output.innerHTML = "";
        feedback.textContent = "Please include the correct HTML tags 😩- Failed!";
        feedback.style.color = "red";
    }
}