let feedbacks;

function loadingFeedbackJSON() {
    const feedbackContainer = document.querySelector('.users-feedbacks .carousel-inner');
    let htmlTemp = '';

    let showTwoItem = feedbacks.filter(e => +e.id % 2 === 0);
    for(const feedback of showTwoItem) {
        htmlTemp += `
            <div class="users-feedback-item">
                <div class="users-feedback-item-photo"><img src="${feedback.userImg}" alt="${feedback.userName}"></div>
                <span class="group-description users-feedback-title">${feedback.userName}</span>
                <span class="text-description">${feedback.feedbackText}</span>
                <span class="feedback-date">${feedback.feedbackDate}</span>
            </div>
        `;
    }

    feedbackContainer.innerHTML = `<div class="carousel-item active">${htmlTemp}</div>`;
}

async function loadFeedbacks() {
    const response = await fetch('data/feedbacks.json');
    feedbacks = await response.json();
    loadingFeedbackJSON();
}

loadFeedbacks();