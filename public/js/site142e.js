/*
    Common functions and jquery code for site.
    
    To Do:
    Convert as much code as possible into angular.js
*/

function change_gender_state(obj, inputId, genderValue, genderGroupClass){

    $("#"+inputId).val(genderValue);
    $("."+genderGroupClass).removeClass('select');
    $(obj).addClass('select');
}

var currTheme='';
function toggletheme(themeName) {
    $('body').addClass(themeName);
    if(currTheme!=''){
        $('body').removeClass(currTheme);
    }
    currTheme=themeName;
}
function toggleLoveMeterMenu()
{
    let menuLinkHandler = document.getElementById('menuLinkHandler');
    let menuHeading = document.getElementById('menuHeading');
    let menuLink = document.getElementById('menuLink');
    if(menuLinkHandler.classList.contains('change') && menuLink.classList.contains('open_links') && menuHeading.classList.contains('open_links_padding_bottom'))
    {
        menuLinkHandler.classList.remove('change');
        menuHeading.classList.remove('open_links_padding_bottom');
        menuLink.classList.remove('open_links');
        menuLink.classList.add('left_circle');
    }
    else
    {
        menuLink.classList.remove('left_circle');
        menuLink.classList.add('open_links');
        menuLinkHandler.classList.add('change');
        menuHeading.classList.add('open_links_padding_bottom');
    }
}

function confirm_delete(alertMsg,e=false)
{
  if (confirm(alertMsg) == true) 
    {
        return true
    } 
    else
    {
        if(e!==false)
        {
            e.preventDefault();
        }
        return false;
    }
}

function match_input(id1,id2,err='',e=false)
{
    let val1    =   $("#"+id1).val();
    let val2    =   $("#"+id2).val();
    if(val1==val2)
    {
        return true;
    }
    else
    {
        if(e!=false)
           e.preventDefault();
        if(err!='')
            $("#"+err).show();
        return false;
    }
}

// Share Page Copy Text
let copyLink = document.getElementById('copy-link');
if (copyLink)
{
    copyLink.addEventListener("click",function(event){
        let shareLink   =   document.getElementById("linkDiv");
        var range       =   document.createRange();
        range.selectNodeContents(shareLink);
        var sel         =   window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        document.execCommand("copy");
        document.getElementsByClassName("link-copied")[0].style.visibility='visible';
    });
}

function country_selected(id, name){
    $("#countryId").val(id);
	$("#country_dropdown_text").html(name);
    $('.countryMsg').hide();
    $('#country_selector').hide();
}

function check_play_form(name,e){
    var isvalid=true;
    
    $('.nameMsg').hide();
    $('.genderMsg').hide();
    $('.countryMsg').hide();
    $('.atinnameMsg').hide();
    $(".curseWordMsg").hide();
    
	if($("#name").val()==''){
		$('.nameMsg').show();
		isvalid=false;
    }
    
    if(document.getElementById("countryId"))
    {
        if($("#countryId").val()=='' || $("#countryId").val()=='0'){
            $('.countryMsg').show();
            isvalid=false;
        }
    }

    if(document.getElementById("gender"))
    {
        if($("#gender").val()=='' || $("#gender").val()==''){
            $('.genderMsg').show();
            isvalid=false;
        }
    }

	var name	=	$("#name").val();
	if(name.indexOf('@') != -1){
		$('.atinnameMsg').show();
		isvalid=false;
    }
    
    if(abusive_words_list.length>0){
        const regexp = new RegExp(`\\b^.*(${abusive_words_list.join('|')}).*$\\b`, 'gi');
        const is_found = name.match(regexp);
        if(is_found)
        {
            isvalid=false;
            $(".curseWordMsg").show();
        }
    }
    

	return isvalid;
}

