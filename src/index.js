import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

import { debounce } from 'lodash';

import './css/styles.css';

import { fetchCountries } from './fetchCountries';


const DEBOUNCE_DELAY = 300;
