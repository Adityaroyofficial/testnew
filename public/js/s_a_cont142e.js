var myApp=angular.module('myApp', ['ngSanitize']);

myApp.controller('QuizController',['$scope', '$window','$http','$timeout','QuizService',function($scope,$window ,$http, $timeout,QuizService){

		$scope.arrQuizDetail;	
		$scope.arrQuizQuestions;	
		$scope.questionNo=0;
		$scope.maxQuestion;
		$scope.currentQuestion;
		$scope.currentQuestionIndex;
		$scope.userQuesIndex=[];
		$scope.allQuesIndex=[];
		$scope.userQuesResponse=[];
		$scope.userFullName;
		$scope.countryId;
		$scope.categoryId;
		$scope.quizId;
		$scope.syncQuiz;$scope.namePostQuiz=0;
        $scope.optionClass;
        $scope.isValidForm;
        $scope.userGender;$scope.friendGender;$scope.friendName;
		$scope.encUserQuizId;$scope.score=0;
    $scope.lovePercentage;$scope.quesSelected=0;$scope.enableQueEditing=0;
    $scope.enableUserFriendEditing=0;$scope.useMeta=0;
        $scope.redirectCalculateLovePercentage=function(encUserQuizId){
            var domainUrl='/';
            if(arrJsConfig.URL_PREFIX!=''){
                  domainUrl='/'+arrJsConfig.URL_PREFIX+'/';
            }
            $window.location.href=domainUrl+arrJsConfig.CALCULATE_LOVE+'/'+encUserQuizId;
        }

        $scope.createQuiz=function(categoryId){
            $window.location.href='/'+arrJsConfig.CREATE_QUIZ_URL+'/'+categoryId;
        }

        $scope.realLoveCalculate=function(startLimit, upperLimit){
            $scope.isValidForm=check_friend_form();
            if($scope.isValidForm){

              var min = Math.ceil(startLimit);
              var max = Math.floor(upperLimit);
              $scope.lovePercentage= Math.floor(Math.random() * (max - min + 1)) + min;

              $("#calulcateRealLovePercentageDiv").hide();
              $("#showRelaLovePercentageDiv").show();
              $("#showRelaLovePercentageDiv").focus();
            }
        }

        $scope.realLoveReplay=function(){
            $("#calulcateRealLovePercentageDiv").show();
            $("#showRelaLovePercentageDiv").hide();
            $("#calulcateRealLovePercentageDiv").focus();
        }


        $scope.initPlay=function(){
          $scope.syncQuiz=0;
          $scope.isValidForm=0;

        }

      $scope.initSync=function(encUserQuizId){
        $scope.syncQuiz=1;
        $scope.encUserQuizId=encUserQuizId;
        $scope.isValidForm=0;
      }

        $scope.initLoveMeterPlay=function(syncQuiz){
          $scope.syncQuiz=syncQuiz;
          $scope.isValidForm=false;

        }

        $scope.saveLoveMeterUserQuiz=function(quizId, categoryId, encUserQuizId){
           $scope.categoryId=categoryId; $scope.quizId=quizId;  
           $scope.encUserQuizId=encUserQuizId;
          if($scope.syncQuiz==0)
            $scope.isValidForm=check_play_form();
          else
            $scope.isValidForm=check_friend_form();
            
          if($scope.isValidForm){
              $scope.userFullName=$("#name").val();
              $scope.userGender="";$scope.friendGender="";
              if($("#gender"))
                $scope.userGender=$("#gender").val();

              if($("#friendGender"))
                $scope.friendGender=$("#friendGender").val();
              
              $('#loadingDiv').show();
              $('#quizDiv').hide();

              var postData='';
              postData +='userFullName='+$scope.userFullName+'&useMeta=1&countryId=0&gender='+$scope.userGender+'&quizId='+$scope.quizId+''+'&categoryId='+$scope.categoryId;
              if($scope.syncQuiz==1){
                $scope.friendName=$("#friendName").val();

                postData +='&friendName='+$scope.friendName;
                postData +='&friendGender='+$scope.friendGender;
                postData +='&encUserQuizId='+$scope.encUserQuizId;
              }             
              
              //console.log(postData);
              var serviceResponse = QuizService.saveUserQuiz(postData);
                serviceResponse.then(function(responseData) {
                         console.log('service response');
                         console.log(responseData);
                         if(responseData.status==1){
                          var userQuizId=responseData.data.userQuizId;
                          var encUserQuizId=responseData.data.encUserQuizId;

                          var domainUrl='/';
                          if(arrJsConfig.URL_PREFIX!=''){
                                domainUrl='/'+arrJsConfig.URL_PREFIX+'/';
                          }


                          if(responseData.data.isSync && responseData.data.isSync==1){
                            $window.location.href=domainUrl+arrJsConfig.RESULT_QUIZ_URL+'/'+$scope.encUserQuizId;
                          }else{
                            $window.location.href=domainUrl+arrJsConfig.SHARE_QUIZ_URL+'/'+encUserQuizId;
                          }
                          
                         }else{
                          $window.location.href='/';
                         }
                }); 
          }
            
        }

        $scope.initQuestionUi=function(){
                if($('#tabs').length>0){
                  var $tabs = $('#tabs').tabs();
                }
                 
                 $scope.arrQuizDetail=arrQuizDetail;
                 //do not shuffle for sync ,a s prev question selected genretae issue
                 if(parseInt($scope.arrQuizDetail.typeId)!=arrJsConfig.QUIZ_TEST_TYPE_ID && enableQuizShuffle && $scope.syncQuiz!='1')
                    $scope.arrQuizQuestions=shuffle(arrQuizDetail.questions);
                 else 
                    $scope.arrQuizQuestions=arrQuizDetail.questions;
                 $scope.maxQuestion=arrQuizDetail.maxQuestion;
                 $scope.quizId=arrQuizDetail.id;
                 for(var i=0; i<$scope.arrQuizQuestions.length; i++){
                  $scope.arrQuizQuestions[i].isSelected=false;
                  if(i<$scope.quesSelected){
                    $scope.arrQuizQuestions[i].isSelected=true;
                  }
                 	$scope.allQuesIndex.push(i);
                 }
                 $scope.currentQuestionIndex=0; 

                $scope.userFullName=userFullName;
        				$scope.countryId=countryId;
        				$scope.categoryId=categoryId;
        				$scope.syncQuiz=syncQuiz;
        				$scope.encUserQuizId=encUserQuizId; 
                if(typeof namePostQuiz!='undefined')
                  $scope.namePostQuiz=namePostQuiz;
                else
                  $scope.namePostQuiz=0;   

        				if($scope.syncQuiz=='1'){
        					$('#changeQuesB').hide();
        				}        
                $scope.optionListClass='hlist';   
            
            $scope.resumeQuiz();
        }

         $scope.showAllQuestion=function(defaultSelQue, enableQueEditing){
          $scope.quesSelected=defaultSelQue;
          $scope.enableQueEditing=enableQueEditing;
          $scope.useMeta=1;
              $scope.initQuestionUi();
        }

        $scope.showFriendQuestion=function(enableQueEditing){
            $scope.enableUserFriendEditing=enableQueEditing;
            $scope.useMeta=1;
            $scope.initQuestionUi();$scope.questionNo++;
            $scope.showQuestion();
            
        }

        $scope.setQuestionNoSel=function(){
        	$('#questionNoList').find( "li" ).each(function( index ) {			  	
    			  	if(index<$scope.questionNo){
    			  		$(this).addClass('h-custom-tab-active');
    			  	}
    			});

          $('#questionNoList').find( "div" ).each(function( index ) {    

              if(index<$scope.questionNo){
                $(this).addClass('progress-child-active active');
              }
          });
        	
        }

        $scope.resumeQuiz=function(){
            var userQuizReponseKey='';var userQuizIndexKey='';var questionNoKey='';var currQuesIndexKey='';
            if(parseInt($scope.arrQuizDetail.typeId)==arrJsConfig.QUIZ_TEST_TYPE_ID){
                userQuizReponseKey="quiz_userQuesResponse_"+$scope.arrQuizDetail.id;
                userQuizIndexKey="quiz_userQuesIndex_"+$scope.arrQuizDetail.id;
                questionNoKey="quiz_questionNo_"+$scope.arrQuizDetail.id;
                currQuesIndexKey="quiz_currentQuestionIndex_"+$scope.arrQuizDetail.id;
                
            }else if($scope.syncQuiz=='1')
            {
                userQuizReponseKey="userQuesResponse_"+$scope.encUserQuizId;
                userQuizIndexKey="userQuesIndex_"+$scope.encUserQuizId;
                questionNoKey="questionNo_"+$scope.encUserQuizId;
                currQuesIndexKey="currentQuestionIndex_"+$scope.encUserQuizId;
            }

            let key =   localStorage.getItem(userQuizReponseKey);

            if(key!==null)
            {
                $scope.userQuesResponse     =   JSON.parse(key);
                $scope.userQuesIndex        =   JSON.parse(localStorage.getItem(userQuizIndexKey));

                $scope.questionNo           =   localStorage.getItem(questionNoKey);
                $scope.currentQuestionIndex =   localStorage.getItem(currQuesIndexKey);

                $scope.setNewQuestionIndex(0);
                $scope.showQuestion();
            }
        }

        $scope.nextQuestion=function(){
          if($scope.maxQuestion==$scope.userQuesIndex.length){
            //save test
            $scope.callSaveQuiz();
            
          }else{
              if($scope.choosenOptionIndex<0){
                $("#optionSelError").show();
              }else{
                $("#optionSelError").hide();
                $scope.choosenOption($scope.arrQuizQuestions[$scope.currentQuestionIndex].options[$scope.choosenOptionIndex].questionOptionId, $scope.arrQuizQuestions[$scope.currentQuestionIndex].options[$scope.choosenOptionIndex]);
                 $scope.choosenOptionIndex=-1;
              }
          }

            
        }

        $scope.choosenOption=function(optionId, option){
          if($scope.userQuesIndex.indexOf($scope.currentQuestionIndex)<0){
              //two times click
              $scope.userQuesIndex.push($scope.currentQuestionIndex);

                $scope.questionNo++;
                $scope.saveQuestion(optionId,option);  

                 $timeout( function(){                     

                if($scope.maxQuestion==$scope.userQuesIndex.length){
                    //save test
                    $scope.callSaveQuiz();
                    
                  }else{
                    $scope.updateProgresspercentage();
                    $scope.setNewQuestionIndex(0);
                    
                    $scope.showQuestion();
                  }
             }, 500 );  
          }else{
            //console same vent clicked
            console.log('same event clicked');
          } 

        	   	
        	
        }

        $scope.callSaveQuiz=function(){
            if($scope.syncQuiz=='1' || $scope.namePostQuiz==0){
              $scope.saveUserQuiz();
            }else{
              $("#quizDiv").hide();
              $("#name_post_quiz_div").show();

            }
        }

        $scope.updateProgresspercentage=function(){
            questionProgressPercentage=($scope.questionNo/$scope.maxQuestion)*100;
            if($("#questionProgressDiv").length){
              $("#questionProgressDiv").css('width',questionProgressPercentage+'%');              
            }
        }



        $scope.showQuestion=function(){       		 
                  
                  $scope.currentQuestion=$scope.arrQuizQuestions[$scope.currentQuestionIndex];     
                 if($scope.arrQuizQuestions[$scope.currentQuestionIndex].options[0].type=='2'){
                    $scope.optionListClass='ques_pt_sec imglist';    
                 }else{
                    $scope.optionListClass='hlist'; 
                 }          
                
                
                if(document.getElementById("question_number_border")) 
                    document.getElementById("question_number_border").scrollIntoView({behavior: "smooth"}); 
                else 
                    $window.scrollTo(0, angular.element(document.getElementById('questionH')).offsetTop); 
        
                 $scope.setQuestionNoSel();
        }

        $scope.saveQuizPostName=function(){
          var formValid=check_friend_form();
          if(formValid){
            $scope.userFullName=$("#name").val();
            $("#name_post_quiz_div").hide();            
            $scope.saveUserQuiz();
          }

        }

        $scope.saveLoveUserQuiz=function(){

          if($scope.syncQuiz==0)
            $scope.isValidForm=check_play_form();
          else
            $scope.isValidForm=check_friend_form();
            
          if($scope.isValidForm){
              $scope.userFullName=$("#name").val();

              
              $('#loadingDiv').show();
              $('#quizDiv').hide();

              var postData='';
              postData +='userFullName='+$scope.userFullName;
              postData +='&categoryId=0';
              postData +='&countryId=0';
              postData +='&quizId=0';

              if($scope.syncQuiz==1){
                $scope.crushFullName=$("#friendName").val();

                postData +='&crushFullName='+$scope.crushFullName;
                postData +='&encUserQuizId='+$scope.encUserQuizId;
              }             
              
              //console.log(postData);
              var serviceResponse = QuizService.saveUserQuiz(postData);
                serviceResponse.then(function(responseData) {
                         console.log('service response');
                         console.log(responseData);
                         if(responseData.status==1){
                          var userQuizId=responseData.data.userQuizId;
                          var encUserQuizId=responseData.data.encUserQuizId;
                          if(responseData.data.isSync && responseData.data.isSync==1){
                            $window.location.href='/'+arrJsConfig.RESULT_QUIZ_URL+'/'+$scope.encUserQuizId;
                          }else{
                            $window.location.href='/'+arrJsConfig.SHARE_QUIZ_URL+'/'+encUserQuizId;
                          }
                          
                         }else{
                          $window.location.href='/';
                         }
                }); 
          }
          
        }

        $scope.canSelectQues=function(){
            if($scope.quesSelected==$scope.maxQuestion){
                return false;
            }else{
              return true;
            }
        }

        $scope.saveUserQuiz=function(){
          $("#questionSelError").hide();
          if($scope.quesSelected>0 && $scope.canSelectQues()){
            $("#questionSelError").show();
            return false;
          }

        	$('#quizDiv').hide();
        	$('#loadingDiv').show();

        	var postData='';
        	postData +='userFullName='+$scope.userFullName;
        	postData +='&categoryId='+$scope.categoryId;
        	postData +='&countryId='+$scope.countryId;
        	postData +='&quizId='+$scope.quizId;

          

          if($scope.syncQuiz==1){
        		postData +='&encUserQuizId='+$scope.encUserQuizId;
        		postData +='&score='+$scope.score;
        		postData +='&maxScore='+$scope.maxQuestion;
        	}else if(parseInt($scope.arrQuizDetail.typeId)==arrJsConfig.QUIZ_TEST_TYPE_ID){
            postData +='&score='+$scope.score;
            postData +='&maxScore='+$scope.maxQuestion;
          }
          
        	for(var i=0;i<$scope.userQuesResponse.length; i++){
        		postData +='&userQuestionId['+i+']='+$scope.userQuesResponse[i].questionId;
        		postData +='&userQuestionOptionId['+i+']='+$scope.userQuesResponse[i].questionOptionId;
        		if($scope.syncQuiz==1 || parseInt($scope.arrQuizDetail.typeId)==arrJsConfig.QUIZ_TEST_TYPE_ID){
        			postData +='&userChQuestionOptionId['+i+']='+$scope.userQuesResponse[i].chQuestionOptionId;
        		}

            if($scope.enableFriendEditing==1){
                postData +='&choosenOptionText['+i+']='+$scope.userQuesResponse[i].choosenOptionText;
                postData +='&choosenOptionIndex['+i+']='+$scope.userQuesResponse[i].choosenOptionIndex;
            }
        		
        	}

          if($scope.quesSelected>0){
            var qIndex=0;
            for(var i=0; i<$scope.arrQuizQuestions.length; i++){
                if($scope.arrQuizQuestions[i].isSelected){
                  postData +='&userQuestionId['+qIndex+']='+$scope.arrQuizQuestions[i].questionId;
                  
                  if($scope.enableQueEditing==1){
                      postData +='&question['+qIndex+']='+$scope.arrQuizQuestions[i].question;
                  }
                  qIndex++;
                }
            }
          }
        	
          if($scope.useMeta==1)
            postData +='&useMeta='+$scope.useMeta;

          if($scope.isAonymousUser==1){
            postData +='&isAonymousUser='+$scope.isAonymousUser;
          }
        	//console.log(postData);
        	var serviceResponse = QuizService.saveUserQuiz(postData);
            serviceResponse.then(function(responseData) {
                     console.log('service response');
                     console.log(responseData);
                     if(responseData.status==1){
                     	var userQuizId=responseData.data.userQuizId;
                     	var encUserQuizId=responseData.data.encUserQuizId;

                       var domainUrl='/';
                        if(arrJsConfig.URL_PREFIX!=''){
                              domainUrl='/'+arrJsConfig.URL_PREFIX+'/';
                        }
                        
                     	if(responseData.data.isSync && responseData.data.isSync==1 && parseInt($scope.arrQuizDetail.typeId)!=arrJsConfig.QUIZ_TEST_TYPE_ID){
                     		$window.location.href=domainUrl+arrJsConfig.RESULT_QUIZ_URL+'/'+$scope.encUserQuizId;
                     	}else{
                     		$window.location.href=domainUrl+arrJsConfig.SHARE_QUIZ_URL+'/'+encUserQuizId;

                     	}
                     	
                     }else{
                     	$window.location.href='/';
                     }
            }); 
        }

        $scope.wait=function(ms){
		   var start = new Date().getTime();
		   var end = start;
		   while(end < start + ms) {
		     end = new Date().getTime();
		  }
		}
        $scope.selUnselQuestion=function(qIndex){
          
            if($scope.arrQuizQuestions[qIndex].isSelected){
               $scope.arrQuizQuestions[qIndex].isSelected= false;
               $scope.quesSelected--;
            }else if($scope.canSelectQues()){
               $scope.arrQuizQuestions[qIndex].isSelected= true;
               $scope.quesSelected++;
            }
        
          
        }

        $scope.choosenOptionIndex=-1;
        $scope.selUnselOption=function(optionIndex){
            $scope.choosenOptionIndex=optionIndex;
            for(var i=0; i<$scope.arrQuizQuestions[$scope.currentQuestionIndex].options.length; i++){
                if(i==optionIndex){
                  $scope.arrQuizQuestions[$scope.currentQuestionIndex].options[i].isSelected=true;
                }else{
                  $scope.arrQuizQuestions[$scope.currentQuestionIndex].options[i].isSelected=false;
                }
            }
            $scope.arrQuizQuestions[$scope.currentQuestionIndex].isSelected=true;
           
        }

        $scope.isAonymousUser=0;
        $scope.initAonymousFriendQuiz=function(){
            $scope.isAonymousUser=1;
        }
        $scope.changeAnonymouse=function($event, isAonymousUser){
            console.log("hi",$scope.isAonymousUser);
            $scope.isAonymousUser=isAonymousUser;
            $event.preventDefault();
        }

        $scope.checkAnonymouseFriendForm=function($event){

            if($scope.isAonymousUser==0){
                $scope.isValidForm=check_friend_form();
                if(!$scope.isValidForm){
                  $event.preventDefault();
                }
            }else{
              $scope.userFullName='n/a';
            }
        }

        $scope.saveQuestion=function(optionId, option){
               	 //save question
               	 var quesData={};
               	 quesData.questionId=$scope.currentQuestion.questionId;
               	 quesData.questionOptionId=optionId;
               	 if(parseInt($scope.arrQuizDetail.typeId)==arrJsConfig.QUIZ_TEST_TYPE_ID || $scope.syncQuiz==1){
                 	 	
                 	 	if(parseInt($scope.arrQuizDetail.typeId)==arrJsConfig.QUIZ_TEST_TYPE_ID && optionId==$scope.currentQuestion.correctOptionId){
                      $scope.score++;
                      $("#optionId"+optionId).parent('li').addClass('green');
                      $("#optionId"+optionId).parent('div').addClass('green');
                      quesData.chQuestionOptionId=$scope.currentQuestion.correctOptionId;
                    }else if(parseInt($scope.arrQuizDetail.typeId)==arrJsConfig.QUIZ_TEST_TYPE_ID){
                      quesData.chQuestionOptionId=$scope.currentQuestion.correctOptionId;
                      $("#optionId"+optionId).parent('li').addClass('red');
                      $("#optionId"+optionId).parent('div').addClass('red');
                      $("#optionId"+$scope.currentQuestion.correctOptionId).parent('li').addClass('green');
                    }else if($scope.syncQuiz==1 && optionId==$scope.currentQuestion.chQuestionOptionId){
                 	 		$scope.score++;
                 	 		$("#optionId"+optionId).parent('li').addClass('green');
                      $("#optionId"+optionId).parent('div').addClass('green');
                      quesData.chQuestionOptionId=$scope.currentQuestion.chQuestionOptionId;
                 	 	}else{
                 	 		$("#optionId"+optionId).parent('li').addClass('red');
                      $("#optionId"+optionId).parent('div').addClass('red');
                      quesData.chQuestionOptionId=$scope.currentQuestion.chQuestionOptionId;
                 	 		$("#optionId"+$scope.currentQuestion.chQuestionOptionId).parent('li').addClass('green');
                 	 	}   
               	 	
               	 }
            if($scope.enableQueEditingText==1){
                quesData.choosenOptionIndex=$scope.choosenOptionIndex;
                quesData.choosenOptionText=$scope.arrQuizQuestions[$scope.currentQuestionIndex].options[$scope.choosenOptionIndex].content;
            }
            $scope.userQuesResponse.push(quesData);
            if(parseInt($scope.arrQuizDetail.typeId)==arrJsConfig.QUIZ_TEST_TYPE_ID){
                localStorage.setItem("quiz_userQuesResponse_"+$scope.arrQuizDetail.id,JSON.stringify($scope.userQuesResponse)); 
                localStorage.setItem("quiz_userQuesIndex_"+$scope.arrQuizDetail.id,JSON.stringify($scope.userQuesIndex));
                localStorage.setItem("quiz_questionNo_"+$scope.arrQuizDetail.id,$scope.questionNo);
                localStorage.setItem("quiz_currentQuestionIndex_"+$scope.arrQuizDetail.id,$scope.currentQuestionIndex);
            }else if($scope.syncQuiz=='1')
            {
                localStorage.setItem("userQuesResponse_"+$scope.encUserQuizId,JSON.stringify($scope.userQuesResponse)); 
                localStorage.setItem("userQuesIndex_"+$scope.encUserQuizId,JSON.stringify($scope.userQuesIndex));
                localStorage.setItem("questionNo_"+$scope.encUserQuizId,$scope.questionNo);
                localStorage.setItem("currentQuestionIndex_"+$scope.encUserQuizId,$scope.currentQuestionIndex);
            }
        }

        $scope.setNewQuestionIndex=function(isChange){
               	 //change questionIndex
               	 var allQues=$scope.allQuesIndex;

               	 var remainQIndex=[];
               	 for(var i=0; i<allQues.length; i++){
               	 	var qIndex=allQues[i];
               	 	if($scope.userQuesIndex.indexOf(qIndex)<0 && (isChange==0 || $scope.currentQuestionIndex!=qIndex)){
               	 		//not attempt
               	 		remainQIndex.push(qIndex);
               	 	}
               	 }

                 /*if(isChange){
                  $scope.currentQuestionIndex=remainQIndex[Math.floor(Math.random()*remainQIndex.length)];
                 }else{
                  $scope.currentQuestionIndex=remainQIndex.shift();
                 }*/
               	 var cIndexFind=0;
                 for(var k=0; k<remainQIndex.length; k++){
                    if(cIndexFind==1){
                      //console.log(remainQIndex[k]);
                      $scope.currentQuestionIndex=remainQIndex[k];
                      break;
                    }
                    
                    if((remainQIndex[k])>=$scope.currentQuestionIndex && $scope.currentQuestionIndex!=0){
                      cIndexFind=1;
                      $scope.currentQuestionIndex=remainQIndex[k];
                      break;
                    }else if((remainQIndex[k+1])>=$scope.currentQuestionIndex && $scope.currentQuestionIndex!=0){
                      cIndexFind=1;
                    }
                    if(k==(remainQIndex.length-1))
                      cIndexFind=0;
                 }
                 //console.log(remainQIndex);
                 if(cIndexFind==0){
                    $scope.currentQuestionIndex=remainQIndex.shift();
                 }

                 if($scope.syncQuiz=='1'){
                    localStorage.setItem("currentQuestionIndex_"+$scope.encUserQuizId,$scope.currentQuestionIndex); 	 
                 }   
        }

        $scope.changeQuestion=function(){
           	$scope.setNewQuestionIndex(1);
        	$scope.showQuestion();
        }

        $scope.initSyncFriendsQuiz=function(){
            OneSignal.push(function() {
                OneSignal.getTags(function(pushTags) {   
                    var redirectUrl='/';
                    if(("quiz_sync_encid" in pushTags)){
                        console.log("pushTags-"+pushTags);
                        var encUserTagId=pushTags['quiz_sync_encid'];
                        var arrEncUserTagId=[];

                        if(encUserTagId && encUserTagId!=''){
                            arrEncUserTagId=encUserTagId.split('||');
                            var uinde=Math.floor((Math.random()*arrEncUserTagId.length));
                            if(arrEncUserTagId[uinde])
                              redirectUrl='/'+arrJsConfig.SYNC_QUIZ_URL+'/'+arrEncUserTagId[uinde];
                            else
                              redirectUrl='/'+arrJsConfig.SYNC_QUIZ_URL+'/'+arrEncUserTagId[0];
                        }
                            
                    }  
                    console.log("redirectUrl-"+redirectUrl);
                    $window.location.href=redirectUrl;    
                    
                });
            });
        }

        $scope.initResultUi=function(){
        	$(".gauge-c").css({
			"-webkit-transform": "rotate("+angle+"deg)",
			"-moz-transform": "rotate("+angle+"deg)",
			"transform": "rotate("+angle+"deg)" /* For modern
				browsers(CSS3)  */
			});

        }

        	     
}]);

