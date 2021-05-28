(function() {
    let feedbacks;

    function loadingFeedbackJSON() {
        const feedbackContainer = document.querySelector('.users-feedbacks .carousel-inner');
        let htmlTemp = '';
    
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

        feedbackContainer.innerHTML = `<div class="carousel-item active"><div class="row"><div class="col-md-4">${htmlTemp}</div></div></div>`;
        
    }
    
    async function loadFeedbacks() {
        const response = await fetch('data/feedbacks.json');
        feedbacks = await response.json();
        loadingFeedbackJSON();
    }

    loadFeedbacks();
}());