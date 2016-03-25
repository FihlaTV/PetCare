function ready() {

    // Click to show messages and applications
    $(".message .info").click(function() {

        $(this).siblings(".content").slideToggle("fast", function() {
        });
    });

    // Update read status for messages
    $(".inbox .message .info").click(function() {

        // Change message status to read
        $(this).find(".read").text("READ");
        $(this).find(".read").addClass("true");
        

    });
}


/* Module for user application page */
(function() {
    var app = angular.module('application', []);

    app.controller('ReceivedController', ['$http', '$scope', function($http, $scope){
        $scope.applications = received;

    }]);

    app.controller('SentController', ['$http', '$scope', function($http, $scope){
        $scope.applications = sentApp;

    }]);
})();

//########## dummy data ##########


var received = [
    {
        from: 'Leonardo DiCaprio',
        from_id: 1,
        posting_id: 43,
        date: 'March 14, 2016',
        content: 'Lorem ipsum dolor sit amet, eu mei delenit appetere reprehendunt. Tractatos sententiae ut has, vix cu nihil alienum. Te cum altera adolescens argumentum, ei vel suas rationibus. Eam in eius pertinax. Cum no delenit delicatissimi, qui eu voluptaria adipiscing concludaturque.',

    },
    {
        from: 'Leonardo DiCaprio',
        from_id: 2,
        posting_id: 22,
        date: 'March 14, 2016',
        content: 'Lorem ipsum dolor sit amet, eu mei delenit appetere reprehendunt. Tractatos sententiae ut has, vix cu nihil alienum. Te cum altera adolescens argumentum, ei vel suas rationibus. Eam in eius pertinax. Cum no delenit delicatissimi, qui eu voluptaria adipiscing concludaturque.',


    },
    {
        from: 'Bradley Cooper',
        from_id: 3,
        posting_id: 4,
        date: 'March 19, 2016',
        content: 'Lorem ipsum dolor sit amet, eu mei delenit appetere reprehendunt. Tractatos sententiae ut has, vix cu nihil alienum. Te cum altera adolescens argumentum, ei vel suas rationibus. Eam in eius pertinax. Cum no delenit delicatissimi, qui eu voluptaria adipiscing concludaturque.',

    },
    {
        from: 'Leonardo DiCaprio',
        from_id: 4,
        posting_id: 12,
        date: 'February 20, 2016',
        content: 'Lorem ipsum dolor sit amet, eu mei delenit appetere reprehendunt. Tractatos sententiae ut has, vix cu nihil alienum. Te cum altera adolescens argumentum, ei vel suas rationibus. Eam in eius pertinax. Cum no delenit delicatissimi, qui eu voluptaria adipiscing concludaturque.',

    }
]

var sentApp = [
    {
        to: 'Leonardo DiCaprio',
        posting_id: 75,
        date: 'March 14, 2016',
        content: 'Lorem ipsum dolor sit amet, eu mei delenit appetere reprehendunt. Tractatos sententiae ut has, vix cu nihil alienum. Te cum altera adolescens argumentum, ei vel suas rationibus. Eam in eius pertinax. Cum no delenit delicatissimi, qui eu voluptaria adipiscing concludaturque.',

    },
    {
        to: 'Leonardo DiCaprio',
        posting_id: 34,
        date: 'March 14, 2016',
        content: 'Lorem ipsum dolor sit amet, eu mei delenit appetere reprehendunt. Tractatos sententiae ut has, vix cu nihil alienum. Te cum altera adolescens argumentum, ei vel suas rationibus. Eam in eius pertinax. Cum no delenit delicatissimi, qui eu voluptaria adipiscing concludaturque.',


    },
    {
        to: 'Bradley Cooper',
        posting_id: 21,
        date: 'March 19, 2016',
        content: 'Lorem ipsum dolor sit amet, eu mei delenit appetere reprehendunt. Tractatos sententiae ut has, vix cu nihil alienum. Te cum altera adolescens argumentum, ei vel suas rationibus. Eam in eius pertinax. Cum no delenit delicatissimi, qui eu voluptaria adipiscing concludaturque.',

    },
    {
        to: 'Leonardo DiCaprio',
        posting_id: 8,
        date: 'February 20, 2016',
        content: 'Lorem ipsum dolor sit amet, eu mei delenit appetere reprehendunt. Tractatos sententiae ut has, vix cu nihil alienum. Te cum altera adolescens argumentum, ei vel suas rationibus. Eam in eius pertinax. Cum no delenit delicatissimi, qui eu voluptaria adipiscing concludaturque.',

    },
    {
        to: 'Leonardo DiCaprio',
        posting_id: 9,
        date: 'February 20, 2016',
        content: 'Lorem ipsum dolor sit amet, eu mei delenit appetere reprehendunt. Tractatos sententiae ut has, vix cu nihil alienum. Te cum altera adolescens argumentum, ei vel suas rationibus. Eam in eius pertinax. Cum no delenit delicatissimi, qui eu voluptaria adipiscing concludaturque.',
    }
]