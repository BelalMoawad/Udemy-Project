let pythonCourses;

fetch("http://myjson.dit.upm.es/api/bins/95hg")
  .then((response) => response.json())
  // get json of python cources ok
  .then((json) => {
    pythonCourses = json;
    for(let courceIdx = 0; courceIdx < pythonCourses.length; courceIdx++) {
        // create new div and give it a class
        let newDiv = document.createElement("div");
        newDiv.className = "pythonCard";
        // get an image of python course
        let courseImage = document.createElement("img");
        let a = document.createElement("a");
        // Author creation, give class, give content 
        let Author_span = document.createElement("span");
        Author_span.className = "Author";
        let Author_content = document.createTextNode(pythonCourses[courceIdx].author);
        Author_span.appendChild(Author_content);
        // Price creation, give class, give content 
        let Price_span = document.createElement("span");
        Price_span.className = "Price";
        Price_span.innerHTML = "&#69;&#163;";
        let Price_content = document.createTextNode(pythonCourses[courceIdx].price);
        Price_span.appendChild(Price_content);
        // get source of courseImg
        courseImage.src = pythonCourses[courceIdx].image;
        // title content
        let titleContent = document.createTextNode(pythonCourses[courceIdx].title);
        // a link 
        a.href = pythonCourses[courceIdx].link;
        a.appendChild(courseImage);
        a.appendChild(titleContent);
        a.appendChild(Author_span);
        a.appendChild(Price_span);
        // appent link to newDiv
        newDiv.append(a);
        document.querySelector(".pythonCards").appendChild(newDiv);
    }
  });

  document.querySelector(".search-bar input").addEventListener("input", (event) => {
        let pythonCards = document.querySelector(".pythonCards");
        pythonCards.innerHTML = "";
        for(let courceIdx = 0; courceIdx < pythonCourses.length; courceIdx++) {
              let Mytitle = pythonCourses[courceIdx].title.toLowerCase();
              let searchPart = event.target.value.toLowerCase();
              if(Mytitle.includes(searchPart) === false) 
                  continue;
              // create new div and give it a class
              let newDiv = document.createElement("div");
              newDiv.className = "pythonCard";
              // get an image of python course
              let courseImage = document.createElement("img");
              let a = document.createElement("a");
              // Author creation, give class, give content 
              let Author_span = document.createElement("span");
              Author_span.className = "Author";
              let Author_content = document.createTextNode(pythonCourses[courceIdx].author);
              Author_span.appendChild(Author_content);
              // Price creation, give class, give content 
              let Price_span = document.createElement("span");
              Price_span.className = "Price";
              Price_span.innerHTML = "&#69;&#163;";
              let Price_content = document.createTextNode(pythonCourses[courceIdx].price);
              Price_span.appendChild(Price_content);
              // get source of courseImg
              courseImage.src = pythonCourses[courceIdx].image;
              // title content
              let titleContent = document.createTextNode(pythonCourses[courceIdx].title);
              // a link 
              a.href = pythonCourses[courceIdx].link;
              a.appendChild(courseImage);
              a.appendChild(titleContent);
              a.appendChild(Author_span);
              a.appendChild(Price_span);
              // appent link to newDiv
              newDiv.append(a);
              pythonCards.appendChild(newDiv);
        }
  });

