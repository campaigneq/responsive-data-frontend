// ENVELOPE-JS for nav
$(function() {
  $('.envelope-js-nav-select').click(function() {
    $(this).parents('.envelope-js-nav').find('.envelope-js-nav-option').toggleClass('opened');
    return false
  });
});

// ENVELOPE-JS for everything else
$(function() {
  $('.envelope-js-select').click(function() {
    $(this).parents('.envelope-js').find('.envelope-js-option').toggleClass('opened');
    return false
  });
  $('.envelope-js-close').click(function() {
    $(this).parents('.envelope-js').find('.envelope-js-option').toggleClass('opened');
    return false
  });
});

// ENVELOPE-JS-2 for nesting one level
$(function() {
  $('.envelope-js-2-select').click(function() {
    $(this).parents('.envelope-js-2').find('.envelope-js-2-option').toggleClass('opened');
    return false
  });
  $('.envelope-js-2-close').click(function() {
    $(this).parents('.envelope-js-2').find('.envelope-js-2-option').toggleClass('opened');
    return false
  });
});

// DATE PICKER 101
$(function() {
  $('.dates-default .envelope-js-select').click(function() {
    $(this).parents('.dates-default').toggleClass('hidden');
    return false
  });
});
$(function() {
  $('.dates .cancel').click(function() {
    $(this).parents('.dates-fields').toggleClass('opened');
		$(this).parents('.dates').find('.dates-default').toggleClass('hidden');
    return false
  });
});


// SETTINGS
$(function() {
  $('.settings-link-mobile span').click(function() {
    $('.settings-link-mobile-env').toggleClass('opened');
    return false
  });
});

// TABLE TOOLTIP
$(function() {
  $('.ceq-tabletip-icon').click(function() {
    $(this).parents('.ceq-tabletip').find('.ceq-tabletip-message').show();
    return false
  });
});
$(function() {
  $('.ceq-tabletip-close').click(function() {
    $(this).parents('.ceq-tabletip-message').hide();
    return false
  });
});
$(function() {
  $('.ceq-tabletip-message').click(function() {
    $(this).hide();
    return false
  });
});