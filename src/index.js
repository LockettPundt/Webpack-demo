/* eslint-disable no-use-before-define */
import moment from 'moment';
import './style.css';

const button = document.getElementById('justAButton');

button.addEventListener('click', () => {
  const timeToAdd = createTime();
  const timeDiv = document.querySelector('.timeDiv');
  button.classList.add('button');
  timeDiv.innerHTML = timeToAdd;
});

function createTime() {
  const currentTime = new Date();
  const humanReadableDate = moment(currentTime).format('LLLL');

  return humanReadableDate;
}
