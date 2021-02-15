/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Grid} from '@material-ui/core'
import makeStyles from './styles';





export default function SelectCountry({ half, value, handleChange, onInputChange }) {
  const classes = makeStyles();

  // const [value, setValue] = React.useState(countries[3]);
  // const [inputValue, setInputValue] = React.useState('');

  return (
    <Grid item xs={12} sm={half ? 6 : 12} md={half ? 4 : 6}>

        <Autocomplete
          value={value}
          onChange={handleChange}
          // inputValue={value}
          onInputChange={onInputChange}
          id='country'
          options={countries}
          // style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Your country:'
              name='country'
              variant='outlined'
              margin='dense'
            />
          )}
        />

    </Grid>
  );
}

const countries = [

'Abkhazia',
'Aland-islands',
'Albania',
'Algeria',
'Afghanistan',
'American-samoa',
'Andorra',
'Angola',
'Anguilla',
'Antigua-and-barbuda',
'Argentina',
'Armenia',
'Aruba',
'Australia',
'Austria',
'Azerbaijan',
'Azores-islands',
'Bahamas',
'Bahrain',
'Balearic-islands',
'Bangladesh',
'Barbados',
'Basque-country',
'Belarus',
'Belgium',
'Belize',
'Benin',
'Bermuda',
'Bhutan',
'Bolivia',
'Botswana',
'Brazil',
'Bonaire',
'Bosnia-and-herzegovina',
'British-indian-ocean-territory',
'British-virgin-islands',
'Brunei',
'Burkina-faso',
'Bulgaria',
'Burundi',
'Cambodia',
'Cameroon',
'Canada',
'Canary-islands',
'Cape-verde',
'Cayman-islands',
'Central-african-republic',
'Ceuta',
'Chad',
'Chile',
'Christmas-island',
'Cocos-island',
'British-columbia',
'Colombia',
'Cook-islands',
'China',
'Corsica',
'Costa-rica',
'Croatia',
'Cuba',
'Comoros',
'Czech-republic',
'Democratic-republic-of-congo',
'Denmark',
'Djibouti',
'Curacao',
'Dominica',
'Dominican-republic',
'East-timor',
'Ecuador',
'Egypt',
'El-salvador',
'England',
'Equatorial-guinea',
'Eritrea',
'Estonia',
'Ethiopia',
'European-union',
'Falkland-islands',
'Fiji',
'Finland',
'France',
'French-polynesia',
'Gabon',
'Galapagos-islands',
'Gambia',
'Georgia',
'Germany',
'Ghana',
'Gibraltar',
'Greece',
'Greenland',
'Grenada',
'Guam',
'Guatemala',
'Guernsey',
'Guinea-bissau',
'Guinea',
'Haiti',
'Hawaii',
'Honduras',
'Hong-kong',
'Hungary',
'Iceland',
'India',
'Indonesia',
'Iran',
'Iraq',
'Ireland',
'Isle-of-man',
'Israel',
'Italy',
'Ivory-coast',
'Jamaica',
'Japan',
'Jersey',
'Jordan',
'Kazakhstan',
'Kenya',
'Kiribati',
'Kosovo',
'Kwait',
'Kyrgyzstan',
'Laos',
'Latvia',
'Lebanon',
'Lesotho',
'Liberia',
'Libya',
'Liechtenstein',
'Lithuania',
'Luxembourg',
'Macao',
'Madagascar',
'Madeira',
'Malasya',
'Malawi',
'Maldives',
'Mali',
'Malta',
'Marshall-island',
'Martinique',
'Mauritania',
'Mauritius',
'Melilla',
'Mexico',
'Micronesia',
'Moldova',
'Monaco',
'Mongolia',
'Montenegro',
'Montserrat',
'Morocco',
'Mozambique',
'Myanmar',
'Namibia',
'Nato',
'Nauru',
'Nepal',
'Netherlands',
'New-zealand',
'Nicaragua',
'Niger',
'Nigeria',
'Niue',
'Norfolk-island',
'North-korea',
'Northern-cyprus',
'Northern-marianas-islands',
'Norway',
'Oman',
'Ossetia',
'Pakistan',
'Palau',
'Palestine',
'Panama',
'Papua-new-guinea',
'Paraguay',
'Peru',
'Philippines',
'Pitcairn-islands',
'Poland',
'Portugal',
'Puerto-rico',
'Qatar',
'Rapa-nui',
'Republic-of-macedonia',
'Republic-of-the-congo',
'Romania',
'Russia',
'Rwanda',
'Saba-island',
'Sahrawi-arab-democratic-republic',
'Saint-kitts-and-nevis',
'Samoa',
'San-marino',
'Sao-tome-and-prince',
'Sardinia',
'Saudi-arabia',
'Scotland',
'Senegal',
'Serbia',
'Seychelles',
'Sicily',
'Sierra-leone',
'Singapore',
'Sint-eustatius',
'Sint-maarten',
'Slovakia',
'Slovenia',
'Solomon-islands',
'Somalia',
'Somaliland',
'South-africa',
'South-korea',
'South-sudan',
'Spain',
'Sri-lanka',
'St-barts',
'St-lucia',
'St-vincent-and-the-grenadines',
'Sudan',
'Suriname',
'Swaziland',
'Sweden',
'Switzerland',
'Syria',
'Taiwan',
'Tajikistan',
'Tanzania',
'Thailand',
'Tibet',
'Togo',
'Tokelau',
'Tonga',
'Transnistria',
'Trinidad-and-tobago',
'Tunisia',
'Turkey',
'Turkmenistan',
'Turks-and-caicos',
'Tuvalu-1',
'Tuvalu',
'Uganda',
'Ukraine',
'United-arab-emirates',
'United-kingdom',
'United-nations',
'United-states',
'Uruguay',
'Uzbekistn',
'Vanuatu',
'Vatican-city',
'Venezuela',
'Vietnam',
'Virgin-islands',
'Wales',
'Yemen',
'Zambia',
'Zimbabwe',

];
