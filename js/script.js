let paginationData = users;

const totalNoOfData = document.querySelector(".page-header h3");
const noOfUsersPerPage = 10;
const noOfPages = Math.ceil(paginationData.length/noOfUsersPerPage);
totalNoOfData.textContent += paginationData.length;


const contactList = document.querySelector(".contact-list");
const pagination = document.querySelector(".pagination");

for(var i=0; i<noOfPages; i++) {
    var listItem = document.createElement("li");
    var link = document.createElement("a");
    link.href = "#";
    link.textContent = i + 1; 

    link.addEventListener("click", function (event) {
      event.preventDefault();
      changePage(parseInt(event.target.textContent)); 
    });
  
    if (i === 0) {
      link.classList.add("active");
    }
  
    listItem.appendChild(link);
    pagination.appendChild(listItem);
}

changePage = (pageNumber) => {
    for(var i=0; i<noOfPages; i++) {
        const childNode = pagination.childNodes[i+1];
        
        if(pageNumber === (i+1))
            childNode.querySelector("a").setAttribute("class", "active");
        else 
            childNode.querySelector("a").setAttribute("class", "");
    }

    loadPageData(pageNumber);
}

loadPageData = (pageNumber) => {
    const firstIndex = noOfUsersPerPage*(pageNumber-1);
    const lastIndex = noOfUsersPerPage*pageNumber;
    const dataPerPage = paginationData.slice(firstIndex, lastIndex);

    contactList.innerHTML = '';

    dataPerPage.map(data=>{
        var listItem = document.createElement("li");
      listItem.classList.add("contact-item", "cf");
  
      var detailsDiv = document.createElement("div");
      detailsDiv.classList.add("contact-details");
  
      var avatarImg = document.createElement("img");
      avatarImg.classList.add("avatar");
      avatarImg.src = data.image;
  
      var nameHeading = document.createElement("h3");
      nameHeading.textContent = data.name;
  
      var emailSpan = document.createElement("span");
      emailSpan.classList.add("email");
      emailSpan.textContent = data.email;
  
      detailsDiv.appendChild(avatarImg);
      detailsDiv.appendChild(nameHeading);
      detailsDiv.appendChild(emailSpan);
  
      var joinedDetailsDiv = document.createElement("div");
      joinedDetailsDiv.classList.add("joined-details");
  
      var dateSpan = document.createElement("span");
      dateSpan.classList.add("date");
      dateSpan.textContent = data.joined;
  
      joinedDetailsDiv.appendChild(dateSpan);
  
      listItem.appendChild(detailsDiv);
      listItem.appendChild(joinedDetailsDiv);
  
      contactList.appendChild(listItem);
    });

}

loadPageData(1);
