(function() {
    let feedbacks;

    const rangeList = {
        from: 1,
        to: 2,
    }

    function loadingFeedbackJSON() {
        const activeFeedbackContainer = document.querySelector('.users-feedbacks .carousel-inner>.carousel-item.active');
        let htmlTemp = '';

        for(const feedback of feedbacks) {
                htmlTemp += `
                    <div class="col-12 col-sm-12 col-md-6">
                        <div class="users-feedback-item">
                            <div class="users-feedback-item-photo"><img src="${feedback.userImg}" alt="${feedback.userName}"></div>
                            <span class="group-description users-feedback-title">${feedback.userName}</span>
                            <span class="text-description">${feedback.feedbackText}</span>
                            <span class="feedback-date">${feedback.feedbackDate}</span>
                        </div>
                    </div>
                `;
            }
            activeFeedbackContainer.innerHTML = `<div class="row">${htmlTemp}</div>`;
    }

    
        

    async function loadFeedbacks() {
        const response = await fetch('data/feedbacks.json');
        feedbacks = await response.json();
       
        loadingFeedbackJSON();
        loadingFeedbackJSON();
    }

    loadFeedbacks();

}());