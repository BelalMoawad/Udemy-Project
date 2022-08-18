var swiper = new Swiper(".CP", 
{
  watchoverflow : true,
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView : 1,
      slidesPerGroup : 1
    },
    550: {
      slidesPerView : 2,
      slidesPerGroup : 1
    },
    750: {
      slidesPerView : 3,
      slidesPerGroup : 2
    },
    1000: {
      slidesPerView : 4,
      slidesPerGroup : 3
    },
    1200: {
      slidesPerView : 5,
      slidesPerGroup : 4
    }
  }
});

let allCourses;

let filter = "Pythoncourses";

fetch("http://myjson.dit.upm.es/api/bins/789s")
  .then((response) => response.json())
  // get json of python cources ok
  .then((json) => {
    allCourses = json;
    let course = allCourses[filter];
    for(let courceIdx = 0; courceIdx < course.length; courceIdx++) {
        // create new div and give it a class
        let newDiv = document.createElement("div");
        newDiv.classList.add("pythonCard", "swiper-slide");
        // get an image of python course
        let courseImage = document.createElement("img");
        let a = document.createElement("a");
        // Author creation, give class, give content 
        let Author_span = document.createElement("span");
        Author_span.className = "Author";
        let Author_content = document.createTextNode(course[courceIdx].author);
        Author_span.appendChild(Author_content);
        // Price creation, give class, give content 
        let Price_span = document.createElement("span");
        Price_span.className = "Price";
        Price_span.innerHTML = "&#69;&#163;";
        let Price_content = document.createTextNode(course[courceIdx].price);
        Price_span.appendChild(Price_content);
        // get source of courseImg
        courseImage.src = course[courceIdx].image;
        // title content
        let titleContent = document.createTextNode(course[courceIdx].title);
        // a link 
        a.href = course[courceIdx].link;
        a.appendChild(courseImage);
        a.appendChild(titleContent);
        a.appendChild(Author_span);
        a.appendChild(Price_span);
        // appent link to newDiv
        newDiv.append(a);
        document.querySelector(".pythonCards").appendChild(newDiv);
    }
  });


function printList(course_name) 
{

  let pythonCards = document.querySelector(".pythonCards");
  pythonCards.innerHTML = "";
  filter = course_name;
  let course = allCourses[filter];
    for(let courceIdx = 0; courceIdx < course.length; courceIdx++) 
    {
        // create new div and give it a class
        let newDiv = document.createElement("div");
        newDiv.classList.add("pythonCard", "swiper-slide");
        // get an image of python course
        let courseImage = document.createElement("img");
        let a = document.createElement("a");
        // Author creation, give class, give content 
        let Author_span = document.createElement("span");
        Author_span.className = "Author";
        let Author_content = document.createTextNode(course[courceIdx].author);
        Author_span.appendChild(Author_content);
        // Price creation, give class, give content 
        let Price_span = document.createElement("span");
        Price_span.className = "Price";
        Price_span.innerHTML = "&#69;&#163;";
        let Price_content = document.createTextNode(course[courceIdx].price);
        Price_span.appendChild(Price_content);
        // get source of courseImg
        courseImage.src = course[courceIdx].image;
        // title content
        let titleContent = document.createTextNode(course[courceIdx].title);
        // a link 
        a.href = course[courceIdx].link;
        a.appendChild(courseImage);
        a.appendChild(titleContent);
        a.appendChild(Author_span);
        a.appendChild(Price_span);
        // appent link to newDiv
        newDiv.append(a);
        document.querySelector(".pythonCards").appendChild(newDiv);
    }
}

document.querySelector(".search-bar input").addEventListener("input", (event) => {
        let pythonCards = document.querySelector(".pythonCards");
        pythonCards.innerHTML = "";
        let course = allCourses[filter];
        for(let courceIdx = 0; courceIdx < course.length; courceIdx++) {
              let Mytitle = course[courceIdx].title.toLowerCase();
              let searchPart = event.target.value.toLowerCase();
              if(Mytitle.includes(searchPart) === false) 
                  continue;
              // create new div and give it a class
              let newDiv = document.createElement("div");
              newDiv.classList.add("pythonCard", "swiper-slide");
              // get an image of python course
              let courseImage = document.createElement("img");
              let a = document.createElement("a");
              // Author creation, give class, give content 
              let Author_span = document.createElement("span");
              Author_span.className = "Author";
              let Author_content = document.createTextNode(course[courceIdx].author);
              Author_span.appendChild(Author_content);
              // Price creation, give class, give content 
              let Price_span = document.createElement("span");
              Price_span.className = "Price";
              Price_span.innerHTML = "&#69;&#163;";
              let Price_content = document.createTextNode(course[courceIdx].price);
              Price_span.appendChild(Price_content);
              // get source of courseImg
              courseImage.src = course[courceIdx].image;
              // title content
              let titleContent = document.createTextNode(course[courceIdx].title);
              // a link 
              a.href = course[courceIdx].link;
              a.appendChild(courseImage);
              a.appendChild(titleContent);
              a.appendChild(Author_span);
              a.appendChild(Price_span);
              // appent link to newDiv
              newDiv.append(a);
              pythonCards.appendChild(newDiv);
        }
});