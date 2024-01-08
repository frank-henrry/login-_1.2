//este codigo muestra los registros de una base de daros creados en firebase.
const postList = document.querySelector(".posts");

export const setupPosts = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => { //hace un recorrido en el codigo
      const post = doc.data();
      const li = `
      <li class="list-group-item list-group-item-action">
        <h5>${post.title}</h5>
        <p>${post.content}</p>
      </li>
    `;
      html += li;
    });
    postList.innerHTML = html;
  } else {
    postList.innerHTML = '<h4 class="text-white"> </h4>';
  }
};