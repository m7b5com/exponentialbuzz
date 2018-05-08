(function($){
    $(document).ready(function(){

        // WHY PPC SECTION

        if($(window).width() > 980) {

            $('.er-boxes').click(function(){
                var triangle = ".why-ppc-red-triangle";
                var active = "red-triangle-active";

                $('.er-boxes').removeClass('first');
                !$(this).each(function(){
                    $(triangle).removeClass(active);
                });

                $(this).find(triangle).addClass(active);
            });

            var whyTitle = "#why-ppc-section-title";
            var whyText = "#why-ppc-section-text";

            // PAID SEARCH TEXT CHANGE
            $('#druga-slika').click(function(){
                var paidSearchTitle = $('#why-ppc-paid-search-title').text();
                var paidSearchText = $('#why-ppc-paid-search-text').text();

                $(whyTitle).html(paidSearchTitle);
                $(whyText).html(paidSearchText);
            });

            // DISPLAY TEXT CHANGE
            $('#prva-slika').click(function(){
                var displayTitle = $('#why-ppc-display-title').text();
                var displayText = $('#why-ppc-display-text').text();

                $(whyTitle).html(displayTitle);
                $(whyText).html(displayText);
            });

            // SOCIAL ADS TEXT CHANGE
            $('#treca-slika').click(function(){
                var socialAdsTitle = $('#why-ppc-social-ads-title').text();
                var socialAdsText = $('#why-ppc-social-ads-text').text();

                $(whyTitle).html(socialAdsTitle);
                $(whyText).html(socialAdsText);
            });

            // REMARKETING TEXT CHANGE
            $('#cetvrta-slika').click(function(){
                var remarketingTitle = $('#why-ppc-remarketing-title').text();
                var remarketingText = $('#why-ppc-remarketing-text').text();

                $(whyTitle).html(remarketingTitle);
                $(whyText).html(remarketingText);
            });
        }
    });

 })(jQuery);
