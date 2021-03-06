define([
    'jquery',
    'jquery/validate'
], function ($, validation) {
    "use strict";

    return function () {
        $.validator.addMethod(
            'validate-country-zip',
            function (value, element) {
                var countries = {
                    CH: {zipRegex: /^([1-468][0-9]|[57][0-7]|9[0-6])[0-9]{2}$/},
                    LI: {zipRegex: /^([1-468][0-9]|[57][0-7]|9[0-6])[0-9]{2}$/},
                    DE: {zipRegex: /^(?:0[1-46-9]\d{3})|(?:[1-357-9]\d{4})|(?:[4][0-24-9]\d{3})|(?:[6][013-9]\d{3})$/}
                };

                var countryElement = $('select[name=country_id]');
                if(countryElement.length > 0){
                    var countryCode = countryElement.val();

                    if(countryCode !== '' && countries.hasOwnProperty(countryCode)) {
                        var validationRule = countries[countryCode].zipRegex;
                        return validationRule.test(value);
                    }
                }
            },
            $.mage.__('Please enter a valid zip code.')
        );
    }
});