/* eslint-disable no-use-before-define */
import moment from 'moment';
import printMe from './printMe';

const button = document.getElementById('justAButton');

button.addEventListener('click', () => {
  const timeToAdd = createTime();
  const timeDiv = document.querySelector('.timeDiv');
  button.classList.add('button');
  timeDiv.innerHTML = timeToAdd;
  printMe();
});

function createTime() {
  const currentTime = new Date();
  const humanReadableDate = moment(currentTime).format('LLLL');

  return humanReadableDate;
}