function check_friend_form(){
	var isvalid=true;

    $('.nameMsg').hide();
    $('.genderMsg').hide();
    $('.atinnameMsg').hide();
    $(".curseWordMsg").hide();

    $('.crushnameMsg').hide();
    $('.crushgenderMsg').hide();
    $('.crushatinnameMsg').hide();
    $(".crushcurseWordMsg").hide();
    var name	=	$("#name").val();
    
    if(document.getElementById("gender"))
    {
        if($("#gender").val()=='' || $("#gender").val()==''){
            $('.genderMsg').show();
            isvalid=false;
        }
    }

    if(name==''){
		$('.nameMsg').show();
		isvalid=false;
    }

	if(name.indexOf('@') != -1){
		$('.atinnameMsg').show();
		isvalid=false;
    }

    if(abusive_words_list.length>0){
        const regexp = new RegExp(`\\b^.*(${abusive_words_list.join('|')}).*$\\b`, 'gi');
        const is_found = name.match(regexp);
        if(is_found)
        {
            isvalid=false;
            $(".curseWordMsg").show();
        }
    }


    ////////crush
    

    if(document.getElementById("friendGender"))
    {
        if($("#friendGender").val()=='' || $("#friendGender").val()==''){
            $('.crushgenderMsg').show();
            isvalid=false;
        }
    }
    
    if(document.getElementById("friendName"))
    {
        name    =   $("#friendName").val();
        if(name==''){
            $('.crushnameMsg').show();
            isvalid=false;
        }

        if(name.indexOf('@') != -1){
            $('.crushatinnameMsg').show();
            isvalid=false;
        }

        if(abusive_words_list.length>0){
            const regexp = new RegExp(`\\b^.*(${abusive_words_list.join('|')}).*$\\b`, 'gi');
            const is_found = name.match(regexp);
            if(is_found)
            {
                isvalid=false;
                $(".crushcurseWordMsg").show();
            }
        }
    }
    
    

	return isvalid;
}

function select_langauge(lang, catId)
{
    let mdhn         =   document.getElementById("mainDomainHostName").value;
    let tracking    =   document.getElementById("change_lang").getAttribute('data-href');

    var regex = new RegExp("^(http|https)://", "i");
    var match = regex.test(lang);
    if(match==true){
        url =lang;
    }else{

        var url='//'+lang+'.'+mdhn;
        if(lang=='en')
        url='//'+mdhn;
        
        tracking = tracking.replace("{CATID}", catId);
        console.log(tracking);
        if(parseInt(catId)!=0)
            url=url+tracking;
    }

    document.location.href  =   url;
}

function fb_share(fbUrl){
  var sTop = window.screen.height/2-(280);

  var sLeft = window.screen.width/2-(310);  
  var fb_share_opener = window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(fbUrl),'sharer','toolbar=0,status=0,width=800,height=420,top='+sTop+',left='+sLeft);
}


function snapchat_share(shareUrl){

}

function instagram_share(shareUrl){

}

function whatsapp_status_share(shareUrl){

}


function sendPushTags(tags)
{
    OneSignal.push(function() {
        OneSignal.sendTags(tags);
    });    
}

//To send a single tag.
function sendPushTag(key, value)
{
    OneSignal.push(function() {
        OneSignal.sendTag(key, value);
    });             
} 
var pushEncUserQuizId;var pushState;
function getPushTags()
{
    OneSignal.push(function() {
        OneSignal.getTags(function(tags) {          
            postGetPushTagsIncrSyncCount(tags,pushEncUserQuizId,pushState);
        });
    });
} 
 

function incrSyncCount(encUserQuizId,state)
{
    pushState=state;
    pushEncUserQuizId=encUserQuizId;
    getPushTags();
}

function postGetPushTagsIncrSyncCount(pushTags, encUserQuizId,state){

    console.log("Push Tags Rec-");
    console.log(pushTags);console.log(encUserQuizId);console.log(state);
    if(encUserQuizId!='' && ("quiz_sync_count" in pushTags))
    {
        count=parseInt(pushTags['quiz_sync_count']);
        var encUserTagId=pushTags['quiz_sync_encid'];
        var arrEncUserTagId=[];

        if(encUserTagId && encUserTagId!='')
            arrEncUserTagId=encUserTagId.split('||');

        var existSyncId=0;var arrResutlEncId=[];

        for(var i=0; i<arrEncUserTagId.length; i++){
            if(arrEncUserTagId[i]==encUserQuizId){
                existSyncId=1;
            }else if(state==2){
                arrResutlEncId.push(arrEncUserTagId[i]);
            }
        }
        count=pushTags['quiz_sync_count'];
        if(state==0 && existSyncId==0){
            count   =   parseInt(pushTags['quiz_sync_count']) + 1;
            arrEncUserTagId.push(encUserQuizId);
        }else if(state==2 && existSyncId==1){            
            count   =   parseInt(pushTags['quiz_sync_count']) - 1;
            count=(count>0)?count:0;
            arrEncUserTagId=arrResutlEncId;
        }            
        sendPushTag('quiz_sync_count',count);
        encUserTagId='';
        if(arrEncUserTagId.length>0){
            encUserTagId=arrEncUserTagId.join("||");
        }
        sendPushTag('quiz_sync_encid',encUserTagId);
        
        
    }
    else if(encUserQuizId!='' && state==0)
    {
        sendPushTag('quiz_sync_count',1);
        sendPushTag('quiz_sync_encid',encUserQuizId);
    }
}

