(function() {
    let feedbacks;

    function loadingFeedbackJSON() {
        const feedbackContainer = document.querySelector('.users-feedbacks .carousel-inner');
        let htmlTemp = '';
        let currentItem = 1;
        for(const feedback of feedbacks) {
            if(+feedback.id === currentItem) {
                htmlTemp += `
                    <div class="col-md-6 col-sm-12">
                        <div class="users-feedback-item">
                            <div class="users-feedback-item-photo"><img src="${feedback.userImg}" alt="${feedback.userName}"></div>
                            <span class="group-description users-feedback-title">${feedback.userName}</span>
                            <span class="text-description">${feedback.feedbackText}</span>
                            <span class="feedback-date">${feedback.feedbackDate}</span>
                        </div>
                    </div>
                `;
            }

            htmlTemp += `
                    <div class="col-md-6 col-sm-12 clearfix d-none d-md-block">
                        <div class="users-feedback-item">
                            <div class="users-feedback-item-photo"><img src="${feedback.userImg}" alt="${feedback.userName}"></div>
                            <span class="group-description users-feedback-title">${feedback.userName}</span>
                            <span class="text-description">${feedback.feedbackText}</span>
                            <span class="feedback-date">${feedback.feedbackDate}</span>
                        </div>
                    </div>
                `;
        }
        
        feedbackContainer.innerHTML = `<div class="carousel-item active"><div class="row">${htmlTemp}</div></div>`;
        // feedbackContainer.innerHTML = `<div class="carousel-item"><div class="row">${htmlTemp}</div></div>`;
    }

    async function loadFeedbacks() {
        const response = await fetch('data/feedbacks.json');
        feedbacks = await response.json();
        loadingFeedbackJSON();
    }

    
    loadFeedbacks();

}());