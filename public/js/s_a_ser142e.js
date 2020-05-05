myApp.service('QuizService',['$q', '$http', function($q, $http){        

         this.saveUserQuiz = function(postData) {
            var url='/save-user-quiz';
            console.log(postData);
            //set timezone of user
            var request = $q.defer();
            //{'monthDayDateTime': monthDayDateTime, 'studentId': studentId, 'lectureTimeTableId': lectureTimeTableId}
            $http({
                method: "POST",
                url: url,
                data: postData,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (response) {
                request.resolve(response);
            }).error(function(error) {
                request.reject(error);
            });

            return request.promise;
        }
}]);


myApp.service('UserThemeService',['$q', '$http', function($q, $http){        

         this.setUserTheme = function(themeId) {
            var url='/user-theme/'+themeId;
            //set timezone of user
            var request = $q.defer();
            //{'monthDayDateTime': monthDayDateTime, 'studentId': studentId, 'lectureTimeTableId': lectureTimeTableId}
            $http({
                method: "GET",
                url: url,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (response) {
                request.resolve(response);
            }).error(function(error) {
                request.reject(error);
            });

            return request.promise;
        }
}]);


myApp.service('OtherUserStatsService',['$q', '$http', function($q, $http){        

         this.getUserStats = function(encUserQuizId) {
            var url='';
            if(arrJsConfig.URL_PREFIX!=''){
              url +='/'+arrJsConfig.URL_PREFIX;
            }
            url +='/other-user-stats/'+encUserQuizId;
            
            //set timezone of user
            var request = $q.defer();
            //{'monthDayDateTime': monthDayDateTime, 'studentId': studentId, 'lectureTimeTableId': lectureTimeTableId}
            $http({
                method: "GET",
                url: url,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (response) {
                request.resolve(response);
            }).error(function(error) {
                request.reject(error);
            });

            return request.promise;
        }
}]);

myApp.service('getUserPopupStats',['$q', '$http', function($q, $http){        

    this.getData = function(id) {
       var url='/get-quiz-by-user-quiz-id';
       var request = $q.defer();
       $http({
           method: "POST",
           url: url,
           params: {id:id},
           headers: {'Content-Type': 'application/x-www-form-urlencoded'}
       }).success(function (response) {
           request.resolve(response);
       }).error(function(error) {
           request.reject(error);
       });

       return request.promise;
   }
}]);