function loadMoreStats(is_share)
{
    let delurl  =   $('#userStatsTableFooter').attr('data-custom1');
    let delmsg  =   $('#userStatsTableFooter').attr('data-custom2');
    nextRecord  =   nextRecord+userStatsPageLimit;
    if(is_share)
    {
        for(i=nextRecord;i<nextRecord+userStatsPageLimit && i<otherUserStatsRecords.length;i++)
        {
            $('#userStatsTable tbody:last-child').append('<tr><td>'+otherUserStatsRecords[i].userFullName+'</td><td>'+otherUserStatsRecords[i].score+'/'+otherUserStatsRecords[i].maxScore+'</td></tr>');
        }
    }
    else
    {
        for(i=nextRecord;i<nextRecord+userStatsPageLimit && i<otherUserStatsRecords.length;i++)
        {
            $('#userStatsTable tbody:last-child').append('<tr><td><a href="#" data-toggle="modal" data-target="#userStatsModal" data-id="'+otherUserStatsRecords[i].id+'"> '+otherUserStatsRecords[i].userFullName+'</a></td><td>'+otherUserStatsRecords[i].score+'/'+otherUserStatsRecords[i].maxScore+'</td><td><a href="'+delurl+otherUserStatsRecords[i].id+'" class="btn" onclick="return confirm_delete("'+delmsg+'",event)"><span class="glyphicon glyphicon-trash"></span></td></tr>');
        }
    }

    if(nextRecord>=otherUserStatsRecords.length)
    {
        $('#userStatsTableFooter').hide();
    }
}

// To Do
// Convert this into angular.js code

$( document ).ready(function() {

    $('#login-confirm-psw').focus(function(){
        $('#login-password-err').hide();
    });

    $('#country_dropdown').click(function(){
        $('#country_selector').slideToggle();
    });

    // if($('#userStatsModal').length>0){
    //     $('#userStatsModal').on('show.bs.modal', function (e) {
    //         let id      =   $(e.relatedTarget).data('id');
    //         let name    =   $(e.relatedTarget).html();
    //         $('.modal-title',this).html(name+"'s answers");
    //         $.ajax({
    //                     url     :   '/get-quiz-by-user-quiz-id',
    //                     method  :   'post',
    //                     data    :   {id,id},
    //                     dataType:   'json'
    //         }).done(function(data){
    //             let html     =   '';
    //             questions  =   data.questions;
    //             questions.forEach(function(question){
    //                 html     +=   '<div class="row">'+
    //                                 '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12">'+
    //                                     '<div class="userStatsModal-box">Q. '+question.question+'<br>';
    //                 options =   question.options;
    //                 options.forEach(function(option){
    //                     if(question.chQuestionOptionId==option.questionOptionId)
    //                     {
    //                         if(question.AlQuestionOptionId==question.chQuestionOptionId)
    //                             html            +=  '<div class="userStatsModal-correct">'+option.content+'</div>';
    //                         else
    //                             html            +=  '<div class="userStatsModal-wrong">'+option.content+'</div>';
    //                     }

    //                 });
    //                 html            +=  '</div></div></div>';    
    //             });
    //             $('#userStatsModalBody').append(html);
    //         });
    //     });

    //     $('#userStatsModal').on('hidden.bs.modal', function () {
    //         $('.modal-title',this).empty();
    //         $('#userStatsModalBody').empty();
    //     });
    // }

    if(document.getElementById("kakao-link-btn")){
        url =   document.getElementById("kakao-link-btn").getAttribute("data-url");
        Kakao.init('efea97f7053b32bb5acdb88fc42d1d85');
        Kakao.Link.createScrapButton({
            container: '#kakao-link-btn',
            requestUrl: url
        });    
    }
    
});

function shareStory() 
{ 
    url     =   document.getElementById("kakao-link-btn").getAttribute("data-url");
    text    =   document.getElementById("kakao-link-btn").getAttribute("data-text");
    Kakao.Story.open({
            url       : url,
            text      : text
        }); 
}


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  function copy_share_url(){
    var el = document.getElementById('linkDiv');
      var range = document.createRange();
      range.selectNodeContents(el);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      document.execCommand('copy');
      $('.copy').show();
      document.getElementsByClassName("link-copied")[0].style.visibility='visible';
  }