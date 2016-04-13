$( document ).ready( function() {

  $("#signup").validate({
    debug: true,

    // When form is submitted with no errors
    submitHandler: function( form ) {
      var $message =
        $( '<div id="success" class="message">' +
             '<h2>Congratulations.</h2>' +
             '<p>Submitting your input...</p>' +
           '</div>' );
        $( 'body' ).prepend( $message );
        setTimeout( function() {
          $( 'form' ).get( 0 ).reset();
          location.reload();
        }, 3000 );
    },

    rules: {
      email: {
        required: true,
        email: true
      },
      confirmemail: {
        required: true,
        email: true,
        equalTo: '#email'
      },
      password: {
        required: true,
        rangelength: [6, 32]
      },
      confirmpassword: {
        required: true,
        equalTo: '#password'
      }
    },

     messages: {
      email: {
        required: 'Please enter your email address.',
        email: 'Please use a valid email address.'
      },
      confirmemail: {
        equalTo: 'Your email and confirmation must match.',
        required: 'Please re-enter your email address.',
        email: 'Please use a valid email address.'
      },
      password: {
        required: 'Please enter your password.',
        rangelength: jQuery.validator.format('Your password must be ' +
                                    'between {0}-{1} characters long.')
      },
      confirmpassword: {
        required: 'Please re-enter your password.',
        equalTo: 'Your password and confirmation must match.'
      }
    }
  });

});

