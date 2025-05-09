document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("main");

  const htmlToAppend = `
    <div style="margin: -3rem -3rem 1rem -3rem; display: flex;">
      <a style="flex-grow: 1; padding: 1rem;" href="/">Pelican</a>
      <a style="flex-grow: 1; padding: 1rem; background-color: #0004;
             border-top-right-radius: 0.7rem;
             border-bottom: 1px solid rgba(var(--gray-800),0.8);
             border-left: 1px solid rgba(var(--gray-800),0.8);"
         href="/map/">Dynmap</a>
    </div>
  `;

  container.insertAdjacentHTML("afterbegin", htmlToAppend);

  document.querySelector(".fi-simple-header > .fi-logo").style.display = "none";
});
