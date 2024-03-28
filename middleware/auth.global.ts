// https://nuxt.com/docs/api/utils/define-nuxt-route-middleware
export default defineNuxtRouteMiddleware((to, from) => {
  // console.log(to, 'to')
  // console.log(from, 'from')

  // const isLoggedIn = false;
  const isLoggedIn = true;
  // // to is the destination
  // if (isLoggedIn && to.fullPath === "/custom") {
  //   return navigateTo("/");
  // }
  // if (isLoggedIn) {
  //   //redirect to the page we want to go
  //   return navigateTo(to.fullPath);
  // }
  // redirect to a login page
  // return navigateTo("/login");
  if (!isLoggedIn && to.fullPath !== "/custom") {
    return navigateTo("/custom");
  }
});
