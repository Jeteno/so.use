export function Shuffle() {
   function shuffleElements() {
      const container = document.querySelector('.pentagon__list');
      for (let i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[Math.random() * i | 0]);
      }
    }

    document.querySelector('.button').addEventListener('click', shuffleElements);
}