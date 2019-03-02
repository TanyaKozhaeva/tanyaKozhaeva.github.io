//FORM VALIDATION
(function () {
        $('.user-form').each(function () {
            $(this).on('submit', function () {
                $(this).validate({
                    rules: {
                        email: 'required',
                        password: 'required'
                    },
                    messages: {
                        email: 'Введите корректный email',
                        password: 'Введите корректный пароль'
                    },
                    errorPlacement: function (error, element) {
                        element.attr("placeholder", error[0].outerText);
                    }
                });
              /*  if ($(this).valid()) {
                    let wrap = $(this)[0].closest('.form-hide-on-success');
                    console.log(wrap);
                    if (wrap) {
                        $(wrap).siblings('.form-success').show();
                        $(wrap).hide();
                    }
                }*/
              if($(this).valid()){
                $('#register-form-btn').prop('disabled', true);
                var data = $(this).serialize();
                $.ajax({
                  method: 'GET',
                  url: 'http://jsonplaceholder.typicode.com/posts',
                  data: data,
                  success: function(){
                    console.log(true)
                  },
                  error: function(){
                    console.log(false)
                  },
                  complete: function(){
                    $('#register-form-btn').prop('disabled', false);
                  }
                })
              }
                return false;
            })
        });
}());
