const isLoggedIn = JSON.parse(localStorage.getItem("userId"));
console.log("data", isLoggedIn);

if (!isLoggedIn) {
  window.location.href = "./signup.html";
}

const userId = isLoggedIn.data.user._id;
const lbtn = document.getElementById("lgnbtn").addEventListener("click", () => {
  window.location.href = "./login.html";
});
const signbtn = document
  .getElementById("signbtn")
  .addEventListener("click", () => {
    window.location.href = "./signup.html";
  });
const addQuestionBtn = document.getElementById("addQuestionBtn");
const formSection = document.getElementById("questionFormSection");
const questionForm = document.getElementById("questionForm");
const questionTitleInput = document.getElementById("questionTitle");
const questionsList = document.getElementById("questionsList");

addQuestionBtn.addEventListener("click", () => {
  formSection.classList.toggle("hidden");
});

async function allblog() {
  try {
    let response = await fetch(
      "https://ai-agent-steel-ten.vercel.app/api/v1/stackFlowRoutes/questions/getAllQuestion"
    );
    let data = await response.json();
    console.log(data);
    const arr = Object.values(data);
    console.log(arr);

    arr.forEach((element) => {
      const div = document.getElementById("div");
      const userName =
        element.user &&
        (element.user.Name === null ||element.user.Name === "Null" || element.user.Name === "")? "anonymous": element.user && element.user.Name? element.user.Name: "anonymous";
      div.innerHTML += `
                   <div class="card"  id="${element._id}">
                    <h2>${element.title}</h2>
                    <h4>${userName}</h4>
                     <p>${element.votes}</p>
                   </div>`;
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
allblog();

window.addEventListener("DOMContentLoaded", allblog());

questionForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const title = questionTitleInput.value.trim();

  if (!title) {
    alert("❗ Please enter a question title.");
    return;
  }

  const requestBody = {
    title: title,
    userId: userId,
  };

  try {
    const response = await fetch(
      "https://ai-agent-steel-ten.vercel.app/api/v1/stackFlowRoutes/questions/addQuestions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      alert(" Server returned an invalid response. Please try again later.");
      return;
    }

    if (response.ok) {
      alert(`Question added!\n\nID: ${data._id}\nTitle: ${data.title}`);
      questionForm.reset();
      formSection.classList.add("hidden");

      fetchAndRenderQuestions();
    } else {
      alert(` Failed to add question:\n${data.message || "Unknown error."}`);
    }
  } catch (error) {
    console.error("Error submitting question:", error);
  }
});
