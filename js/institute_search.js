// const institueName = document.querySelector(".nameofinstitue");
const searchBox = document.querySelector(".ipbox");
const noResultElement = document.getElementById("noresult");
const clearResult = document.getElementById("clear");

const coursesList = document.querySelectorAll(".institutes");

const searchFunction = () => {
  const searchValue = searchBox.value.toLowerCase().trim();
  let matchFound = false;

  coursesList.forEach((course) => {
    const courseHeading = course.querySelector(".nameofinstitue");
    if (
      !searchValue ||
      courseHeading.textContent.toLowerCase().includes(searchValue)
    ) {
      course.style.display = "block";
      matchFound = true;
    } else {
      course.style.display = "none";
    }
  });

  !matchFound
    ? (noResultElement.style.display = "flex")
    : (noResultElement.style.display = "none");
};

clearResult.addEventListener("click", () => {
  searchBox.value = "";
  noResultElement.style.display = "none";
  coursesList.forEach((course) => (course.style.display = "block"));
});

searchBox.addEventListener("keyup", searchFunction);
