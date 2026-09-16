/* =====================================================
DEFAULT ITEMS
===================================================== */

addSkill();
addSkill();

addProject();
addProject();

addEducation();

addExperience();

addCertification();

addAchievement();

addActivity();

addLanguage();

/* =====================================================
HELPER
===================================================== */

function removeItem(button) {

button.parentElement.remove();

}

/* =====================================================
ADD SKILL
===================================================== */

function addSkill() {

const container =
    document.getElementById("skillsContainer");

const item =
    document.createElement("div");

item.className = "dynamic-item";

item.innerHTML = `

    <button class="remove-btn"
            onclick="removeItem(this)">
        X
    </button>

    <h4>Skill</h4>

    <label>Skill Name</label>

    <input type="text"
           class="skill-name-input"
           placeholder="HTML">

    <label>Skill Level (%)</label>

    <input type="number"
           class="skill-level-input"
           min="0"
           max="100"
           value="80">

`;

container.appendChild(item);

}

/* =====================================================
ADD PROJECT
===================================================== */

function addProject() {

const container =
    document.getElementById("projectsContainer");

const item =
    document.createElement("div");

item.className = "dynamic-item";

item.innerHTML = `

    <button class="remove-btn"
            onclick="removeItem(this)">
        X
    </button>

    <h4>Project</h4>

    <label>Project Name</label>

    <input type="text"
           class="project-name"
           placeholder="My Website">

    <label>Description</label>

    <textarea
        class="project-description"
        rows="4"
        placeholder="Describe your project..."></textarea>

    <label>Technologies</label>

    <input type="text"
           class="project-tech"
           placeholder="HTML, CSS, JavaScript">

    <label>Project URL</label>

    <input type="url"
           class="project-url"
           placeholder="https://example.com">

`;

container.appendChild(item);

}

/* =====================================================
ADD EDUCATION
===================================================== */

function addEducation() {

const container =
    document.getElementById("educationContainer");

const item =
    document.createElement("div");

item.className = "dynamic-item";

item.innerHTML = `

    <button class="remove-btn"
            onclick="removeItem(this)">
        X
    </button>

    <h4>Education</h4>

    <label>Degree / Course</label>

    <input type="text"
           class="education-degree"
           placeholder="B.Tech Computer Science">

    <label>Institution</label>

    <input type="text"
           class="education-institution"
           placeholder="ABC University">

    <label>Year</label>

    <input type="text"
           class="education-year"
           placeholder="2022 - 2026">

    <label>Details</label>

    <textarea
        class="education-details"
        rows="3"
        placeholder="CGPA, percentage, subjects etc."></textarea>

`;

container.appendChild(item);

}

/* =====================================================
ADD EXPERIENCE
===================================================== */

function addExperience() {

const container =
    document.getElementById("experienceContainer");

const item =
    document.createElement("div");

item.className = "dynamic-item";

item.innerHTML = `

    <button class="remove-btn"
            onclick="removeItem(this)">
        X
    </button>

    <h4>Experience</h4>

    <label>Job Title</label>

    <input type="text"
           class="experience-title"
           placeholder="Web Developer">

    <label>Company</label>

    <input type="text"
           class="experience-company"
           placeholder="ABC Company">

    <label>Duration</label>

    <input type="text"
           class="experience-duration"
           placeholder="2025 - Present">

    <label>Description</label>

    <textarea
        class="experience-description"
        rows="4"
        placeholder="Describe your work..."></textarea>

`;

container.appendChild(item);

}

/* =====================================================
ADD CERTIFICATION
===================================================== */

function addCertification() {

const container =
    document.getElementById("certificationsContainer");

const item =
    document.createElement("div");

item.className = "dynamic-item";

item.innerHTML = `

    <button class="remove-btn"
            onclick="removeItem(this)">
        X
    </button>

    <h4>Certification</h4>

    <label>Certification Name</label>

    <input type="text"
           class="cert-name"
           placeholder="Web Development">

    <label>Issuing Organization</label>

    <input type="text"
           class="cert-org"
           placeholder="Coursera">

    <label>Year</label>

    <input type="text"
           class="cert-year"
           placeholder="2026">

`;

container.appendChild(item);

}

/* =====================================================
ADD ACHIEVEMENT
===================================================== */

function addAchievement() {

const container =
    document.getElementById("achievementsContainer");

const item =
    document.createElement("div");

item.className = "dynamic-item";

item.innerHTML = `

    <button class="remove-btn"
            onclick="removeItem(this)">
        X
    </button>

    <h4>Achievement</h4>

    <label>Achievement</label>

    <textarea
        class="achievement-text"
        rows="3"
        placeholder="Won first prize in coding competition..."></textarea>

`;

container.appendChild(item);

}

