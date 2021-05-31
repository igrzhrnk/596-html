(function() {
    let feedbacks;

    function loadingFeedbackJSON() {
        const activeFeedbackContainer = document.querySelector('.users-feedbacks .carousel-inner');

        let htmlTempFirst = '';
        let htmlTempSecond = '';

        const arrayObjects = Object.entries(feedbacks)
                                .map(entry => ({[entry[0]]: entry[1]}));
        
        let firstPart = [];
        let secondPart = [];

        for(let i = 0; i < arrayObjects.length; i++) {
            if(i < arrayObjects.length/2) {
                firstPart.push(arrayObjects[i]);
            } else {
                secondPart.push(arrayObjects[i]);
            }
        }

        for(let i = 0; i < firstPart.length; i++) {
            if(i === 0) {
                htmlTempFirst += `
                    <div class="col-12 col-sm-12 col-md-6">
                        <div class="users-feedback-item">
                            <div class="users-feedback-item-photo"><img src="${firstPart[i][i].userImg}" alt="${firstPart[i][i].userName}"></div>
                            <span class="group-description users-feedback-title">${firstPart[i][i].userName}</span>
                            <span class="text-description">${firstPart[i][i].feedbackText}</span>
                            <span class="feedback-date">${firstPart[i][i].feedbackDate}</span>
                        </div>
                    </div>
                    `;
            } else {
                htmlTempFirst += `
                    <div class="col-12 col-sm-12 col-md-6 clearfix d-none d-md-block">
                        <div class="users-feedback-item">
                            <div class="users-feedback-item-photo"><img src="${firstPart[i][i].userImg}" alt="${firstPart[i][i].userName}"></div>
                            <span class="group-description users-feedback-title">${firstPart[i][i].userName}</span>
                            <span class="text-description">${firstPart[i][i].feedbackText}</span>
                            <span class="feedback-date">${firstPart[i][i].feedbackDate}</span>
                        </div>
                    </div>
                `
            }
        }

        for(let i = 0; i < secondPart.length; i++) {
            if(i === 0) {
                htmlTempSecond += `
                    <div class="col-12 col-sm-12 col-md-6">
                        <div class="users-feedback-item">
                            <div class="users-feedback-item-photo"><img src="${secondPart[i][i+2].userImg}" alt="${secondPart[i][i+2].userName}"></div>
                            <span class="group-description users-feedback-title">${secondPart[i][i+2].userName}</span>
                            <span class="text-description">${secondPart[i][i+2].feedbackText}</span>
                            <span class="feedback-date">${secondPart[i][i+2].feedbackDate}</span>
                        </div>
                    </div>
                    `;
            } else {
                htmlTempSecond += `
                    <div class="col-12 col-sm-12 col-md-6 clearfix d-none d-md-block">
                        <div class="users-feedback-item">
                            <div class="users-feedback-item-photo"><img src="${secondPart[i][i+2].userImg}" alt="${secondPart[i][i+2].userName}"></div>
                            <span class="group-description users-feedback-title">${secondPart[i][i+2].userName}</span>
                            <span class="text-description">${secondPart[i][i+2].feedbackText}</span>
                            <span class="feedback-date">${secondPart[i][i+2].feedbackDate}</span>
                        </div>
                    </div>
                `
            }
        }

        activeFeedbackContainer.innerHTML = `<div class="carousel-item active"><div class="row">${htmlTempFirst}</div></div>`;
        activeFeedbackContainer.innerHTML += `<div class="carousel-item"><div class="row">${htmlTempSecond}</div></div>`
    }

    
        

    async function loadFeedbacks() {
        const response = await fetch('data/feedbacks.json');
        feedbacks = await response.json();
       
        loadingFeedbackJSON();
    }

    

    loadFeedbacks();

}());