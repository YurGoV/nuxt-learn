// @ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  // console.log(nuxtApp);
  return {
    provide: {
      sayHello: (msg: string) => console.log(`Hello ${msg}`),
    },
  };
});

// NOTE: often used to use 3rd paty libraries e.g. firebase etc..
//
// TODO: learn about Vue Directives
// https://nuxt.com/docs/guide/directory-structure/plugins#vue-directives