/* =====================================================
ADD ACTIVITY
===================================================== */

function addActivity() {

const container =
    document.getElementById("activitiesContainer");

const item =
    document.createElement("div");

item.className = "dynamic-item";

item.innerHTML = `

    <button class="remove-btn"
            onclick="removeItem(this)">
        X
    </button>

    <h4>Activity</h4>

    <label>Activity Name</label>

    <input type="text"
           class="activity-name"
           placeholder="Volunteer Work">

    <label>Description</label>

    <textarea
        class="activity-description"
        rows="3"
        placeholder="Describe the activity..."></textarea>

`;

container.appendChild(item);

}

/* =====================================================
ADD LANGUAGE
===================================================== */

function addLanguage() {

const container =
    document.getElementById("languagesContainer");

const item =
    document.createElement("div");

item.className = "dynamic-item";

item.innerHTML = `

    <button class="remove-btn"
            onclick="removeItem(this)">
        X
    </button>

    <h4>Language</h4>

    <label>Language</label>

    <input type="text"
           class="language-name"
           placeholder="English">

    <label>Level</label>

    <input type="text"
           class="language-level"
           placeholder="Fluent">

`;

container.appendChild(item);

}

/* =====================================================
GENERATE PORTFOLIO
===================================================== */

function generatePortfolio() {

/* -----------------------------------------------
   PERSONAL INFORMATION
------------------------------------------------ */

const name =
    document.getElementById("name").value
    || "YOUR NAME";

const title =
    document.getElementById("title").value
    || "YOUR PROFESSIONAL TITLE";

const email =
    document.getElementById("email").value
    || "---";

const phone =
    document.getElementById("phone").value
    || "---";

const location =
    document.getElementById("location").value
    || "---";

const dob =
    document.getElementById("dob").value
    || "---";

const nationality =
    document.getElementById("nationality").value
    || "---";

const about =
    document.getElementById("about").value
    || "Your introduction will appear here.";


document.getElementById("pName").textContent =
    name;

document.getElementById("pFooterName").textContent =
    name;

document.getElementById("pTitle").textContent =
    title;

document.getElementById("pLocation").textContent =
    location;

document.getElementById("pEmail").textContent =
    email;

document.getElementById("pPhone").textContent =
    phone;

document.getElementById("pLocation2").textContent =
    location;

document.getElementById("pDob").textContent =
    dob;

document.getElementById("pNationality").textContent =
    nationality;

document.getElementById("pAbout").textContent =
    about;


/* -----------------------------------------------
   SKILLS
------------------------------------------------ */

const skillItems =
    document.querySelectorAll(
        "#skillsContainer .dynamic-item"
    );

let skillsHTML = "";

skillItems.forEach(item => {

    const skill =
        item.querySelector(".skill-name-input").value;

    const level =
        item.querySelector(".skill-level-input").value;

    if (skill.trim() !== "") {

        skillsHTML += `

            <div class="skill-row">

                <div class="skill-top">

                    <span>${escapeHTML(skill)}</span>

                    <span>${level}%</span>

                </div>

                <div class="skill-bar">

                    <div class="skill-fill"
                         style="width:${level}%">
                    </div>

                </div>

            </div>

        `;
    }

});

document.getElementById("pSkills").innerHTML =
    skillsHTML;


/* -----------------------------------------------
   PROJECTS
------------------------------------------------ */

const projectItems =
    document.querySelectorAll(
        "#projectsContainer .dynamic-item"
    );

let projectsHTML = "";

projectItems.forEach(item => {

    const projectName =
        item.querySelector(".project-name").value;

    const description =
        item.querySelector(".project-description").value;

    const tech =
        item.querySelector(".project-tech").value;

    const url =
        item.querySelector(".project-url").value;

    if (projectName.trim() !== "") {

        projectsHTML += `

            <div class="project-card">

                <h3>
                    ${escapeHTML(projectName)}
                </h3>

                <p>
                    ${escapeHTML(description)}
                </p>

                <p class="tech">
                    ${escapeHTML(tech)}
                </p>

                ${
                    url
                    ?
                    `<a href="${escapeAttribute(url)}"
                        target="_blank">
                        VIEW PROJECT →
                     </a>`
                    :
                    ""
                }

            </div>

        `;
    }

});

document.getElementById("pProjects").innerHTML =
    projectsHTML;


/* -----------------------------------------------
   EDUCATION
------------------------------------------------ */

const educationItems =
    document.querySelectorAll(
        "#educationContainer .dynamic-item"
    );

let educationHTML = "";

educationItems.forEach(item => {

    const degree =
        item.querySelector(".education-degree").value;

    const institution =
        item.querySelector(".education-institution").value;

    const year =
        item.querySelector(".education-year").value;

    const details =
        item.querySelector(".education-details").value;

    if (degree.trim() !== "") {

        educationHTML += `

            <div class="output-item">

                <span class="date">
                    ${escapeHTML(year)}
                </span>

                <h3>
                    ${escapeHTML(degree)}
                </h3>

                <h4>
                    ${escapeHTML(institution)}
                </h4>

                <p>
                    ${escapeHTML(details)}
                </p>

            </div>

        `;
    }

});

document.getElementById("pEducation").innerHTML =
    educationHTML;


/* -----------------------------------------------
   EXPERIENCE
------------------------------------------------ */

const experienceItems =
    document.querySelectorAll(
        "#experienceContainer .dynamic-item"
    );

let experienceHTML = "";

experienceItems.forEach(item => {

    const job =
        item.querySelector(".experience-title").value;

    const company =
        item.querySelector(".experience-company").value;

    const duration =
        item.querySelector(".experience-duration").value;

    const description =
        item.querySelector(".experience-description").value;

    if (job.trim() !== "") {

        experienceHTML += `

            <div class="output-item">

                <span class="date">
                    ${escapeHTML(duration)}
                </span>

                <h3>
                    ${escapeHTML(job)}
                </h3>

                <h4>
                    ${escapeHTML(company)}
                </h4>

                <p>
                    ${escapeHTML(description)}
                </p>

            </div>

        `;
    }

});

document.getElementById("pExperience").innerHTML =
    experienceHTML;


/* -----------------------------------------------
   CERTIFICATIONS
------------------------------------------------ */

const certificationItems =
    document.querySelectorAll(
        "#certificationsContainer .dynamic-item"
    );

let certificationHTML = "";

certificationItems.forEach(item => {

    const name =
        item.querySelector(".cert-name").value;

    const organization =
        item.querySelector(".cert-org").value;

    const year =
        item.querySelector(".cert-year").value;

    if (name.trim() !== "") {

        certificationHTML += `

            <div class="certificate-card">

                <h3>
                    ${escapeHTML(name)}
                </h3>

                <p>
                    ${escapeHTML(organization)}
                </p>

                <p>
                    ${escapeHTML(year)}
                </p>

            </div>

        `;
    }

});

document.getElementById("pCertifications").innerHTML =
    certificationHTML;

document.getElementById("pCertifications").className =
    "certificate-output";


/* -----------------------------------------------
   ACHIEVEMENTS
------------------------------------------------ */

const achievementItems =
    document.querySelectorAll(
        "#achievementsContainer .dynamic-item"
    );

let achievementHTML = "";

achievementItems.forEach(item => {

    const text =
        item.querySelector(".achievement-text").value;

    if (text.trim() !== "") {

        achievementHTML += `

            <div>
                🏆 ${escapeHTML(text)}
            </div>

        `;
    }

});

document.getElementById("pAchievements").innerHTML =
    `<div class="simple-output">
        ${achievementHTML}
     </div>`;


/* -----------------------------------------------
   ACTIVITIES
------------------------------------------------ */

const activityItems =
    document.querySelectorAll(
        "#activitiesContainer .dynamic-item"
    );

let activityHTML = "";

activityItems.forEach(item => {

    const activity =
        item.querySelector(".activity-name").value;

    const description =
        item.querySelector(".activity-description").value;

    if (activity.trim() !== "") {

        activityHTML += `

            <div>

                <strong>
                    ${escapeHTML(activity)}
                </strong>

                <br>

                ${escapeHTML(description)}

            </div>

        `;
    }

});

document.getElementById("pActivities").innerHTML =
    `<div class="simple-output">
        ${activityHTML}
     </div>`;


/* -----------------------------------------------
   LANGUAGES
------------------------------------------------ */

const languageItems =
    document.querySelectorAll(
        "#languagesContainer .dynamic-item"
    );

let languageHTML = "";

languageItems.forEach(item => {

    const language =
        item.querySelector(".language-name").value;

    const level =
        item.querySelector(".language-level").value;

    if (language.trim() !== "") {

        languageHTML += `

            <div class="language-card">

                <strong>
                    ${escapeHTML(language)}
                </strong>

                <span>
                    ${escapeHTML(level)}
                </span>

            </div>

        `;
    }

});

document.getElementById("pLanguages").innerHTML =
    `<div class="language-output">
        ${languageHTML}
     </div>`;


/* -----------------------------------------------
   CONTACT
------------------------------------------------ */

document.getElementById("pContactEmail").textContent =
    "EMAIL: " + email;

document.getElementById("pContactPhone").textContent =
    "PHONE: " + phone;


setLink(
    "pLinkedin",
    document.getElementById("linkedin").value,
    "LinkedIn"
);

setLink(
    "pGithub",
    document.getElementById("github").value,
    "GitHub"
);

setLink(
    "pWebsite",
    document.getElementById("website").value,
    "Personal Website"
);

setLink(
    "pInstagram",
    document.getElementById("instagram").value,
    "Instagram"
);


/* -----------------------------------------------
   SCROLL TO PREVIEW
------------------------------------------------ */

document.getElementById("portfolio")
    .scrollIntoView({
        behavior: "smooth"
    });

}

