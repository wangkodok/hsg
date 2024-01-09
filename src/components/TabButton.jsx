/* eslint-disable */

function TabButton({ children }) {
  function handleClick() {
    console.log("hello world");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
export default TabButton;
