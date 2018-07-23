var config = {
    config: {
        mixins: {
            'Magento_Ui/js/lib/validation/validator': {
                'Zs_ValidationRules/js/validation-mixin': true
            },
            'mage/validation': {
                'Zs_ValidationRules/js/validation-rule-mixin': true
            }
        }
    }/*,
    map: {
        '*': {
            "Magento_Ui/js/lib/validation/rules": "Zs_ValidationRules/js/lib/validation/rules"
        }
    }*/
};