myApp.controller('OtherUserStatsController',['$scope', '$window','$http','$timeout','OtherUserStatsService','getUserPopupStats',function($scope,$window ,$http, $timeout,OtherUserStatsService,getUserPopupStats){
    $scope.encUserQuizId;
    $scope.scoreboardAnonymousText='';
    $scope.arrOtherUserStat=[];$scope.arrOtherUserStatCurr=[];    
    $scope.pageLimit;$scope.startLimit;$scope.hasMaxScore=0;

    $scope.setAcoreboardAnonymousText=function(scoreboardAnonymousText){
      $scope.scoreboardAnonymousText=scoreboardAnonymousText;
    }

    $scope.getUserStats=function(encUserQuizId, userStatsPageLimit){
          $scope.encUserQuizId=encUserQuizId;
          $scope.pageLimit=userStatsPageLimit;$scope.startLimit=0;
          var serviceResponse = OtherUserStatsService.getUserStats($scope.encUserQuizId);
            serviceResponse.then(function(responseData) {
                     if(responseData.status==1 && responseData.data.length>0){
                        for(var i=0; i<responseData.data.length; i++){
                            var userData=JSON.parse(responseData.data[i]);
                            if(userData.isAonymousUser && userData.isAonymousUser==1){
                              userData.userFullName=$scope.scoreboardAnonymousText;
                            }

                           if(userData.maxScore){
                              $scope.hasMaxScore=1;
                            }
                            
                            $scope.arrOtherUserStat.push(userData);
                        }
                        otherUserStatsRecords=$scope.arrOtherUserStat;
                        $scope.loadMoreStats();
                     }else{
                        $("#userStatsImg").hide();
                        $("#nonAttemptUserStatsDiv").show();
                     }
            }); 
    }

    $scope.loadMoreStats=function(){
      var endLoop=$scope.startLimit+$scope.pageLimit;
      for(var i=$scope.startLimit;i<endLoop && i<$scope.arrOtherUserStat.length;i++){
          $scope.arrOtherUserStatCurr.push($scope.arrOtherUserStat[i]);
          $scope.startLimit++;
      }
      console.log(endLoop);
    }

    $scope.getUserPopupStats=function(id, name)
    {
        $scope.UserPopupStatsName = name;
        var serviceResponse = getUserPopupStats.getData(id);
        serviceResponse.then(function(responseData) {
    
            if(responseData.questions && responseData.questions.length>0)
            {
                $scope.UserPopupStats = responseData.questions;
            }
        }); 
    }

}]);


