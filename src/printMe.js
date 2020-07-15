import moment from 'moment';

export default function printMe() {
  const time = new Date();
  console.log(
    `Hi there, How are you?
  The current time is ${moment(time).format('LL')}`,
  );
}
