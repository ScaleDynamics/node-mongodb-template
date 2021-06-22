require('@warpjs/engine');
const MicroService = require('backend');

const { hello, fetchMovies } = new MicroService({
  env: 'emulator',
});

// call the warp function
hello().then((message) => {
  console.log(message);
});

fetchMovies('Star Trek').then((movies) => {
  console.log(movies);
});
