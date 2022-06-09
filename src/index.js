import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

import { debounce } from 'lodash';

import './css/styles.css';

import { fetchCountries } from './js/fetchCountries';


const DEBOUNCE_DELAY = 300;

// Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")


// Notiflix.Notify.success("Oops, there is no country with that name")