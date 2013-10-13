(function($){
  $.fn.tipTop = function(options){

    $.fn.tipTop.defaults = {
      position: 'top'
    }

    var options = $.extend({}, $.fn.tipTop.defaults, options);

    $.fn.setToolTipPosition = function(element){
      var toolTip = $(this),
               el = $(element);

      var width  = el.outerWidth(),
          height = el.outerHeight(),
          top    = el.position().top,
          left   = el.position().left;

      var toolTipWidth  = toolTip.outerWidth(),
          toolTipHeight = toolTip.outerHeight();

      var arrow = toolTip.find('.tip-top-arrow');

      arrow.css('left', (toolTipWidth / 2) - (arrow.outerWidth() / 2));

      switch(options.position) {
        case 'top':
          arrow.addClass('top');
          arrow.css('top', toolTipHeight);
          toolTip.css('top', (top - toolTipHeight) - arrow.outerHeight());
          break;

        case 'bottom':
          arrow.addClass('bottom');
          arrow.css('top', - (arrow.outerHeight()));
          toolTip.css('top', top + (arrow.outerHeight() * 2));
          break;
      }


      toolTip.css('left', left - (toolTipWidth / 2) + (width / 2));

      return(this);
    }

    return this.each(function(){

      var text         = $(this).data('tip-top');
      var toolTip      = $("<div class='tip-top'>" + text + "</div>");
      var toolTipArrow = $("<div class='tip-top-arrow'></div>")

      $(this).on('mouseenter', function(e){
        toolTip.append(toolTipArrow);
        $('body').append(toolTip);
        toolTip.setToolTipPosition(this).fadeIn();
      });

      $(this).on('mouseleave', function(e){
        toolTip.fadeOut(function(){
          toolTip.detach();
        });
      });
    });
  };
})(jQuery);
