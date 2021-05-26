let feedbacks;

function loadingFeedbackJSON() {
    const feedbackContainer = document.querySelector('.users-feedbacks .carousel-inner');
    let htmlTemp = '';
    // <div class="carousel-item row no-gutters"></div>
    for(const feedback of feedbacks) {
        htmlTemp += `
            <div class="users-feedback-item">
                <div class="users-feedback-item-photo"><img src="${feedback.userImg}" alt="${feedback.userName}"></div>
                <span class="group-description users-feedback-title">${feedback.userName}</span>
                <span class="text-description">${feedback.feedbackText}</span>
                <span class="feedback-date">${feedback.feedbackDate}</span>
            </div>
        `;
    }
    feedbackContainer.innerHTML = htmlTemp;
}

async function loadFeedbacks() {
    const response = await fetch('../data/feedbacks.json');
    feedbacks = await response.json();
    loadingFeedbackJSON();
}

loadFeedbacks();