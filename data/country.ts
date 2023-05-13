const countryData: Array<{ country: string; code: string }> = [
  {
    country: 'Afghanistan',
    code: 'AF',
  },
  {
    country: 'Albania',
    code: 'AL',
  },
  {
    country: 'Algeria',
    code: 'DZ',
  },
  {
    country: 'American Samoa',
    code: 'AS',
  },
  {
    country: 'Andorra',
    code: 'AD',
  },
  {
    country: 'Angola',
    code: 'AO',
  },
  {
    country: 'Anguilla',
    code: 'AI',
  },
  {
    country: 'Antarctica',
    code: 'AQ',
  },
  {
    country: 'Antigua and Barbuda',
    code: 'AG',
  },
  {
    country: 'Argentina',
    code: 'AR',
  },
  {
    country: 'Armenia',
    code: 'AM',
  },
  {
    country: 'Aruba',
    code: 'AW',
  },
  {
    country: 'Australia',
    code: 'AU',
  },
  {
    country: 'Austria',
    code: 'AT',
  },
  {
    country: 'Azerbaijan',
    code: 'AZ',
  },
  {
    country: 'Bahamas',
    code: 'BS',
  },
  {
    country: 'Bahrain',
    code: 'BH',
  },
  {
    country: 'Bangladesh',
    code: 'BD',
  },
  {
    country: 'Barbados',
    code: 'BB',
  },
  {
    country: 'Belarus',
    code: 'BY',
  },
  {
    country: 'Belgium',
    code: 'BE',
  },
  {
    country: 'Belize',
    code: 'BZ',
  },
  {
    country: 'Benin',
    code: 'BJ',
  },
  {
    country: 'Bermuda',
    code: 'BM',
  },
  {
    country: 'Bhutan',
    code: 'BT',
  },
  {
    country: 'Bolivia',
    code: 'BO',
  },
  {
    country: 'Bosnia and Herzegovina',
    code: 'BA',
  },
  {
    country: 'Botswana',
    code: 'BW',
  },
  {
    country: 'Bouvet Island',
    code: 'BV',
  },
  {
    country: 'Brazil',
    code: 'BR',
  },
  {
    country: 'British Indian Ocean Territory',
    code: 'IO',
  },
  {
    country: 'British Virgin Islands',
    code: 'VG',
  },
  {
    country: 'Brunei',
    code: 'BN',
  },
  {
    country: 'Bulgaria',
    code: 'BG',
  },
  {
    country: 'Burkina Faso',
    code: 'BF',
  },
  {
    country: 'Burundi',
    code: 'BI',
  },
  {
    country: 'Cambodia',
    code: 'KH',
  },
  {
    country: 'Cameroon',
    code: 'CM',
  },
  {
    country: 'Canada',
    code: 'CA',
  },
  {
    country: 'Cape Verde',
    code: 'CV',
  },
  {
    country: 'Caribbean Netherlands',
    code: 'BQ',
  },
  {
    country: 'Cayman Islands',
    code: 'KY',
  },
  {
    country: 'Central African Republic',
    code: 'CF',
  },
  {
    country: 'Chad',
    code: 'TD',
  },
  {
    country: 'Chile',
    code: 'CL',
  },
  {
    country: 'China',
    code: 'CN',
  },
  {
    country: 'Christmas Island',
    code: 'CX',
  },
  {
    country: 'Cocos (Keeling) Islands',
    code: 'CC',
  },
  {
    country: 'Colombia',
    code: 'CO',
  },
  {
    country: 'Comoros',
    code: 'KM',
  },
  {
    country: 'Cook Islands',
    code: 'CK',
  },
  {
    country: 'Costa Rica',
    code: 'CR',
  },
  {
    country: 'Croatia',
    code: 'HR',
  },
  {
    country: 'Cuba',
    code: 'CU',
  },
  {
    country: 'Curaçao',
    code: 'CW',
  },
  {
    country: 'Cyprus',
    code: 'CY',
  },
  {
    country: 'Czechia',
    code: 'CZ',
  },
  {
    country: 'Denmark',
    code: 'DK',
  },
  {
    country: 'Djibouti',
    code: 'DJ',
  },
  {
    country: 'Dominica',
    code: 'DM',
  },
  {
    country: 'Dominican Republic',
    code: 'DO',
  },
  {
    country: 'DR Congo',
    code: 'CD',
  },
  {
    country: 'Ecuador',
    code: 'EC',
  },
  {
    country: 'Egypt',
    code: 'EG',
  },
  {
    country: 'El Salvador',
    code: 'SV',
  },
  {
    country: 'Equatorial Guinea',
    code: 'GQ',
  },
  {
    country: 'Eritrea',
    code: 'ER',
  },
  {
    country: 'Estonia',
    code: 'EE',
  },
  {
    country: 'Eswatini',
    code: 'SZ',
  },
  {
    country: 'Ethiopia',
    code: 'ET',
  },
  {
    country: 'Falkland Islands',
    code: 'FK',
  },
  {
    country: 'Faroe Islands',
    code: 'FO',
  },
  {
    country: 'Fiji',
    code: 'FJ',
  },
  {
    country: 'Finland',
    code: 'FI',
  },
  {
    country: 'France',
    code: 'FR',
  },
  {
    country: 'French Guiana',
    code: 'GF',
  },
  {
    country: 'French Polynesia',
    code: 'PF',
  },
  {
    country: 'French Southern and Antarctic Lands',
    code: 'TF',
  },
  {
    country: 'Gabon',
    code: 'GA',
  },
  {
    country: 'Gambia',
    code: 'GM',
  },
  {
    country: 'Georgia',
    code: 'GE',
  },
  {
    country: 'Germany',
    code: 'DE',
  },
  {
    country: 'Ghana',
    code: 'GH',
  },
  {
    country: 'Gibraltar',
    code: 'GI',
  },
  {
    country: 'Greece',
    code: 'GR',
  },
  {
    country: 'Greenland',
    code: 'GL',
  },
  {
    country: 'Grenada',
    code: 'GD',
  },
  {
    country: 'Guadeloupe',
    code: 'GP',
  },
  {
    country: 'Guam',
    code: 'GU',
  },
  {
    country: 'Guatemala',
    code: 'GT',
  },
  {
    country: 'Guernsey',
    code: 'GG',
  },
  {
    country: 'Guinea',
    code: 'GN',
  },
  {
    country: 'Guinea-Bissau',
    code: 'GW',
  },
  {
    country: 'Guyana',
    code: 'GY',
  },
  {
    country: 'Haiti',
    code: 'HT',
  },
  {
    country: 'Heard Island and McDonald Islands',
    code: 'HM',
  },
  {
    country: 'Honduras',
    code: 'HN',
  },
  {
    country: 'Hong Kong',
    code: 'HK',
  },
  {
    country: 'Hungary',
    code: 'HU',
  },
  {
    country: 'Iceland',
    code: 'IS',
  },
  {
    country: 'India',
    code: 'IN',
  },
  {
    country: 'Indonesia',
    code: 'ID',
  },
  {
    country: 'Iran',
    code: 'IR',
  },
  {
    country: 'Iraq',
    code: 'IQ',
  },
  {
    country: 'Ireland',
    code: 'IE',
  },
  {
    country: 'Isle of Man',
    code: 'IM',
  },
  {
    country: 'Israel',
    code: 'IL',
  },
  {
    country: 'Italy',
    code: 'IT',
  },
  {
    country: 'Ivory Coast',
    code: 'CI',
  },
  {
    country: 'Jamaica',
    code: 'JM',
  },
  {
    country: 'Japan',
    code: 'JP',
  },
  {
    country: 'Jersey',
    code: 'JE',
  },
  {
    country: 'Jordan',
    code: 'JO',
  },
  {
    country: 'Kazakhstan',
    code: 'KZ',
  },
  {
    country: 'Kenya',
    code: 'KE',
  },
  {
    country: 'Kiribati',
    code: 'KI',
  },
  {
    country: 'Kosovo',
    code: 'XK',
  },
  {
    country: 'Kuwait',
    code: 'KW',
  },
  {
    country: 'Kyrgyzstan',
    code: 'KG',
  },
  {
    country: 'Laos',
    code: 'LA',
  },
  {
    country: 'Latvia',
    code: 'LV',
  },
  {
    country: 'Lebanon',
    code: 'LB',
  },
  {
    country: 'Lesotho',
    code: 'LS',
  },
  {
    country: 'Liberia',
    code: 'LR',
  },
  {
    country: 'Libya',
    code: 'LY',
  },
  {
    country: 'Liechtenstein',
    code: 'LI',
  },
  {
    country: 'Lithuania',
    code: 'LT',
  },
  {
    country: 'Luxembourg',
    code: 'LU',
  },
  {
    country: 'Macau',
    code: 'MO',
  },
  {
    country: 'Madagascar',
    code: 'MG',
  },
  {
    country: 'Malawi',
    code: 'MW',
  },
  {
    country: 'Malaysia',
    code: 'MY',
  },
  {
    country: 'Maldives',
    code: 'MV',
  },
  {
    country: 'Mali',
    code: 'ML',
  },
  {
    country: 'Malta',
    code: 'MT',
  },
  {
    country: 'Marshall Islands',
    code: 'MH',
  },
  {
    country: 'Martinique',
    code: 'MQ',
  },
  {
    country: 'Mauritania',
    code: 'MR',
  },
  {
    country: 'Mauritius',
    code: 'MU',
  },
  {
    country: 'Mayotte',
    code: 'YT',
  },
  {
    country: 'Mexico',
    code: 'MX',
  },
  {
    country: 'Micronesia',
    code: 'FM',
  },
  {
    country: 'Moldova',
    code: 'MD',
  },
  {
    country: 'Monaco',
    code: 'MC',
  },
  {
    country: 'Mongolia',
    code: 'MN',
  },
  {
    country: 'Montenegro',
    code: 'ME',
  },
  {
    country: 'Montserrat',
    code: 'MS',
  },
  {
    country: 'Morocco',
    code: 'MA',
  },
  {
    country: 'Mozambique',
    code: 'MZ',
  },
  {
    country: 'Myanmar',
    code: 'MM',
  },
  {
    country: 'Namibia',
    code: 'NA',
  },
  {
    country: 'Nauru',
    code: 'NR',
  },
  {
    country: 'Nepal',
    code: 'NP',
  },
  {
    country: 'Netherlands',
    code: 'NL',
  },
  {
    country: 'New Caledonia',
    code: 'NC',
  },
  {
    country: 'New Zealand',
    code: 'NZ',
  },
  {
    country: 'Nicaragua',
    code: 'NI',
  },
  {
    country: 'Niger',
    code: 'NE',
  },
  {
    country: 'Nigeria',
    code: 'NG',
  },
  {
    country: 'Niue',
    code: 'NU',
  },
  {
    country: 'Norfolk Island',
    code: 'NF',
  },
  {
    country: 'North Korea',
    code: 'KP',
  },
  {
    country: 'North Macedonia',
    code: 'MK',
  },
  {
    country: 'Northern Mariana Islands',
    code: 'MP',
  },
  {
    country: 'Norway',
    code: 'NO',
  },
  {
    country: 'Oman',
    code: 'OM',
  },
  {
    country: 'Pakistan',
    code: 'PK',
  },
  {
    country: 'Palau',
    code: 'PW',
  },
  {
    country: 'Palestine',
    code: 'PS',
  },
  {
    country: 'Panama',
    code: 'PA',
  },
  {
    country: 'Papua New Guinea',
    code: 'PG',
  },
  {
    country: 'Paraguay',
    code: 'PY',
  },
  {
    country: 'Peru',
    code: 'PE',
  },
  {
    country: 'Philippines',
    code: 'PH',
  },
  {
    country: 'Pitcairn Islands',
    code: 'PN',
  },
  {
    country: 'Poland',
    code: 'PL',
  },
  {
    country: 'Portugal',
    code: 'PT',
  },
  {
    country: 'Puerto Rico',
    code: 'PR',
  },
  {
    country: 'Qatar',
    code: 'QA',
  },
  {
    country: 'Republic of the Congo',
    code: 'CG',
  },
  {
    country: 'Romania',
    code: 'RO',
  },
  {
    country: 'Russia',
    code: 'RU',
  },
  {
    country: 'Rwanda',
    code: 'RW',
  },
  {
    country: 'Réunion',
    code: 'RE',
  },
  {
    country: 'Saint Barthélemy',
    code: 'BL',
  },
  {
    country: 'Saint Helena, Ascension and Tristan da Cunha',
    code: 'SH',
  },
  {
    country: 'Saint Kitts and Nevis',
    code: 'KN',
  },
  {
    country: 'Saint Lucia',
    code: 'LC',
  },
  {
    country: 'Saint Martin',
    code: 'MF',
  },
  {
    country: 'Saint Pierre and Miquelon',
    code: 'PM',
  },
  {
    country: 'Saint Vincent and the Grenadines',
    code: 'VC',
  },
  {
    country: 'Samoa',
    code: 'WS',
  },
  {
    country: 'San Marino',
    code: 'SM',
  },
  {
    country: 'Saudi Arabia',
    code: 'SA',
  },
  {
    country: 'Senegal',
    code: 'SN',
  },
  {
    country: 'Serbia',
    code: 'RS',
  },
  {
    country: 'Seychelles',
    code: 'SC',
  },
  {
    country: 'Sierra Leone',
    code: 'SL',
  },
  {
    country: 'Singapore',
    code: 'SG',
  },
  {
    country: 'Sint Maarten',
    code: 'SX',
  },
  {
    country: 'Slovakia',
    code: 'SK',
  },
  {
    country: 'Slovenia',
    code: 'SI',
  },
  {
    country: 'Solomon Islands',
    code: 'SB',
  },
  {
    country: 'Somalia',
    code: 'SO',
  },
  {
    country: 'South Africa',
    code: 'ZA',
  },
  {
    country: 'South Georgia',
    code: 'GS',
  },
  {
    country: 'South Korea',
    code: 'KR',
  },
  {
    country: 'South Sudan',
    code: 'SS',
  },
  {
    country: 'Spain',
    code: 'ES',
  },
  {
    country: 'Sri Lanka',
    code: 'LK',
  },
  {
    country: 'Sudan',
    code: 'SD',
  },
  {
    country: 'Suriname',
    code: 'SR',
  },
  {
    country: 'Svalbard and Jan Mayen',
    code: 'SJ',
  },
  {
    country: 'Sweden',
    code: 'SE',
  },
  {
    country: 'Switzerland',
    code: 'CH',
  },
  {
    country: 'Syria',
    code: 'SY',
  },
  {
    country: 'São Tomé and Príncipe',
    code: 'ST',
  },
  {
    country: 'Taiwan',
    code: 'TW',
  },
  {
    country: 'Tajikistan',
    code: 'TJ',
  },
  {
    country: 'Tanzania',
    code: 'TZ',
  },
  {
    country: 'Thailand',
    code: 'TH',
  },
  {
    country: 'Timor-Leste',
    code: 'TL',
  },
  {
    country: 'Togo',
    code: 'TG',
  },
  {
    country: 'Tokelau',
    code: 'TK',
  },
  {
    country: 'Tonga',
    code: 'TO',
  },
  {
    country: 'Trinidad and Tobago',
    code: 'TT',
  },
  {
    country: 'Tunisia',
    code: 'TN',
  },
  {
    country: 'Turkey',
    code: 'TR',
  },
  {
    country: 'Turkmenistan',
    code: 'TM',
  },
  {
    country: 'Turks and Caicos Islands',
    code: 'TC',
  },
  {
    country: 'Tuvalu',
    code: 'TV',
  },
  {
    country: 'Uganda',
    code: 'UG',
  },
  {
    country: 'Ukraine',
    code: 'UA',
  },
  {
    country: 'United Arab Emirates',
    code: 'AE',
  },
  {
    country: 'United Kingdom',
    code: 'GB',
  },
  {
    country: 'United States',
    code: 'US',
  },
  {
    country: 'United States Minor Outlying Islands',
    code: 'UM',
  },
  {
    country: 'United States Virgin Islands',
    code: 'VI',
  },
  {
    country: 'Uruguay',
    code: 'UY',
  },
  {
    country: 'Uzbekistan',
    code: 'UZ',
  },
  {
    country: 'Vanuatu',
    code: 'VU',
  },
  {
    country: 'Vatican City',
    code: 'VA',
  },
  {
    country: 'Venezuela',
    code: 'VE',
  },
  {
    country: 'Vietnam',
    code: 'VN',
  },
  {
    country: 'Wallis and Futuna',
    code: 'WF',
  },
  {
    country: 'Western Sahara',
    code: 'EH',
  },
  {
    country: 'Yemen',
    code: 'YE',
  },
  {
    country: 'Zambia',
    code: 'ZM',
  },
  {
    country: 'Zimbabwe',
    code: 'ZW',
  },
  {
    country: 'Åland Islands',
    code: 'AX',
  },
];

export default countryData;
