function LazyDirective() {

  return {
    restrict: 'C',
    link: (scope, element) => {
      setTimeout(function() {
            element.lazyload({
              effect: 'fadeIn',
              effectspeed: 500,
              threshold : 500,
              'skip_invisible': false
            });
      });
    }
  };
}

export default {
  name: 'imglazy',
  fn: LazyDirective
};
