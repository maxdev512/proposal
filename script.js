$(document).ready(function() {
  $('#proposal_form').bootstrapValidator({
    // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      username: {
        validators: {
          stringLength: {
            min: 3,
            max: 10,
            message: '至少3個字，最多10個字'
          },
          notEmpty: {
            message: '請填寫名稱'
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: '請填寫 E-Mail'
          },
          emailAddress: {
            message: '請填寫有效的 E-Mail'
          }
        }
      },
      // line_id: {
      //   validators: {
      //     stringLength: {
      //       min: 8,
      //     },
      //     notEmpty: {
      //       message: '請填寫 Line ID'
      //     }
      //   }
      // },
      // phone: {
      //   validators: {
      //     stringLength: {
      //       min: 8,
      //     },
      //     notEmpty: {
      //       message: '請填寫手機號碼'
      //     }
      //   }
      // },
      platform: {
        validators: {
          notEmpty: {
            message: '請選擇平台'
          }
        }
      },
      code: {
        validators: {
          regexp: {
            regexp: /^S[0-9]{4}/,
            message: '請填寫有效的代碼'
          },
          // stringLength: {
          //   min: 5, 
          //   max: 5
          // },
          notEmpty: {
            message: '請填寫代碼'
          }
        },
      },
      subject: {
        validators: {
          stringLength: {
            min: 5,
          },
          notEmpty: {
            message: '請填寫主題'
          }
        }
      },
      description: {
        validators: {
          stringLength: {
            max: 800,
          },
          notEmpty: {
            message: '請描述內容'
          }
        }
      }
  }
  })
  .on('success.form.bv', function(e) {
    $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
    $('#proposal_form').data('bootstrapValidator').resetForm();

    // Prevent form submission
    e.preventDefault();

    // Get the form instance
    var $form = $(e.target);

    // Get the BootstrapValidator instance
    var bv = $form.data('bootstrapValidator');

    // Use Ajax to submit form data
    $.post($form.attr('action'), $form.serialize(), function(result) {
        console.log(result);
    }, 'json');
  });
});
