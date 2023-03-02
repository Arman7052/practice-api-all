
// 1) একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। //

const object = {
  name: 'Arman',
  age: 23,
  address: {
    street: '27 Road, Gazipura',
    city: 'Gazipur',
    division: 'Dhaka',
    zip: '1712'

  },
  hobbies: ['reading', 'traveling', 'watching movie'],
  getPropertyValue: function (property) {
    return this[property];
  },
  isActive: true
};
//   console.log(object);


// 2) একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 


const mySelf = `Hello, my name is ${object.name}. I am ${object.age} years old. 
I live in ${object.address.street} , ${object.address.city}, ${object.address.division}.
One of my hobbies is ${object.hobbies[2]}.`;
// console.log(mySelf);


// 3.1) শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে। 

const return89 = () => 89;


// 3.2) এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে 17 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। 

const divide = (num) => {
  const number = num / 17;
  return number.toFixed(3);
}

// console.log(divide(100));


// 3.3) দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 


const numbers = (a = 0, b = 0) => {
  const number = (a + b) / 2;
  return number.toFixed(3);

};


// console.log(numbers(5));


// 3.4) একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে



const numberSum = (a=0, b=0) => {
  const a7 = a + 7;
  const b7 = b + 7;
  const totalSum = a7 + b7;
  return totalSum;
}
const result = numberSum(2);
// console.log(result);




// 4)অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 


const numberArray = [14, 21, 35, 42, 49, 42];
const arrayNumber = numberArray.map(num => Math.floor(num/7));
// console.log(arrayNumber);