/* =====================================================
SOCIAL LINK
===================================================== */

function setLink(id, url, text) {

const element =
    document.getElementById(id);

if (url.trim() !== "") {

    element.textContent =
        text + " → " + url;

    element.href = url;

    element.style.display = "block";

} else {

    element.style.display = "none";

}

}

/* =====================================================
PHOTO UPLOAD
===================================================== */

document.getElementById("photo")
.addEventListener("change", function(event) {

    const file =
        event.target.files[0];

    if (!file) return;

    const reader =
        new FileReader();

    reader.onload = function(e) {

        document.getElementById("pPhoto").src =
            e.target.result;

    };

    reader.readAsDataURL(file);

});

/* =====================================================
DOWNLOAD PDF
===================================================== */
async function downloadPDF() {
    generatePortfolio();

    const portfolio = document.getElementById("portfolio");

    // Temporarily prepare portfolio for PDF
    const originalWidth = portfolio.style.width;
    const originalMaxWidth = portfolio.style.maxWidth;
    const originalMargin = portfolio.style.margin;

    portfolio.style.width = "794px";
    portfolio.style.maxWidth = "794px";
    portfolio.style.margin = "0 auto";

    // Give browser time to finish rendering
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
        const canvas = await html2canvas(portfolio, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: "#080808",
            logging: false,
            scrollX: 0,
            scrollY: 0,
            windowWidth: 794
        });

        const { jsPDF } = window.jspdf;

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4"
        });

        const pageWidth = 210;
        const pageHeight = 297;

        const margin = 8;

        const usableWidth = pageWidth - (margin * 2);
        const usableHeight = pageHeight - (margin * 2);

        const imageWidth = canvas.width;
        const imageHeight = canvas.height;

        // Scale image to fit A4 width
        const ratio = usableWidth / imageWidth;

        const scaledHeight = imageHeight * ratio;

        let remainingHeight = scaledHeight;
        let sourceY = 0;

        while (remainingHeight > 0) {

            if (sourceY > 0) {
                pdf.addPage();
            }

            const pageImageHeight = Math.min(
                usableHeight,
                remainingHeight
            );

            // Convert PDF dimensions back to canvas pixels
            const sourceHeight = pageImageHeight / ratio;

            const pageCanvas = document.createElement("canvas");

            pageCanvas.width = canvas.width;
            pageCanvas.height = sourceHeight;

            const ctx = pageCanvas.getContext("2d");

            ctx.fillStyle = "#080808";
            ctx.fillRect(
                0,
                0,
                pageCanvas.width,
                pageCanvas.height
            );

            ctx.drawImage(
                canvas,
                0,
                sourceY,
                canvas.width,
                sourceHeight,
                0,
                0,
                canvas.width,
                sourceHeight
            );

            const pageImage = pageCanvas.toDataURL(
                "image/jpeg",
                0.95
            );

            pdf.addImage(
                pageImage,
                "JPEG",
                margin,
                margin,
                usableWidth,
                pageImageHeight
            );

            sourceY += sourceHeight;
            remainingHeight -= pageImageHeight;
        }

        pdf.save("My-Professional-Portfolio.pdf");

    } catch (error) {
        console.error("PDF generation error:", error);
        alert("There was a problem generating the PDF. Please check the browser console.");
    }

    // Restore original styles
    portfolio.style.width = originalWidth;
    portfolio.style.maxWidth = originalMaxWidth;
    portfolio.style.margin = originalMargin;
}
    

/* =====================================================
SECURITY / TEXT ESCAPING
===================================================== */

function escapeHTML(text) {


return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}

function escapeAttribute(text) {

return String(text)
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");


}
