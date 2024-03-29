const companyStatusOptions = [
  { label: "Employeur privé", value: 1 },
  { label: "Employeur public", value: 2 },
];

export const fields = [
  {
    label: "Titre(s) RNCP rattaché(s)",
    id: "cfa_rncp",
    type: "multiselect",
    remote: "rncp",
    endpoint: "rncp_exact_title",
    mandatory: true,
  },
  {
    label: "Téléphone",
    id: "cfa_tel",
    type: "phone",
    mandatory: true,
  },
  { label: "Numéro RNCP", id: "rncp_number", type: "text", mandatory: true },
  {
    label: "Statut de l'employeur",
    id: "company_statut",
    type: "radio",
    mandatory: true,
    options: companyStatusOptions,
    fullWidth: true,
    isConditionalTrigger: true,
  },
  {
    label: "CFA d'entreprise",
    id: "cfa_type",
    type: "boolean",
    mandatory: false,
  },
];

export const PHONE_COUNTRIES = [
  {
    locale: "am-AM",
    iso2: "AM",
    validation: /^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,
  },
  { locale: "ar-AE", iso2: "AE", validation: /^((\+?971)|0)?5[024568]\d{7}$/ },
  { locale: "ar-BH", iso2: "BH", validation: /^(\+?973)?(3|6)\d{7}$/ },
  { locale: "ar-DZ", iso2: "DZ", validation: /^(\+?213|0)(5|6|7)\d{8}$/ },
  { locale: "ar-EG", iso2: "EG", validation: /^((\+?20)|0)?1[0125]\d{8}$/ },
  { locale: "ar-IQ", iso2: "IQ", validation: /^(\+?964|0)?7[0-9]\d{8}$/ },
  { locale: "ar-JO", iso2: "JO", validation: /^(\+?962|0)?7[789]\d{7}$/ },
  { locale: "ar-KW", iso2: "KW", validation: /^(\+?965)[569]\d{7}$/ },
  { locale: "ar-SA", iso2: "SA", validation: /^(!?(\+?966)|0)?5\d{8}$/ },
  { locale: "ar-SY", iso2: "SY", validation: /^(!?(\+?963)|0)?9\d{8}$/ },
  { locale: "ar-TN", iso2: "TN", validation: /^(\+?216)?[2459]\d{7}$/ },
  {
    locale: "be-BY",
    iso2: "BY",
    validation: /^(\+?375)?(24|25|29|33|44)\d{7}$/,
  },
  { locale: "bg-BG", iso2: "BG", validation: /^(\+?359|0)?8[789]\d{7}$/ },
  {
    locale: "bn-BD",
    iso2: "BD",
    validation: /^(\+?880|0)1[13456789][0-9]{8}$/,
  },
  {
    locale: "cs-CZ",
    iso2: "CZ",
    validation: /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  },
  {
    locale: "da-DK",
    iso2: "DK",
    validation: /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
  },
  {
    locale: "de-DE",
    iso2: "DE",
    validation: /^(\+49)?0?1(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,
  },
  { locale: "de-AT", iso2: "AT", validation: /^(\+43|0)\d{1,4}\d{3,12}$/ },
  { locale: "el-GR", iso2: "GR", validation: /^(\+?30|0)?(69\d{8})$/ },
  { locale: "en-AU", iso2: "AU", validation: /^(\+?61|0)4\d{8}$/ },
  { locale: "en-GB", iso2: "GB", validation: /^(\+?44|0)7\d{9}$/ },
  { locale: "en-GG", iso2: "GG", validation: /^(\+?44|0)1481\d{6}$/ },
  {
    locale: "en-GH",
    iso2: "GH",
    validation: /^(\+233|0)(20|50|24|54|27|57|26|56|23|28)\d{7}$/,
  },
  {
    locale: "en-HK",
    iso2: "HK",
    validation: /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
  },
  {
    locale: "en-MO",
    iso2: "MO",
    validation: /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
  },
  { locale: "en-IE", iso2: "IE", validation: /^(\+?353|0)8[356789]\d{7}$/ },
  { locale: "en-IN", iso2: "IN", validation: /^(\+?91|0)?[6789]\d{9}$/ },
  { locale: "en-KE", iso2: "KE", validation: /^(\+?254|0)(7|1)\d{8}$/ },
  {
    locale: "en-MT",
    iso2: "MT",
    validation: /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
  },
  { locale: "en-MU", iso2: "MU", validation: /^(\+?230|0)?\d{8}$/ },
  { locale: "en-NG", iso2: "NG", validation: /^(\+?234|0)?[789]\d{9}$/ },
  { locale: "en-NZ", iso2: "NZ", validation: /^(\+?64|0)[28]\d{7,9}$/ },
  {
    locale: "en-PK",
    iso2: "PK",
    validation:
      /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  },
  { locale: "en-RW", iso2: "RW", validation: /^(\+?250|0)?[7]\d{8}$/ },
  { locale: "en-SG", iso2: "SG", validation: /^(\+65)?[89]\d{7}$/ },
  {
    locale: "en-SL",
    iso2: "SL",
    validation: /^(?:0|94|\+94)?(7(0|1|2|5|6|7|8)( |-)?\d)\d{6}$/,
  },
  { locale: "en-TZ", iso2: "TZ", validation: /^(\+?255|0)?[67]\d{8}$/ },
  { locale: "en-UG", iso2: "UG", validation: /^(\+?256|0)?[7]\d{8}$/ },
  {
    locale: "en-US",
    iso2: "US",
    validation:
      /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
  },
  { locale: "en-ZA", iso2: "ZA", validation: /^(\+?27|0)\d{9}$/ },
  { locale: "en-ZM", iso2: "ZM", validation: /^(\+?26)?09[567]\d{7}$/ },
  { locale: "es-CL", iso2: "CL", validation: /^(\+?56|0)[2-9]\d{1}\d{7}$/ },
  {
    locale: "es-EC",
    iso2: "EC",
    validation: /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
  },
  {
    locale: "es-ES",
    iso2: "ES",
    validation: /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
  },
  { locale: "es-MX", iso2: "MX", validation: /^(\+?52)?(1|01)?\d{10,11}$/ },
  { locale: "es-PA", iso2: "PA", validation: /^(\+?507)\d{7,8}$/ },
  { locale: "es-PY", iso2: "PY", validation: /^(\+?595|0)9[9876]\d{7}$/ },
  { locale: "es-UY", iso2: "UY", validation: /^(\+598|0)9[1-9][\d]{6}$/ },
  {
    locale: "et-EE",
    iso2: "EE",
    validation: /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
  },
  {
    locale: "fa-IR",
    iso2: "IR",
    validation: /^(\+?98[-\s]?|0)9[0-39]\d[-\s]?\d{3}[-\s]?\d{4}$/,
  },
  {
    locale: "fi-FI",
    iso2: "FI",
    validation: /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
  },
  { locale: "fj-FJ", iso2: "FJ", validation: /^(\+?679)?\s?\d{3}\s?\d{4}$/ },
  {
    locale: "fo-FO",
    iso2: "FO",
    validation: /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  },
  { locale: "fr-FR", iso2: "FR", validation: /^(\+?33|0)[678912345]\d{8}$/ },
  { locale: "fr-GF", iso2: "GF", validation: /^(\+?594|0|00594)[67]\d{8}$/ },
  { locale: "fr-GP", iso2: "GP", validation: /^(\+?590|0|00590)[67]\d{8}$/ },
  { locale: "fr-MQ", iso2: "MQ", validation: /^(\+?596|0|00596)[67]\d{8}$/ },
  { locale: "fr-RE", iso2: "RE", validation: /^(\+?262|0|00262)[67]\d{8}$/ },
  {
    locale: "he-IL",
    iso2: "IL",
    validation: /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
  },
  { locale: "hu-HU", iso2: "HU", validation: /^(\+?36)(20|30|70)\d{7}$/ },
  {
    locale: "id-ID",
    iso2: "ID",
    validation:
      /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
  },
  { locale: "it-IT", iso2: "IT", validation: /^(\+?39)?\s?3\d{2} ?\d{6,7}$/ },
  {
    locale: "ja-JP",
    iso2: "JP",
    validation: /^(\+81[ -]?(\(0\))?|0)[6789]0[ -]?\d{4}[ -]?\d{4}$/,
  },
  { locale: "kk-KZ", iso2: "KZ", validation: /^(\+?7|8)?7\d{9}$/ },
  {
    locale: "kl-GL",
    iso2: "GL",
    validation: /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  },
  {
    locale: "ko-KR",
    iso2: "KR",
    validation: /^((\+?82)[ -]?)?0?1([0|1|6|7|8|9]{1})[ -]?\d{3,4}[ -]?\d{4}$/,
  },
  { locale: "lt-LT", iso2: "LT", validation: /^(\+370|8)\d{8}$/ },
  {
    locale: "ms-MY",
    iso2: "MY",
    validation:
      /^(\+?6?01){1}(([0145]{1}(-|\s)?\d{7,8})|([236789]{1}(\s|-)?\d{7}))$/,
  },
  { locale: "nb-NO", iso2: "NO", validation: /^(\+?47)?[49]\d{7}$/ },
  { locale: "ne-NP", iso2: "NP", validation: /^(\+?977)?9[78]\d{8}$/ },
  { locale: "nl-BE", iso2: "BE", validation: /^(\+?32|0)4?\d{8}$/ },
  { locale: "nl-NL", iso2: "NL", validation: /^(\+?31|0)6?\d{8}$/ },
  { locale: "nn-NO", iso2: "NO", validation: /^(\+?47)?[49]\d{7}$/ },
  {
    locale: "pl-PL",
    iso2: "PL",
    validation: /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
  },
  {
    locale: "pt-BR",
    isoBR2: "",
    phoneCodes: [],
    validation:
      /(?=^(\+?5{2}-?|0)[1-9]{2}-?\d{4}-?\d{4}$)(^(\+?5{2}-?|0)[1-9]{2}-?[6-9]{1}\d{3}-?\d{4}$)|(^(\+?5{2}-?|0)[1-9]{2}-?9[6-9]{1}\d{3}-?\d{4}$)/,
  },
  { locale: "pt-PT", iso2: "PT", validation: /^(\+?351)?9[1236]\d{7}$/ },
  {
    locale: "ro-RO",
    iso2: "RO",
    validation: /^(\+?4?0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/,
  },
  { locale: "ru-RU", iso2: "RU", validation: /^(\+?7|8)?9\d{9}$/ },
  {
    locale: "sl-SI",
    iso2: "SI",
    validation:
      /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
  },
  {
    locale: "sk-SK",
    iso2: "SK",
    validation: /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  },
  { locale: "sr-RS", iso2: "RS", validation: /^(\+3816|06)[- \d]{5,9}$/ },
  {
    locale: "sv-SE",
    iso2: "SE",
    validation: /^(\+?46|0)[\s-]?7[\s-]?[02369]([\s-]?\d){7}$/,
  },
  { locale: "th-TH", iso2: "TH", validation: /^(\+66|66|0)\d{9}$/ },
  { locale: "tr-TR", iso2: "TR", validation: /^(\+?90|0)?5\d{9}$/ },
  { locale: "uk-UA", iso2: "UA", validation: /^(\+?38|8)?0\d{9}$/ },
  {
    locale: "vi-VN",
    iso2: "VN",
    validation:
      /^(\+?84|0)((3([2-9]))|(5([2689]))|(7([0|6-9]))|(8([1-6|89]))|(9([0-9])))([0-9]{7})$/,
  },
  {
    locale: "zh-CN",
    iso2: "CN",
    validation:
      /^((\+|00)86)?1([358][0-9]|4[579]|6[67]|7[01235678]|9[189])[0-9]{8}$/,
  },
  { locale: "zh-TW", iso2: "TW", validation: /^(\+?886-?|0)?9\d{8}$/ },
];
