/**
 * TOGGLE SEARCH
 * change the state of the search window
 * @param {boolean} init 
 * @param {boolean} clicked 
 * @param {function} handleSearchInit 
 * @param {function} handleSearchToggle 
 */
export const toggleSearch = (init, clicked, handleSearchInit, handleSearchToggle) => {
  if (init === false) {
    handleSearchInit();
  } else if (!!clicked || !clicked) {
    handleSearchToggle();
  }
};