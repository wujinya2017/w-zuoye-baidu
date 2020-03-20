$(function(){
  var $username = $('#username'),
      $phone = $('#phone'),
      $tooltip = $('#tooltip'),
      $xiaotubiao = $('#xiaotubiao'),
      $password = $('#password'),
      $tooltip1 = $('#tooltip1'),
      $numberyan = $('#number-yan'),
      $numberbutton = $('#number-button'),
      $usernamevaliation = $('#username-valiation'),
      $telvaliation = $('#tel-valiation'),
      $passwordvaliation = $('#password-valiation'),
      $toolp1 = $('#toolp1'),
      $toolp2 = $('#toolp2'),
      $toolp3 = $('#toolp3'), 
      $buttonzhuce = $('#button-zhuce'),
      $yanzhengvaliation = $('#yanzheng-valiation');
   
  $forkMeGH.show("https://github.com/wujinya2017/w-zuoye-baidu");
  $bszPageFooter.show("body");

  $username.focus(function(){
    $tooltip.css('display','block');
    $username.css("border","1px solid #3366FF")
  })
                
  $username.blur(function(){
    $tooltip.css('display','none');
    var len = 0;
     for(var i=0;i<$username.val().length;i++){
        var c = $username.val().charCodeAt(i);
        if((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)){
          len++;
        }else{
          len+=2;
        }
    }
    if(len > 14){
      $usernamevaliation.css('display','inline');
      $username.css('border','1px solid red');
      $usernamevaliation.html('用户名不能超过7个汉字或14个字符');
    }else{
      $usernamevaliation.css('display','none');
      $username.css('border','1px solid #E0E0E0');
    }
  })
       
  $phone.focus(function(){
    $phone.css("border","1px solid #3366FF");
  })
  $phone.blur(function(){
    var str = $phone.val();
    var strTemp =  /^1[3|4|5|6|7|8|9][0-9]{9}$/;
    if(strTemp.test(str)){
      $telvaliation.css('display','none');
      $phone.css('border','1px solid #E0E0E0')
    }else{
      $telvaliation.html('手机号码格式不正确！');
      $telvaliation.css('display','inline');
      $phone.css('border','1px solid red');
    }  
  })
   
  $password.focus(function(){
    $tooltip1.css('display','block')
    $password.css("border","1px solid red");
  
  });
  $password.blur(function(){
    if($password.val() == ''){
      $passwordvaliation.css('display','inline');
      $passwordvaliation.html('密码设置不符合要求');
      $tooltip1.css('display','none');
    }else{
      $tooltip1.css('display','none');
      $password.css('border','1px solid #E0E0E0');
      $passwordvaliation.css('display','none');
        var str1 = $password.val();
        var reg=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,}$/;
        if(str1.length < 8 || str1.length > 14){
          $tooltip1.css('display','block');
          $passwordvaliation.html('密码设置不符合要求');
          $passwordvaliation.css('display','inline');
          $password.css('border','1px solid red');
          $toolp1.html('✖长度为8~14个字符');
          $toolp1.css('color','red');
        }else{
          $toolp1.html('✓长度为8~14个字符');
          $toolp1.css('color','white');
        }
        if(reg.test(str1)){
          $toolp2.html('✓字母/数字以及标点符号至少包含2种');
          $toolp2.css('color','white');
        }else{
          $tooltip1.css('display','block');
          $passwordvaliation.html('密码设置不符合要求');
          $passwordvaliation.css('display','inline');
          $password.css('border','1px solid red');
          $toolp2.html('✖字母/数字以及标点符号至少包含2种');
          $toolp2.css('color','red');
        }
        for(var i=0;i<$password.val().length;i++){
          var c1 = $password.val().charCodeAt(i);
          if(c1 >0 && c1<255 && c1 !==32){
              $toolp3.html('✓不允许有空格、中文')
              $toolp3.css('color','white');     
          }else{
            $password.css('border','1px solid red');
            $toolp3.html('✖不允许有空格、中文');
            $toolp3.css('color','red');
            $tooltip1.css('display','block');
            $passwordvaliation.html('密码设置不符合要求');
            $passwordvaliation.css('display','inline');
          }
        }
    }
  });
  $password.keypress(function(){
    if($password.val()==''){
      $tooltip1.css('display','block');
      $password.css('border','1px solid red');
    }else{
      var str1 = $password.val();
      var reg=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,}$/;
      if(str1.length < 8 || str1.length > 14){
        $password.css('border','1px solid red');
        $toolp1.html('✖长度为8~14个字符');
        $toolp1.css('color','red');
      }else{
        $toolp1.html('✓长度为8~14个字符');
        $toolp1.css('color','white');
        $password.css('border','1px solid #3366FF');
      }
      if(reg.test(str1)){
        $toolp2.html('✓字母/数字以及标点符号至少包含2种');
        $toolp2.css('color','white');

        $password.css('border','1px solid #3366FF');

       
      }else{
        $password.css('border','1px solid red');
        $toolp2.html('✖字母/数字以及标点符号至少包含2种');
        $toolp2.css('color','red');

      }
      for(var i=0;i<$password.val().length;i++){
        var c1 = $password.val().charCodeAt(i);
        if(c1 >0 && c1<255 && c1 !==32){
            $toolp3.html('✓不允许有空格、中文')
            $toolp3.css('color','white');  

            $password.css('border','1px solid #3366FF');

       
        }else{
          $password.css('border','1px solid red');
          $toolp3.html('✖不允许有空格、中文');
          $toolp3.css('color','red');
        }
      }
    }
  })

  $numberyan.focus(function(){
    $numberyan.css("border","1px solid #3366FF");
  
  })
  $numberyan.blur(function(){
    $numberyan.css("border","1px solid #E0E0E0");
  })

  $numberbutton.mouseover(function(){
    $numberbutton.css("border","1px solid #3366FF");
    $numberbutton.css('color','#3366FF');
  
  })
  $numberbutton.mouseout(function(){
    $numberbutton.css("border","1px solid #E0E0E0");
    $numberbutton.css('color','black');
  })
  $numberbutton.click(function(){
    var timer,
        i=60;
    if($phone.val() === ''){
      $telvaliation.html('请您输入手机号');
      $telvaliation.css('display','inline');
    }else{
      timer=setInterval(function(){
          i--;
          if(i === 0){
              clearInterval(timer);
              $numberbutton.val('获取验证码');
              $numberbutton.removeAttr('disabled');
              $yanzhengvaliation.css('display','none');
                     
          }else{
                $numberbutton.val('重新发送('+i+'s)');
                $numberbutton.attr('disabled',true);
                $yanzhengvaliation.css('display','inline');
                $yanzhengvaliation.html('短信验证码已发送，请您在10分钟内填写');
                $yanzhengvaliation.css('color','black');
          }
      },1000);
    } 
  })
  $('input:checkbox').click(function(){
    $buttonzhuce.css('opacity','1');
  })


});