myApp.controller('UserThemeController',['$scope', '$window','$http','$timeout','UserThemeService',function($scope,$window ,$http, $timeout,UserThemeService){
      
        $scope.currTheme='';

        $scope.init=function(themeName)
        {
            $scope.currTheme=themeName;
        }

        $scope.toggletheme=function(themeId, themeName) 
        {
            $('body').removeClass($scope.currTheme);
            $('body').addClass(themeName);
            
            $scope.currTheme    =   themeName;
            var serviceResponse = UserThemeService.setUserTheme(themeId);
        }

}]);

var loginApp    =   angular.module('myApp');
loginApp.controller("headerController",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
    
    $scope.show_me           =   false;
    $scope.loginFormData     =   {};
    $scope.registerFormData  =   {};

    $scope.login  =   function(){
        $http({
                method  :   'POST',
                url     :   $scope.loginUrl,
                data    :   $.param($scope.loginFormData),
                headers :   {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data){
            if(data.success)
            {
                $scope.name        =   data.name;
                $scope.show_me     =   true;
                element            =   document.getElementById("navbarToggle");
                if(window.getComputedStyle(element).display!='none')
                {
                    element.click();
                }
                
                closeAllModals();
            }
            else
            {
                $scope.message = data.message;
            }
        });
    };

    $scope.register  =   function(){

        // Try to change this code into angular way.
        if(match_input('login-psw','login-confirm-psw','login-password-err'))
        {
            $http({
                    method  :   'POST',
                    url     :   $scope.registerUrl,
                    data    :   $.param($scope.registerFormData),
                    headers :   {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(data){
                if(data.success)
                {
                    $scope.name         =   data.name;
                    $scope.show_me      =   true;
                    element             =   document.getElementById("navbarToggle");
                    if(window.getComputedStyle(element).display!='none')
                    {
                        element.click();
                    }
                    closeAllModals();
                }
                else
                {
                    $scope.message = data.message;
                }
            });
        }
    };
}]);


function changeLang(obj){
  var lang=obj.value;
  var regex = new RegExp("^(http|https)://", "i");
    var match = regex.test(lang);
    if(match==true){
        url =lang;
    }else{
    var url='//'+lang+'.'+$("#mainDomainHostName").val();
    if(lang=='en')
      url='//'+$("#mainDomainHostName").val();
    }
  document.location.href  =url;
}
function closeAllModals() {

    // get modals
    const modals = document.getElementsByClassName('modal');

    // on every modal change state like in hidden modal
    for(let i=0; i<modals.length; i++) {
      modals[i].classList.remove('show');
      modals[i].setAttribute('aria-hidden', 'true');
      modals[i].setAttribute('style', 'display: none');
    }

     // get modal backdrops
     const modalsBackdrops = document.getElementsByClassName('modal-backdrop');

     // remove every modal backdrop
     for(let i=0; i<modalsBackdrops.length; i++) {
        modalsBackdrops[i].parentNode.removeChild(modalsBackdrops[i]);
     }
  }


